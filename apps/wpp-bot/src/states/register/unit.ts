import { State } from '../interface'
import { LOCATION, ELocation } from '../../menu-options/sign-up/user'
import { EMAIL_STATE } from './email'

const choices: string[] = [
  ELocation.RTT,
  ELocation.MME,
]

export const UNIT_STATE: State = {
  menu: LOCATION,
  next: (choice) => choices.includes(choice) && EMAIL_STATE
};
