import { MenuOptions } from "./interface";

export enum EntrypointOptions {
  GTIC = "1",
  ADMINISTRATIVE_CONSULTANCY = "2",
  ASCOM = "3",
  SUBPREFEITRA = "4",
}

export const ENTRYPOINT_MENU_OPTIONS: MenuOptions = {
  message: `Olá, bem-vindo. \nCom qual setor você gostaria de falar?`,
  options: {
    [EntrypointOptions.GTIC]: "Gerência de Tecnologia da Informação e Comunicação",
    [EntrypointOptions.ADMINISTRATIVE_CONSULTANCY]: "Assessoria Administrativa",
    [EntrypointOptions.ASCOM]: "Assessoria de Comunicação",
    [EntrypointOptions.SUBPREFEITRA]: "Subprefeitura Universitária",
  },
};
