import { MenuOptions } from "../menu-options/interface";
import { BOND_TYPE, COMPLETE_NAME, UNIT, EMAIL } from '../menu-options/sign-up/user'
import { GTIC, INTERNET_ACCESS_GTIC, BLOCK_FAILURE_INTERNET_ACCESS, HALL_FAILURE_INTERNET_ACCESS, MORE_DETAILS_FAILURE_INTERNET_ACCESS } from '../menu-options/tae/gtic'
export const generateMenu = ({ message, ...flow }: MenuOptions) => {
  const bkp = { ...flow }

  delete bkp.className
  const options = Object.entries(bkp)
    .map(([key, value]) => `${key} - ${value}`)
    .join('\n');
  return `${message || ''}\n${options}`.trim()
}

export const processInput = (className: string, input: string) => {
  switch (className) {
    case GTIC.className:
      if (input === '1')
        return { servico: 'internet', sendTo: 'suporte@ccae.ufpb.br' }

    case INTERNET_ACCESS_GTIC.className:
      const option = { '2': 'cabo', '3': 'wifi' }
      return { tipoConexao: option[input], tipoServico: option[input] }

    case BLOCK_FAILURE_INTERNET_ACCESS.className:
      return { bloco: input };

    case HALL_FAILURE_INTERNET_ACCESS.className:
      return { sala: input };

    case MORE_DETAILS_FAILURE_INTERNET_ACCESS.className:
      return { descricao: input };

    case COMPLETE_NAME.className:
      return { name: input };

    case BOND_TYPE.className:
      return { tipo: BOND_TYPE[input] };

    case UNIT.className:
      return { unidade: UNIT[input] }

    case EMAIL.className:
      return { email: input };

    default:
      return {};
  }
}

export const isLoggedArea = (className: string) => ([
  'INTERNET_ACCESS_GTIC',
  'BLOCK_FAILURE_INTERNET_ACCESS',
  'HALL_FAILURE_INTERNET_ACCESS',
  'MORE_DETAILS_FAILURE_INTERNET_ACCESS'
].some((item) => item === className))