import { State } from '../interface'
import { USER_TYPE, EUserType } from '../../menu-options/sign-up/user'
import { UNIT_STATE } from './unit'

const choices: string[] = [
  EUserType.Professor,
  EUserType.TAE,
  EUserType.Student,
  EUserType.Other
]

export const PARTNER_TYPE_STATE: State = {
  menu: USER_TYPE,
  next: (choice) =>
    choices.includes(choice) && UNIT_STATE
};
