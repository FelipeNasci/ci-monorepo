import { AdministrativeConsultancyTicket } from "./administrative-consultancy";
import { AsconTicket } from "./ascon";
import { GticTicket } from "./gtic";

export const Ticket = {
  Gtic: GticTicket.getInstance(),
  Ascon: AsconTicket.getInstance(),
  AdministrativeConsultancy: AdministrativeConsultancyTicket.getInstance(),
};
