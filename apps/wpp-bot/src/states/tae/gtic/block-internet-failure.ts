import { State } from '../../interface'
import {  BLOCK_FAILURE_INTERNET_ACCESS } from '../../../menu-options/tae'
import { HALL_FAILURE_INTERNET_ACCESS_STATE} from './hall-internet-failure'

export const BLOCK_FAILURE_INTERNET_STATE: State = {
  menu: BLOCK_FAILURE_INTERNET_ACCESS,
  next: () => HALL_FAILURE_INTERNET_ACCESS_STATE
};
