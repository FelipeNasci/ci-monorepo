import { MenuOptions } from "../interface";

export enum EGticOptions {
  InternetAccess = "1",
  EmailZimbra = "2",
  EmailGroup = "3",
  EquipmentMaintenance = "4",
  SetupAndInstallation = "5",
}
export const GTIC: MenuOptions = {
  className: "GTIC",
  message: "No que a GTIC poderia te ajudar?",
  options: {
    [EGticOptions.InternetAccess]: "Acesso à internet",
    [EGticOptions.EmailZimbra]: "Email Zimbra",
    [EGticOptions.EmailGroup]: "Grupo de Email",
    [EGticOptions.EquipmentMaintenance]: "Manutenção de Equipamentos",
    [EGticOptions.SetupAndInstallation]: "Instalação / Configuração",
  },
};
