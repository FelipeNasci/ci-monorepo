import {
  ZIMBRA_KIND_SERVICE,
  ZIMBRA_MORE_DETAILS,
} from "../../../menu-options/gtic/email-zimbra";
import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import type { State } from "../../interface";

export const ZimbraKindServiceState: State = {
  menu: ZIMBRA_KIND_SERVICE,
  next: () => ZimbraMoreDetailsState,
};

export const ZimbraMoreDetailsState: State = {
  menu: ZIMBRA_MORE_DETAILS,
  next: () => AnswerZimbraServiceState,
};

export const AnswerZimbraServiceState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
