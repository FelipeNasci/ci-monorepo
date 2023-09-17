import { FullNameState } from "./chat/sign-up";
import { State } from "./chat/interface";
import { generateMenu } from "./helpers";
import {
  wrongAnswerMessage,
  exitMessage,
  welcomeToChatMessage,
} from "./helpers/messages";
import { inputListener } from "./helpers/input-listeners";
import { sendEmail } from "./services/email";
import ExpireMap from "expiry-map";
import { time } from "../config";
import { Actions, ActiveUsers, ChatUser, Request } from "./domain";

const activeUsers = new ExpireMap<string, ActiveUsers>(time);

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
  if (state?.type == "service") sendEmail(request as any);
  return state;
};

export function botController(user: ChatUser): string {
  const activeUser = activeUsers.get(user.phoneNumber);

  if (!activeUser) {
    const { menu } = handleInitialPayload(user);
    return welcomeToChatMessage(generateMenu(menu));
  }

  const choice = user.message;

  const isFirstStage = activeUser.payload.previousStates.length === 0;
  const hasGoBackChoose = choice.toLowerCase() === Actions.goBack;
  const hasExitChoose = choice.toLowerCase() === Actions.exit;

  if (hasGoBackChoose) {
    const { menu } = handleGoBack(user, activeUser, isFirstStage);
    return generateMenu(menu);
  }

  if (hasExitChoose) {
    handleExit(user);
    return exitMessage();
  }

  const nextState = activeUser.payload.currentState?.next(choice);
  const isFinalStage = !nextState?.next;

  if (!nextState)
    return wrongAnswerMessage(
      generateMenu(activeUser.payload.currentState.menu)
    );

  const request = {
    ...activeUser.payload.request,
    ...inputListener(activeUser.payload.currentState.menu, choice),
  };

  if (isFinalStage) {
    const { answer } = handleFinalStage(nextState, request, user);
    return answer(choice);
  }
  handleUpdateState(user, activeUser, request, nextState);

  return generateMenu(nextState.menu);
}
