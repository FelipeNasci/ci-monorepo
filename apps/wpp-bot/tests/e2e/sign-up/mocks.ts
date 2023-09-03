import { FULL_NAME, LOCATION, EMAIL, USER_TYPE } from '../../../src/menu-options/sign-up'
import { generateMenu } from '../../../src/utils'

export const phoneNumberMock = "+5583999999997";

export const signUpMock = {
   nameRequest: generateMenu(FULL_NAME),
   localizationRequest: generateMenu(LOCATION),
   bondRequest: generateMenu(USER_TYPE),
   emailRequest: generateMenu(EMAIL),
}
