import { State } from '../interface'
import { ENTRYPOINT_MENU_OPTIONS, Choice } from '../../menu-options/tae'
import { GticMenuOptionsState } from '../gtic'

export const TAE_INITIAL_MENU_STATE: State = {
  menu: ENTRYPOINT_MENU_OPTIONS,
  next: (choice) => {
    switch(choice) {
      case Choice.GTIC:
        return GticMenuOptionsState
    }
  },
};