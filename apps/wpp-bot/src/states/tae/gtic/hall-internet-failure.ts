import { State } from '../../interface'
import {  HALL_FAILURE_INTERNET_ACCESS } from '../../../menu-options/tae'
import { MORE_DETAILS_INTERNET_FAILURE_STATE } from './more-details-internet-failure'

export const HALL_FAILURE_INTERNET_ACCESS_STATE: State = {
  menu: HALL_FAILURE_INTERNET_ACCESS,
  next: () => MORE_DETAILS_INTERNET_FAILURE_STATE
};
