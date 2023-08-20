import { State } from '../interface'
import { BOND_TYPE, BOND_TYPE_KEY } from '../../menu-options/sign-up/user'
import { UNIT_STATE } from './unit'

const choices: string[] = [
  BOND_TYPE_KEY.TEACHER,
  BOND_TYPE_KEY.TAE,
  BOND_TYPE_KEY.STUDENT,
  BOND_TYPE_KEY.OTHER
]

export const PARTNER_TYPE_STATE: State = {
  menu: BOND_TYPE,
  next: (choice) =>
    choices.includes(choice) && UNIT_STATE
};
