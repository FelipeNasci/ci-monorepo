import { MenuOptions } from "../menu-options/interface";
import {
  USER_TYPE,
  FULL_NAME,
  LOCATION,
  EMAIL,
} from "../menu-options/sign-up/user";
import {
  GTIC,
  INTERNET_ACCESS_GTIC,
  BLOCK_FAILURE_INTERNET_ACCESS,
  HALL_FAILURE_INTERNET_ACCESS,
  MORE_DETAILS_FAILURE_INTERNET_ACCESS,
} from "../menu-options/tae/gtic";
export const generateMenu = ({ message, ...flow }: MenuOptions) => {
  const bkp = { ...flow };

  delete bkp.className;
  const options = Object.entries(bkp)
    .map(([key, value]) => `${key} - ${value}`)
    .join("\n");
  return `${message || ""}\n${options}`.trim();
};

const getClassName = ({ className }: MenuOptions) => className;

export const processInput = (className: string, input: string) => {
  switch (className) {
    case getClassName(GTIC):
      if (input === "1")
        return { servico: "internet", sendTo: "suporte@ccae.ufpb.br" };

    case getClassName(INTERNET_ACCESS_GTIC):
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
      return { tipo: USER_TYPE[input] };

    case getClassName(LOCATION):
      return { unidade: LOCATION[input] };

    case getClassName(EMAIL):
      return { email: input };

    default:
      return {};
  }
};

export const isLoggedArea = (className: string) =>
  [
    "INTERNET_ACCESS_GTIC",
    "BLOCK_FAILURE_INTERNET_ACCESS",
    "HALL_FAILURE_INTERNET_ACCESS",
    "MORE_DETAILS_FAILURE_INTERNET_ACCESS",
  ].some((item) => item === className);
