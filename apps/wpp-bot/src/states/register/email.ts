import { State } from '../interface'
import { EMAIL } from '../../menu-options/sign-up/user'
import { TAE_INITIAL_MENU_STATE } from '../entrypoint-state/initial-menu'

export const EMAIL_STATE: State = {
  menu: EMAIL,
  next: () => TAE_INITIAL_MENU_STATE,
};
