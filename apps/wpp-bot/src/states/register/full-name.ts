import { State } from '../interface'
import {  FULL_NAME } from '../../menu-options/sign-up/user'
import { PARTNER_TYPE_STATE } from './partner-type'

export const FULL_NAME_STATE: State = {
  menu: FULL_NAME,
  next: () => PARTNER_TYPE_STATE,
};
