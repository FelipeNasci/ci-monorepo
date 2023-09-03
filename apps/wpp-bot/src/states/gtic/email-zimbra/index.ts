import {
  ZIMBRA_KIND_SERVICE,
  ZIMBRA_MORE_DETAILS,
  EZimbraKindService,
} from "../../../menu-options/gtic/email-zimbra";
import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import { getValuesFromObject } from "../../../utils";
import type { State } from "../../interface";

const zimbraServices = getValuesFromObject<string>(EZimbraKindService);
export const ZimbraKindServiceState: State = {
  menu: ZIMBRA_KIND_SERVICE,
  next: (choice) => zimbraServices.includes(choice) && ZimbraMoreDetailsState,
};

export const ZimbraMoreDetailsState: State = {
  menu: ZIMBRA_MORE_DETAILS,
  next: () => AnswerZimbraServiceState,
};

export const AnswerZimbraServiceState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
