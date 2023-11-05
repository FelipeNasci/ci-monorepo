import { State } from "../chat/interface";

export enum Actions {
  goBack = "voltar",
  exit = "sair",
}

export enum TicketDestination {
  Gtic = "gtic",
  Ascon = "ascon",
  AdministrativeConsultancy = "administrative_consultancy",
  UniversityTownHall = "university_town_hall",
}

export type ChatUser = { phoneNumber: string; message: string };

export type Request = Record<string, string>;

export type ActiveUsers = {
  payload: {
    createdAt: Date;
    request: Request;
    currentState: State;
    previousStates?: State[];
  };
};
