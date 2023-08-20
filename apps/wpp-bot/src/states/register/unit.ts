import { State } from '../interface'
import { UNIT, UNIT_KEYS } from '../../menu-options/sign-up/user'
import { EMAIL_STATE } from './email'

const choices: string[] = [
  UNIT_KEYS.RTT,
  UNIT_KEYS.MME,
]

export const UNIT_STATE: State = {
  menu: UNIT,
  next: (choice) => choices.includes(choice) && EMAIL_STATE
};
