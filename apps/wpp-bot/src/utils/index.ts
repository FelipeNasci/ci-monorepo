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

export const inputFlow = (className: string, response: string) => {
  switch (className) {
    case GTIC.className:
      if (response === '1')
        return { servico: 'internet', sendTo: 'suporte@ccae.ufpb.br' }

    case INTERNET_ACCESS_GTIC.className:
      if (response === '2')
        return { tipoConexao: 'cabo', tipoServico: 'cabo' }
      else if (response === '3')
        return { tipoConexao: 'wifi', tipoServico: 'wifi' }

    case BLOCK_FAILURE_INTERNET_ACCESS.className:
      return { bloco: response };

    case HALL_FAILURE_INTERNET_ACCESS.className:
      return { sala: response };

    case MORE_DETAILS_FAILURE_INTERNET_ACCESS.className:
      return { descricao: response };

    case COMPLETE_NAME.className:
      return { name: response };

    case BOND_TYPE.className:
      return { tipo: BOND_TYPE[response] };

    case UNIT.className:
      return { unidade: UNIT[response] }

    case EMAIL.className:
      return { email: response };

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