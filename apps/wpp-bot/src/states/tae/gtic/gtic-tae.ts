import { State } from '../../interface'
import { GTIC } from '../../../menu-options/tae'
import { GTIC_INTERNET_ACCESS_STATE } from './internet-access'

enum Choice {
  INTERNET_ACCESS = '1',
  OPEN_TICKET = '2',
  SCHEDULE_LAB = '3',
}

export const GTIC_STATE: State = {
  menu: GTIC,
  next: (choice: string): State => {
    switch (choice) {
      case Choice.INTERNET_ACCESS:
        return GTIC_INTERNET_ACCESS_STATE
      case Choice.OPEN_TICKET:
        return undefined
      case Choice.SCHEDULE_LAB:
        return undefined
      default:
        return undefined
    }
  },
};
