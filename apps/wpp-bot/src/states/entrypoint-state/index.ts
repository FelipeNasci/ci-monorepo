import { State } from '../interface'
import { ENTRYPOINT_MENU_OPTIONS, EntrypointOptions } from '../../menu-options'
import { GticMenuOptionsState } from '../gtic'

export const InitialMenuState: State = {
  menu: ENTRYPOINT_MENU_OPTIONS,
  next: (choice) => {
    switch(choice) {
      case EntrypointOptions.GTIC:
        return GticMenuOptionsState
    }
  },
};