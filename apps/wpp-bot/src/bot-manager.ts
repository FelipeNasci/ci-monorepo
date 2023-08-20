import { FULL_NAME_STATE } from './states/register/full-name'
import { State } from './states/interface'
import { generateMenu, inputFlow } from './utils'
import { sendEmail } from './services/email'

type User = { phoneNumber: string, message: string, isLogged?: boolean }
type Request = Record<string, string>
type ActiveUsers = { payload: { createdAt: Date, request: Request; state: State } }

const activeUsers = new Map<string, ActiveUsers>();

const getInput = (state: State, choice: string) => {
  const { className } = state.menu;
  return inputFlow(className, choice);
}

export function botManager(user: User): string {
  const activeUser = activeUsers.get(user.phoneNumber);

  if (!activeUser) {
    const state = FULL_NAME_STATE
    activeUsers.set(user.phoneNumber, { payload: { createdAt: new Date(), request: {}, state } })
    return generateMenu(state.menu);
  }

  const choice = user.message;

  const nextState = activeUser.payload.state?.next(choice);
  const isFinalStage = !nextState?.next;

  if(!nextState) 
  return `Desculpe, não entendi.
${generateMenu(activeUser.payload.state.menu)}`

  const request = { 
    ...activeUser.payload.request, 
    ...getInput(activeUser.payload.state, choice) 
  }

  if (isFinalStage) {
    activeUsers.delete(user.phoneNumber);
    
    if (nextState?.type == "service") 
      sendEmail(request as any)

    return nextState.answer(choice);
  }

  activeUsers.set(user.phoneNumber, {
    payload: {
      ...activeUser.payload,
      request,
      state: nextState
    }
  })

  return generateMenu(nextState.menu)
}
