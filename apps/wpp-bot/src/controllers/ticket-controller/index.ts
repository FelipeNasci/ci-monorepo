import { Ticket } from "../../services/tickets";
import { TicketDestination } from "../../domain";

const create = async ({ destination, ...ticket }: any) => {
  const ticketService = getTicketServiceInstance(destination);
  ticketService.create(ticket);
};

const getTicketServiceInstance = (destination: string) => {
  const mapTicketsService = {
    [TicketDestination.Gtic]: Ticket.Gtic,
    [TicketDestination.Ascon]: Ticket.Ascon,
    [TicketDestination.AdministrativeConsultancy]:
      Ticket.AdministrativeConsultancy,
    [TicketDestination.UniversityTownHall]: Ticket.UniversityTownHall,
  };

  const instance = mapTicketsService[destination];
  if (!instance) throw new Error("Invalid destination");
  return mapTicketsService[destination];
};
export const TicketController = { create };
