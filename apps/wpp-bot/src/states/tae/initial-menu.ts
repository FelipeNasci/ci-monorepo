import { State } from '../interface'
import { ENTRYPOINT_MENU_OPTIONS } from '../../menu-options/tae'
import { GTIC_STATE } from './gtic/gtic-tae'

export const TAE_INITIAL_MENU_STATE: State = {
  menu: ENTRYPOINT_MENU_OPTIONS,
  next: (choice: string) => {
    switch(choice){
      case '1':
        return GTIC_STATE
     default:
        return undefined
    }
  },
};