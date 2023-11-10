import { FullNameState } from "./controllers/chat-controller/sign-up";
import { State } from "./controllers/chat-controller/interface";
import { generateMenu } from "./helpers";
import {
  wrongAnswerMessage,
  exitMessage,
  welcomeToChatMessage,
} from "./helpers/messages";
import { inputListener } from "./helpers/input-listeners";
import { getAllowedMenu, isAllowedOption } from "./helpers/user-permissions";
import { TicketController } from "./controllers/ticket-controller";
import { time } from "../config";
import { Actions, ActiveUsers, ChatUser, Request } from "./domain";

import { InMemoryDatabase } from "./services/database/in-memory";

const activeUsers = new InMemoryDatabase({ time });

const handleInitialPayload = (user: ChatUser) => {
  const state = FullNameState;
  const payload = {
    createdAt: new Date(),
    request: {},
    currentState: state,
    previousStates: [],
  };

  activeUsers.set(user.phoneNumber, { payload });
  return state;
};

const handleGoBack = (
  user: ChatUser,
  activeUser: ActiveUsers,
  isFirsStage: boolean
) => {
  const previousState = isFirsStage
    ? activeUser.payload.currentState
    : activeUser.payload.previousStates.pop();

  const payload = { ...activeUser.payload, currentState: previousState };

  activeUsers.set(user.phoneNumber, { payload });
  return previousState;
};

const handleUpdateState = (
  user: ChatUser,
  activeUser: ActiveUsers,
  request: Request,
  nextState: State
) => {
  activeUser.payload.previousStates.push(activeUser.payload.currentState);
  const payload = { ...activeUser.payload, request, currentState: nextState };

  activeUsers.set(user.phoneNumber, { payload });
};

const handleExit = (user: ChatUser) => {
  activeUsers.delete(user.phoneNumber);
};

const handleFinalStage = (state: State, request: Request, user: ChatUser) => {
  activeUsers.delete(user.phoneNumber);
  if (state?.type == "service") TicketController.create(request as any);
  return state;
};

export function botController(user: ChatUser): string {
  const activeUser = activeUsers.get(user.phoneNumber);

  if (!activeUser) {
    const { menu } = handleInitialPayload(user);
    return welcomeToChatMessage(generateMenu(menu));
  }

  const choice = user.message;
  const { currentState } = activeUser.payload;

  try {
    const isFirstStage = activeUser.payload.previousStates.length === 0;
    const hasGoBackChoose = choice.toLowerCase() === Actions.goBack;
    const hasExitChoose = choice.toLowerCase() === Actions.exit;

    const nextState = currentState?.next(choice);
    const isFinalStage = !nextState?.next;

    if (hasGoBackChoose) {
      const { menu } = handleGoBack(user, activeUser, isFirstStage);
      return generateMenu(menu);
    }

    if (hasExitChoose) {
      handleExit(user);
      return exitMessage();
    }

    if (!nextState) return wrongAnswerMessage(generateMenu(currentState.menu));

    const request = {
      ...activeUser.payload.request,
      ...inputListener(currentState.menu, choice),
    };

    const { tipo: userType } = request;

    const _isAllowedOption = isAllowedOption(
      currentState.menu.className,
      userType,
      choice
    );
    if (!_isAllowedOption)
      return wrongAnswerMessage(generateMenu(currentState.menu));

    if (isFinalStage) {
      const { answer } = handleFinalStage(nextState, request, user);
      return answer(choice);
    }

    if (userType) {
      const options = getAllowedMenu(
        nextState.menu.className,
        userType,
        activeUser.payload.currentState.next(choice)
      );

      if (options) {
        const newState = {
          ...nextState,
          menu: { ...nextState.menu, options },
        };
        handleUpdateState(user, activeUser, request, newState);
        return generateMenu(newState.menu);
      }
    }

    handleUpdateState(user, activeUser, request, nextState);

    return generateMenu(nextState.menu);
  } catch (error) {
    return wrongAnswerMessage(generateMenu(currentState.menu));
  }
}
