import { State } from '../../interface'
import {  SETUP_WIFI_GTIC_TAE } from '../../../menu-options/tae'
import { ANSWER_SETUP_WIFI_GTIC_TAE_STATE } from './answer-setup-wifi'

export const SETUP_WIFI_GTIC_TAE_STATE: State = {
  menu: SETUP_WIFI_GTIC_TAE,
  next: () => ANSWER_SETUP_WIFI_GTIC_TAE_STATE
};
