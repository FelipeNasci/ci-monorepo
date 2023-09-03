import {
  EMAIL_GROUP_MORE_DETAILS,
  EMAIL_GROUP_KIND,
} from "../../../menu-options/gtic/email-group";
import { SUCCESS_ANSWER } from "../../../menu-options/shared/success";
import type { State } from "../../interface";

export const EmailGroupKindState: State = {
  menu: EMAIL_GROUP_KIND,
  next: () => EmailGroupMoreDetailsState,
};

export const EmailGroupMoreDetailsState: State = {
  menu: EMAIL_GROUP_MORE_DETAILS,
  next: () => AnswerEmailGroupState,
};

export const AnswerEmailGroupState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
