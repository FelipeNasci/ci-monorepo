import { Ticket } from "../services/tickets";
import { TicketDestination } from "../domain";

const create = async ({ destination, ...ticket }: any) => {
  const ticketService = {
    [TicketDestination.Gtic]: Ticket.Gtic,
    [TicketDestination.Ascon]: Ticket.Ascon,
  };

  ticketService[destination].create(ticket);
};

export const TicketController = { create };
