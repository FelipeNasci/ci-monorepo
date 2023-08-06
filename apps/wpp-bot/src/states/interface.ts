import { MenuOptions } from '../menu-options/interface'

export type State = {
  menu?: MenuOptions;
  next?: (choice: string) => State
  answer?: (choice: string) => string
};

export { MenuOptions as Flow }