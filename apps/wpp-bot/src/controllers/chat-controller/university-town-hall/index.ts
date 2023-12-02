import { State } from "../interface";
import {
  PU_DEPARTMENT_REQUESTER,
  PU_REGISTER_NUMBER_REQUESTER,
  PU_DEPARTMENT_PHONE_REQUESTER,
  PU_MAINTENANCE_CATEGORY,
  PU_MAINTENANCE_DEPARTMENT,
  PU_MAINTENANCE_DEPARTMENT_RTT,
  PU_MAINTENANCE_DEPARTMENT_MME,
  PU_MAINTENANCE_MORE_DETAILS,
  EMaintenanceCategoryKind,
  EMaintenanceDepartmentRtt,
  EMaintenanceDepartmentMme,
} from "../../../domain/menu-options/university-town-hall";
import { LOCATION, ELocation } from "../../../domain/menu-options/sign-up";

import { SUCCESS_ANSWER } from "../../../domain/menu-options/shared/success";
import { extractValuesFromObject } from "../../../helpers";

const maintenanceCategoryOptions = extractValuesFromObject<string>(
  EMaintenanceCategoryKind
);

const maintenanceDepartmentRttOptions = extractValuesFromObject<string>(
  EMaintenanceDepartmentRtt
);

const maintenanceDepartmentMmeOptions = extractValuesFromObject<string>(
  EMaintenanceDepartmentMme
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
  next: (_, ticket) => {
    console.log({ ticket });
    if (ticket?.unidade === LOCATION.options[ELocation.RTT])
      return puMaintenanceDepartmentRttState;
    return puMaintenanceDepartmentMmeState;
  },
};

export const puMaintenanceDepartmentRttState: State = {
  menu: PU_MAINTENANCE_DEPARTMENT_RTT,
  next: (choice) =>
    maintenanceDepartmentRttOptions.includes(choice) &&
    puMaintenanceDepartmentState,
};

export const puMaintenanceDepartmentMmeState: State = {
  menu: PU_MAINTENANCE_DEPARTMENT_MME,
  next: (choice) =>
    maintenanceDepartmentMmeOptions.includes(choice) &&
    puMaintenanceDepartmentState,
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
