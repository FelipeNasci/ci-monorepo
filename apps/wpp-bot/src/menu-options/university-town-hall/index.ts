import { MenuOptions } from "../interface";

export enum EMaintenanceCategoryKind {
  CivilBuilding = "1",
  Electricity = "2",
  AirConditioning = "3",
  EquipmentsOrMachines = "4",
  Hydraulic = "5",
  Gardening = "6",
  Woodwork = "7",
  Other = "8",
}

export const PU_DEPARTMENT_REQUESTER: MenuOptions = {
  className: "PU_DEPARTMENT_REQUESTER",
  message:
    "Vou precisar de algumas informações adicionais. \nPor favor informe o seu *setor* ou *lotação*.",
};

export const PU_REGISTER_NUMBER_REQUESTER: MenuOptions = {
  className: "PU_REGISTER_NUMBER_REQUESTER",
  message: "Agora preciso que você informe sua *matrícula*.",
};

export const PU_MAINTENANCE_DEPARTMENT: MenuOptions = {
  className: "PU_MAINTENANCE_DEPARTMENT",
  message: "Perfeito! Qual o setor que você deseja solicitar manutenção?",
};

export const PU_DEPARTMENT_PHONE_REQUESTER: MenuOptions = {
  className: "PU_DEPARTMENT_PHONE_REQUESTER",
  message: "Qual o ramal do seu setor",
};

export const PU_MAINTENANCE_CATEGORY: MenuOptions = {
  className: "PU_MAINTENANCE_CATEGORY",
  message: "Em qual categoria você acredita que se encaixa a sua solicitação?",
  options: {
    [EMaintenanceCategoryKind.CivilBuilding]: "Construção Civil",
    [EMaintenanceCategoryKind.Electricity]: "Elétrica",
    [EMaintenanceCategoryKind.AirConditioning]: "Ar-condicionado",
    [EMaintenanceCategoryKind.EquipmentsOrMachines]: "Máquinas e equipamentos",
    [EMaintenanceCategoryKind.Hydraulic]: "Hidráulica",
    [EMaintenanceCategoryKind.Gardening]: "Jardinagem",
    [EMaintenanceCategoryKind.Woodwork]: "Marcenaria",
    [EMaintenanceCategoryKind.Other]: "Outros",
  },
};

export const PU_MAINTENANCE_MORE_DETAILS: MenuOptions = {
  className: "PU_MAINTENANCE_MORE_DETAILS",
  message: "Para finalizar, informe mais detalhes sobre o problema enfrentado",
};
