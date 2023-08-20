import { MenuOptions } from '../interface'

const menuMessage = `Olá, bem-vindo.
Com qual setor você gostaria de falar?`

export enum Choice {
  GTIC =  "1",
  ASSESSORIA_ADMINISTRATIVA = "2",
  SUBPREFEITRA =  "3",
}

export const ENTRYPOINT_MENU_OPTIONS: MenuOptions = {
  message: menuMessage,
  [Choice.GTIC]: 'GTIC',
};
