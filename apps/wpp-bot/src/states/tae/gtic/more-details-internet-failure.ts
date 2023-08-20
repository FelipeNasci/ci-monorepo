import { State } from '../../interface'
import {  MORE_DETAILS_FAILURE_INTERNET_ACCESS } from '../../../menu-options/tae'
import { ANSWER_INTERNET_FAILURE_STATE } from './answer-internet-failure'

export const MORE_DETAILS_INTERNET_FAILURE_STATE: State = {
  menu: MORE_DETAILS_FAILURE_INTERNET_ACCESS,
  next: () => ANSWER_INTERNET_FAILURE_STATE
};
