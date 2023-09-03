import {
  EMAIL_GROUP_MORE_DETAILS,
  EMAIL_GROUP_KIND,
  EEmailGroupKind,
} from "../../../menu-options/gtic/email-group";
import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import { getValuesFromObject } from "../../../utils";
import type { State } from "../../interface";

const emailsKind = getValuesFromObject<string>(EEmailGroupKind);

export const EmailGroupKindState: State = {
  menu: EMAIL_GROUP_KIND,
  next: (choice) => emailsKind.includes(choice) && EmailGroupMoreDetailsState,
};

export const EmailGroupMoreDetailsState: State = {
  menu: EMAIL_GROUP_MORE_DETAILS,
  next: () => AnswerEmailGroupState,
};

export const AnswerEmailGroupState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
