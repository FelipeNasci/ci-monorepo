import { State } from '../interface'
import { ENTRYPOINT_MENU_OPTIONS, Choice } from '../../menu-options/tae'
import { GTIC_STATE } from '../tae/gtic/gtic-tae'

export const TAE_INITIAL_MENU_STATE: State = {
  menu: ENTRYPOINT_MENU_OPTIONS,
  next: (choice) => {
    switch(choice) {
      case Choice.GTIC:
        return GTIC_STATE
    }
  },
};