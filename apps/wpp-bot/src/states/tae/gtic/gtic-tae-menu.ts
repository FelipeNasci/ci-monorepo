import { State } from '../../interface'
import { GTIC_TAE } from '../../../menu-options/tae'
import { SETUP_WIFI_GTIC_TAE_STATE } from './setup-wifi'

export const GTIC_TAE_STATE: State = {
  menu: GTIC_TAE,
  next: (choice: string): State => {
    switch (choice) {
      case '2':
        return SETUP_WIFI_GTIC_TAE_STATE
      default:
        return undefined
    }
  },
};
