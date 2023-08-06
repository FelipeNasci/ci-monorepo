import { TAE_INITIAL_MENU_STATE } from './states/tae/initial-menu'
import { State } from './states/interface'
import { MenuOptions } from './menu-options/interface'

const generateMenu = ({ message, ...flow }: MenuOptions) => {
  const options = Object.entries(flow)
    .map(([key, value]) => `${key} - ${value}`)
    .join('\n');
  return `${message || ''}\n${options}`
}

type User = { phoneNumber: string, message: string }
type ActiveUsers = { payload: { createdAt: Date, state: State } }

const activeUsers = new Map<string, ActiveUsers>();

export function botManager(user: User): string {
  const activeUser = activeUsers.get(user.phoneNumber);

  if (!activeUser) {
    activeUsers.set(user.phoneNumber, { payload: { createdAt: new Date(), state: TAE_INITIAL_MENU_STATE } })
    return generateMenu(TAE_INITIAL_MENU_STATE.menu);
  }

  const choice = user.message;
  const nextState = activeUser.payload.state?.next(choice);

  if (!nextState.next) {
    activeUsers.delete(user.phoneNumber);
    return nextState.answer(choice);
  }

  activeUsers.set(user.phoneNumber, {
    payload: {
      ...activeUser.payload,
      state: nextState
    }
  })

  return generateMenu(nextState.menu)
}
