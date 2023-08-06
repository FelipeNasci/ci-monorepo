import { State } from '../../interface'
import { ANSWER_SETUP_WIFI_GTIC_TAE } from '../../../menu-options/tae'

export const ANSWER_SETUP_WIFI_GTIC_TAE_STATE: State = {
  answer: (choice) => ANSWER_SETUP_WIFI_GTIC_TAE[choice]
};
