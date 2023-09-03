import { State } from "../interface";
import { GTIC , EGticOptions} from "../../menu-options/gtic";
import { InternetAccessState } from "./internet";
import { ZimbraKindServiceState } from "./email-zimbra";
import { EmailGroupKindState } from "./email-group";
import { EquipmentMaintenanceKindState } from "./equipment-maintenance";
import { SetupKindState } from "./setup-and-installation";

export const GticMenuOptionsState: State = {
  menu: GTIC,
  next: (choice: string): State => {
    switch (choice) {
      case EGticOptions.InternetAccess:
        return InternetAccessState;

      case EGticOptions.EmailZimbra:
        return ZimbraKindServiceState;

      case EGticOptions.EmailGroup:
        return EmailGroupKindState;

      case EGticOptions.EquipmentMaintenance:
        return EquipmentMaintenanceKindState;

      case EGticOptions.SetupAndInstallation:
        return SetupKindState;
    }
  },
};