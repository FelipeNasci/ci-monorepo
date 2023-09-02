import { MenuOptions } from "../../interface";

export enum EEquipmentMaintenance {
  Computer = 1,
  Printer = 2,
  VoIP = 3,
}

export const EQUIPMENT_MAINTENANCE: MenuOptions = {
  className: "EQUIPMENT_MAINTENANCE",
  message: "Qual o tipo de grupo você gostaria de ser inserido?",
  [EEquipmentMaintenance.Computer]: "Computador",
  [EEquipmentMaintenance.Printer]: "Impressora",
  [EEquipmentMaintenance.VoIP]: "Telefone VoIP",
};

export const EQUIPMENT_ID: MenuOptions = {
  className: "EQUIPMENT_ID",
  message: "Por favor informe o número de tombamento do equipamento",
};

export const EQUIPMENT_BLOCK_LOCATION: MenuOptions = {
  className: "EQUIPMENT_BLOCK_LOCATION",
  message: "Por favor informe em qual bloco está o equipamento",
};

export const EQUIPMENT_HALL_LOCATION: MenuOptions = {
  className: "EQUIPMENT_HALL_LOCATION",
  message: "Por favor informe em qual sala está o equipamento",
};

export const EQUIPMENT_MORE_DETAILS: MenuOptions = {
  className: "EQUIPMENT_MORE_DETAILS",
  message:
    "Por favor insira informações adicionais sobre o problema",
};
