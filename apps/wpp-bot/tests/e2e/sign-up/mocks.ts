import { COMPLETE_NAME, UNIT, EMAIL, BOND_TYPE } from '../../../src/menu-options/sign-up/user'
import { generateMenu } from '../../../src/utils'

export const phoneNumberMock = "+5583999999997";

export const signUpMock = {
   nameRequest: generateMenu(COMPLETE_NAME),
   localizationRequest: generateMenu(UNIT),
   bondRequest: generateMenu(BOND_TYPE),
   emailRequest: generateMenu(EMAIL),
}
