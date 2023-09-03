import { State } from "../interface";
import {
  FULL_NAME,
  USER_TYPE,
  LOCATION,
  ELocation,
  EUserType,
  EMAIL,
} from "../../menu-options/sign-up";
import { InitialMenuState } from "../entrypoint-state";
import { getValuesFromObject } from "../../utils";

export const FullNameState: State = {
  menu: FULL_NAME,
  next: () => UserTypeState,
};

const usersType = getValuesFromObject<string>(EUserType);

export const UserTypeState: State = {
  menu: USER_TYPE,
  next: (choice) => usersType.includes(choice) && LocationState,
};

const locations = getValuesFromObject<string>(ELocation);

export const LocationState: State = {
  menu: LOCATION,
  next: (choice) => locations.includes(choice) && EmailState,
};

export const EmailState: State = {
  menu: EMAIL,
  next: () => InitialMenuState,
};
