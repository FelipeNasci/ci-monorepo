import { State } from '../interface'
import {  COMPLETE_NAME } from '../../menu-options/sign-up/user'
import { PARTNER_TYPE_STATE } from './partner-type'

export const FULL_NAME_STATE: State = {
  menu: COMPLETE_NAME,
  next: () => PARTNER_TYPE_STATE,
};
