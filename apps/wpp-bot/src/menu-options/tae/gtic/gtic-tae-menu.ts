import { MenuOptions } from '../../interface'

// Menu available for GTIC TAE
export const GTIC: MenuOptions = {
  className: 'GTIC',
  message: "No que a GTIC poderia te ajudar?",
  1: "ACESSO À INTERNET",
  2: "EMAIL ZIMBRA",
  3: "GRUPO DE EMAIL",
  4: "MANUTENÇÃO DE EQUIPAMENTOS",
  5: "INSTALAÇÃO / CONFIGURAÇÃO",
}

export const INTERNET_ACCESS_GTIC: MenuOptions = {
  className: 'INTERNET_ACCESS_GTIC',
  message: "Em qual tipo de conexão a GTIC pode te ajudar?",
  1: "CONECTAR A UFPB SEM FIOS",
  2: "FALHA EM INTERNET CABEADA",
  3: "FALHA EM INTERNET WIFI",
}

export const BLOCK_FAILURE_INTERNET_ACCESS: MenuOptions = {
  className: 'BLOCK_FAILURE_INTERNET_ACCESS',
  message: "Em qual bloco ocorre a falha?"
}

export const HALL_FAILURE_INTERNET_ACCESS: MenuOptions = {
  className: 'HALL_FAILURE_INTERNET_ACCESS',
  message: "Em qual sala ocorre a falha?"
}

export const MORE_DETAILS_FAILURE_INTERNET_ACCESS: MenuOptions = {
  className: 'MORE_DETAILS_FAILURE_INTERNET_ACCESS',
  message: "Você poderia fornecer mais detalhes sobre a falha?"
}
export const ANSWERS_FAILURE_INTERNET_ACCESS_GTIC_TAE_: MenuOptions = {
  1: "Tudo certo! Nós registramos o seu chamado Obrigado!"
}

export enum SO {
  ANDROID = "1",
  LINUX = "2",
  WINDOWS = "3",
  MACOS = "4"
}
// When user select "CONFIGURAR UFPB SEM FIOS"
export const SETUP_WIFI_INTERNET_ACCESS_GTIC_TAE: MenuOptions = {
  message: 'Qual o sistema que você gostaria de suporte?',
  [SO.ANDROID]: "ANDROID",
  [SO.LINUX]: "LINUX",
  [SO.WINDOWS]: "WINDOWS",
  [SO.MACOS]: "MACOS/iOS",
}

const ANSWER_ANDROID = `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO ANDROID

*1*: Procure pela rede UfpbSemFios.
*2*: Selecione Método EAP: PEAP.
*3*: Autenticação de Fase 2: MSCHAPV2
*4*: Certificado CA: (não especificado).
*5*: Identidade: seu usuário do sistema SIGAA / SIGRH.
*6*: Identidade anônima: deixe em branco.
*7*: Senha: senha do sistema SIGAA / SIGRH.
*8*: Conectar!`

const ANSWER_LINUX = `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO LINUX

*1*: Procure pela rede UfpbSemFios.
*2*: Segurança Wi-FI: WPA & WPA2 empresas.
*3*: Autenticação: TLS encapsulado.
*4*: Identidade anônima: deixe em branco.
*5*: Certificado CA: (Nenhum). Marque a opção “Nenhum certificado CA é necessário.
*6*: Autenticação interna: MSCHAPv2.
*7*: Nome de usuário: seu usuário do sistema SIGAA / SIGRH.
*8*: Senha: senha do sistema SIGAA / SIGRH.
*9*: Conectar!`

const ANSWER_WINDOWS = `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO WINDOWS

*1*: Baixe e execute o aplicativo de configuração da rede UfpbSemFios disponível no endereço:
*2*: Procure pela rede UfpbSemFios.
*3*: Nome de usuário: seu usuário do sistema SIGAA / SIGRH.
*4*: Senha: senha do sistema SIGAA / SIGRH.
*5*: Conectar!`

const ANSWER_MACOS = `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO MACOS / iOS

*1*: Procure pela rede UfpbSemFios.
*2*: Nome de usuário: seu usuário do sistema SIGAA / SIGRH.
*3*: Senha: senha do sistema SIGAA / SIGRH.
*4*: Conectar!`

export const ANSWER_SETUP_WIFI_GTIC_TAE: MenuOptions = {
  [SO.ANDROID]: ANSWER_ANDROID,
  [SO.LINUX]: ANSWER_LINUX,
  [SO.WINDOWS]: ANSWER_WINDOWS,
  [SO.MACOS]: ANSWER_MACOS
}
