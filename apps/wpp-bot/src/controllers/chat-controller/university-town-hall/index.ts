import { State } from "../interface";
import {
  PU_DEPARTMENT_REQUESTER,
  PU_REGISTER_NUMBER_REQUESTER,
  PU_DEPARTMENT_PHONE_REQUESTER,
  PU_MAINTENANCE_CATEGORY,
  PU_MAINTENANCE_DEPARTMENT,
  PU_MAINTENANCE_MORE_DETAILS,
  EMaintenanceCategoryKind,
} from "../../../menu-options/university-town-hall";

import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import { extractValuesFromObject } from "../../../helpers";

const maintenanceCategoryOptions = extractValuesFromObject<string>(
  EMaintenanceCategoryKind
);

export const puMaintenanceDepartmentKindState: State = {
  menu: PU_DEPARTMENT_REQUESTER,
  next: () => puMaintenanceRegisterNumberState,
};

export const puMaintenanceRegisterNumberState: State = {
  menu: PU_REGISTER_NUMBER_REQUESTER,
  next: () => puMaintenanceDepartmentPhoneState,
};

export const puMaintenanceDepartmentPhoneState: State = {
  menu: PU_DEPARTMENT_PHONE_REQUESTER,
  next: () => puMaintenanceDepartmentState,
};

export const puMaintenanceDepartmentState: State = {
  menu: PU_MAINTENANCE_DEPARTMENT,
  next: () => puMaintenanceCategoryState,
};
export const puMaintenanceCategoryState: State = {
  menu: PU_MAINTENANCE_CATEGORY,
  next: (choice) =>
    maintenanceCategoryOptions.includes(choice) &&
    puMaintenanceMoreDetailsState,
};

export const puMaintenanceMoreDetailsState: State = {
  menu: PU_MAINTENANCE_MORE_DETAILS,
  next: () => AnswerPuMaintenanceState,
};

export const AnswerPuMaintenanceState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
