import { MenuOptions } from "./interface";

export enum EntrypointOptions {
  GTIC = "1",
  ASSESSORIA_ADMINISTRATIVA = "2",
  SUBPREFEITRA = "3",
  ASCON = "4",
}

export const ENTRYPOINT_MENU_OPTIONS: MenuOptions = {
  message: `Olá, bem-vindo. \nCom qual setor você gostaria de falar?`,
  options: {
    [EntrypointOptions.GTIC]: "GTIC",
    [EntrypointOptions.ASCON]: "ASCON",
  },
};
