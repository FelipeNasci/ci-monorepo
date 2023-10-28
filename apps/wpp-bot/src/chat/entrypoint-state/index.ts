import { State } from "../interface";
import { ENTRYPOINT_MENU_OPTIONS, EntrypointOptions } from "../../menu-options";
import { GticMenuOptionsState } from "../gtic";
import { AsconMenuOptionsState } from "../ascon";

export const InitialMenuState: State = {
  menu: ENTRYPOINT_MENU_OPTIONS,
  next: (choice) => {
    switch (choice) {
      case EntrypointOptions.GTIC:
        return GticMenuOptionsState;
      case EntrypointOptions.ASCON:
        return AsconMenuOptionsState;
    }
  },
};
