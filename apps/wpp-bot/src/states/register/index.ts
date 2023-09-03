import { State } from "../interface";
import {
  FULL_NAME,
  USER_TYPE,
  LOCATION,
  ELocation,
  EUserType,
  EMAIL,
} from "../../menu-options/sign-up/user";
import { TAE_INITIAL_MENU_STATE } from "../entrypoint-state/initial-menu";

export const FullNameState: State = {
  menu: FULL_NAME,
  next: () => UserTypeState,
};

const usersType: string[] = Object.entries(EUserType).map(
  ([_, value]) => value
);

export const UserTypeState: State = {
  menu: USER_TYPE,
  next: (choice) => usersType.includes(choice) && LocationState,
};

const locations: string[] = Object.entries(ELocation).map(
  ([_, value]) => value
);

export const LocationState: State = {
  menu: LOCATION,
  next: (choice) => locations.includes(choice) && EmailState,
};

export const EmailState: State = {
  menu: EMAIL,
  next: () => TAE_INITIAL_MENU_STATE,
};
