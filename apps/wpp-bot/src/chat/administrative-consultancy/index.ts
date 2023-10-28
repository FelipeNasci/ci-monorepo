import { State } from "../interface";
import { ASCON } from "../../menu-options/ascon";
import { SUCCESS_ANSWER } from "../../menu-options/shared/success";

export const AdministrativeConsultancyMenuOptionsState: State = {
  menu: ASCON,
  next: () => AnswerAdministrativeConsultancyState,
};

export const AnswerAdministrativeConsultancyState: State = {
  type: "service",
  answer: () => SUCCESS_ANSWER.message,
};
