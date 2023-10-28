import { MenuOptions } from "../../menu-options/interface";
import {
  USER_TYPE,
  FULL_NAME,
  LOCATION,
  EMAIL,
} from "../../menu-options/sign-up";

import { GTIC } from "../../menu-options/gtic";
import { INTERNET_ACCESS_KIND } from "../../menu-options/gtic/internet";
import {
  BLOCK_FAILURE_INTERNET_ACCESS,
  HALL_FAILURE_INTERNET_ACCESS,
  MORE_DETAILS_FAILURE_INTERNET_ACCESS,
} from "../../menu-options/gtic/internet/failure";

import { ZIMBRA_KIND_SERVICE } from "../../menu-options/gtic/email-zimbra";
import {
  EMAIL_GROUP_KIND,
  EMAIL_GROUP_MORE_DETAILS,
} from "../../menu-options/gtic/email-group";

import {
  EQUIPMENT_SERVICE_KIND,
  EQUIPMENT_BLOCK_LOCATION,
  EQUIPMENT_HALL_LOCATION,
  EQUIPMENT_ID,
  EQUIPMENT_MAINTENANCE_KIND,
  EQUIPMENT_MORE_DETAILS,
} from "../../menu-options/gtic/it-equipment";

import {
  SETUP_EQUIPMENT_BLOCK_LOCATION,
  SETUP_EQUIPMENT_HALL_LOCATION,
  SETUP_EQUIPMENT_ID,
  SETUP_KIND,
  SETUP_EQUIPMENT_MORE_DETAILS,
} from "../../menu-options/gtic/sertup-and-installation";

import {
  IT_MANAGEMENT,
  IT_MANAGEMENT_MORE_DETAILS,
} from "../../menu-options/gtic/it-management";

import { ASCON } from "../../menu-options/ascon";

import { ADMINISTRATIVE_CONSULTANCY } from "../../menu-options/administrative-consultancy";

import { State } from "../../chat/interface";
import { TicketDestination } from "../../domain";

const getClassName = ({ className }: MenuOptions) => className;

export const inputListener = ({ className }: State["menu"], input: string) =>
  mapInputToOptions(className, input);

export const mapInputToOptions = (className: string, input: string) => {
  switch (className) {
    case getClassName(GTIC):
      const servico = GTIC.options[input];
      return { servico, destination: TicketDestination.Gtic };

    case getClassName(INTERNET_ACCESS_KIND):
      const option = { "2": "cabo", "3": "wifi" };
      return { tipoConexao: option[input], tipoServico: option[input] };

    case getClassName(BLOCK_FAILURE_INTERNET_ACCESS):
      return { bloco: input };

    case getClassName(HALL_FAILURE_INTERNET_ACCESS):
      return { sala: input };

    case getClassName(MORE_DETAILS_FAILURE_INTERNET_ACCESS):
      return { descricao: input };

    case getClassName(FULL_NAME):
      return { name: input };

    case getClassName(USER_TYPE):
      return { tipo: USER_TYPE.options[input] };

    case getClassName(LOCATION):
      return { unidade: LOCATION.options[input] };

    case getClassName(EMAIL):
      return { email: input };

    case getClassName(ZIMBRA_KIND_SERVICE):
      return { tipoServico: ZIMBRA_KIND_SERVICE.options[input] };

    case getClassName(EMAIL_GROUP_KIND):
      return { tipoServico: EMAIL_GROUP_KIND.options[input] };

    case getClassName(EMAIL_GROUP_MORE_DETAILS):
      return { descricao: input };

    case getClassName(EQUIPMENT_SERVICE_KIND):
      return { tipoServico: EQUIPMENT_SERVICE_KIND.options[input] };

    case getClassName(EQUIPMENT_MAINTENANCE_KIND):
      return { dispositivo: EQUIPMENT_MAINTENANCE_KIND.options[input] };

    case getClassName(EQUIPMENT_ID):
      return { tombamento: input };

    case getClassName(EQUIPMENT_BLOCK_LOCATION):
      return { bloco: input };

    case getClassName(EQUIPMENT_HALL_LOCATION):
      return { sala: input };

    case getClassName(EQUIPMENT_MORE_DETAILS):
      return { descricao: input };

    case getClassName(SETUP_KIND):
      return { tipoServico: SETUP_KIND.options[input] };

    case getClassName(SETUP_EQUIPMENT_ID):
      return { tombamento: input };

    case getClassName(SETUP_EQUIPMENT_BLOCK_LOCATION):
      return { bloco: input };

    case getClassName(SETUP_EQUIPMENT_HALL_LOCATION):
      return { sala: input };

    case getClassName(SETUP_EQUIPMENT_MORE_DETAILS):
      return { descricao: input };

    case getClassName(IT_MANAGEMENT):
      return { tipoServico: IT_MANAGEMENT.options[input] };

    case getClassName(IT_MANAGEMENT_MORE_DETAILS):
      return { descricao: input };

    case getClassName(ASCON):
      return { destination: TicketDestination.Ascon, descricao: input };

    case getClassName(ADMINISTRATIVE_CONSULTANCY):
      return {
        destination: TicketDestination.AdministrativeConsultancy,
        descricao: input,
      };

    default:
      return {};
  }
};
