import { State } from '../../interface'
import {ANSWERS_FAILURE_INTERNET_ACCESS_GTIC_TAE_  } from '../../../menu-options/tae'

export const ANSWER_INTERNET_FAILURE_STATE: State = {
  type: 'service',
  answer: () => ANSWERS_FAILURE_INTERNET_ACCESS_GTIC_TAE_[1]
};
 