import {
  EQUIPMENT_MAINTENANCE_KIND,
  EQUIPMENT_ID,
  EQUIPMENT_BLOCK_LOCATION,
  EQUIPMENT_HALL_LOCATION,
  EQUIPMENT_MORE_DETAILS,
} from "../../../menu-options/gtic/equipment-maintenance";
import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import type { State } from "../../interface";

export const EquipmentMaintenanceKindState: State = {
  menu: EQUIPMENT_MAINTENANCE_KIND,
  next: () => EquipmentMaintenanceIDState,
};

export const EquipmentMaintenanceIDState: State = {
  menu: EQUIPMENT_ID,
  next: () => EquipmentMaintenanceBlockState,
};

export const EquipmentMaintenanceBlockState: State = {
  menu: EQUIPMENT_BLOCK_LOCATION,
  next: () => EquipmentMaintenanceHallState,
};

export const EquipmentMaintenanceHallState: State = {
  menu: EQUIPMENT_HALL_LOCATION,
  next: () => EquipmentMaintenanceMoreDetailsState,
};

export const EquipmentMaintenanceMoreDetailsState: State = {
  menu: EQUIPMENT_MORE_DETAILS,
  next: () => AnswerEquipmentMaintenanceState,
};

export const AnswerEquipmentMaintenanceState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
