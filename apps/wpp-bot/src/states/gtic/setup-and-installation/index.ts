import {
  SETUP_KIND,
  SETUP_EQUIPMENT_ID,
  SETUP_EQUIPMENT_BLOCK_LOCATION,
  SETUP_EQUIPMENT_HALL_LOCATION,
  SETUP_EQUIPMENT_MORE_DETAILS,
  ESetupAndInstallationKind,
} from "../../../menu-options/gtic/sertup-and-installation";
import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import { getValuesFromObject } from "../../../utils";
import type { State } from "../../interface";

const installationsKind = getValuesFromObject<string>(
  ESetupAndInstallationKind
);

export const SetupKindState: State = {
  menu: SETUP_KIND,
  next: (choice) => installationsKind.includes(choice) && SetupEquipmentIDState,
};

export const SetupEquipmentIDState: State = {
  menu: SETUP_EQUIPMENT_ID,
  next: () => SetupEquipmentBlockLocationState,
};

export const SetupEquipmentBlockLocationState: State = {
  menu: SETUP_EQUIPMENT_BLOCK_LOCATION,
  next: () => SetupEquipmentHallLocationState,
};

export const SetupEquipmentHallLocationState: State = {
  menu: SETUP_EQUIPMENT_HALL_LOCATION,
  next: () => SetupEquipmentMoreDetailsState,
};

export const SetupEquipmentMoreDetailsState: State = {
  menu: SETUP_EQUIPMENT_MORE_DETAILS,
  next: () => AnswerSetupEquipmentState,
};

export const AnswerSetupEquipmentState: State = {
  answer: () => SUCCESS_ANSWER.message,
};
