import { Ticket } from "../services/tickets";
import { TicketDestination } from "../domain";

const create = async (ticket: any) => {
  switch (ticket.destination) {
    case TicketDestination.Gtic:
      return Ticket.Gtic.create(ticket);
  }
};

export const TicketController = { create };
