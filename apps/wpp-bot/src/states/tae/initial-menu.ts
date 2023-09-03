import { State } from '../interface'
import { ENTRYPOINT_MENU_OPTIONS } from '../../menu-options/tae'
import { GticMenuOptionsState } from '../gtic'

export const TAE_INITIAL_MENU_STATE: State = {
  menu: ENTRYPOINT_MENU_OPTIONS,
  next: (choice: string) => {
    switch(choice){
      case '1':
        return GticMenuOptionsState
     default:
        return undefined
    }
  },
};