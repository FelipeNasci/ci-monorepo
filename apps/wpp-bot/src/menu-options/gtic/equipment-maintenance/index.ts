import { MenuOptions } from "../../interface";

export enum EEquipmentType {
  Computer = "1",
  Printer = "2",
  VoIP = "3",
}

export const EQUIPMENT_MAINTENANCE_KIND: MenuOptions = {
  className: "EQUIPMENT_MAINTENANCE_KIND",
  message: "Qual o tipo de equipamento que você deseja solicitar manutenção?",
  [EEquipmentType.Computer]: "Computador",
  [EEquipmentType.Printer]: "Impressora",
  [EEquipmentType.VoIP]: "Telefone VoIP",
};

export const EQUIPMENT_ID: MenuOptions = {
  className: "EQUIPMENT_ID",
  message: "Por favor, informe o número de tombamento do equipamento",
};

export const EQUIPMENT_BLOCK_LOCATION: MenuOptions = {
  className: "EQUIPMENT_BLOCK_LOCATION",
  message: "Por favor, informe em qual bloco está o equipamento",
};

export const EQUIPMENT_HALL_LOCATION: MenuOptions = {
  className: "EQUIPMENT_HALL_LOCATION",
  message: "Por favor, informe em qual sala está o equipamento",
};

export const EQUIPMENT_MORE_DETAILS: MenuOptions = {
  className: "EQUIPMENT_MORE_DETAILS",
  message: "Por favor, insira informações adicionais sobre o problema",
};
