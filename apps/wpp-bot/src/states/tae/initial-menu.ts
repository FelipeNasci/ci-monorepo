import { State } from '../interface'
import { TAE_MENU_OPTIONS } from '../../menu-options/tae'
import { GTIC_TAE_STATE } from './gtic/gtic-tae-menu'

export const TAE_INITIAL_MENU_STATE: State = {
  menu: TAE_MENU_OPTIONS,
  next: (choice: string) => {
    switch(choice){
      case '1':
        return GTIC_TAE_STATE
     default:
        return undefined
    }
  },
};