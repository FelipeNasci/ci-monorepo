import { State } from '../../interface'
import { INTERNET_ACCESS_GTIC } from '../../../menu-options/tae'
import { SETUP_WIFI_STATE } from './setup-wifi'
import { BLOCK_FAILURE_INTERNET_STATE } from './block-internet-failure'

enum Choice {
  SETUP_WIFI = '1',
  ETHERNET_FAILURE = '2',
  WIFI_FAILURE = '3',
}

export const GTIC_INTERNET_ACCESS_STATE: State = {
  menu: INTERNET_ACCESS_GTIC,
  next: (choice: string): State => {
    switch (choice) {
      case Choice.SETUP_WIFI:
        return SETUP_WIFI_STATE
      case Choice.ETHERNET_FAILURE:
        return BLOCK_FAILURE_INTERNET_STATE
      case Choice.WIFI_FAILURE:
        return BLOCK_FAILURE_INTERNET_STATE
      default:
        return undefined
    }
  },
};
