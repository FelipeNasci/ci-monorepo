import { MenuOptions } from '../../interface'

// Menu available for GTIC TAE
export const GTIC_TAE: MenuOptions = {
  message: "No que a GTIC poderia te ajudar?",
  1: "ABRIR CHAMADO",
  2: "CONFIGURAR UFPB SEM FIOS",
  3: "RESERVAR UM LABORATÓRIO",
}

// When user select "CONFIGURAR UFPB SEM FIOS"
export const SETUP_WIFI_GTIC_TAE: MenuOptions = {
  message: 'Qual o sistema que você gostaria de suporte?',
  1: "ANDROID",
  2: "LINUX",
  3: "WINDOWS",
  4: "MACOS/iOS",
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
  1: ANSWER_ANDROID,
  2: ANSWER_LINUX,
  3: ANSWER_WINDOWS,
  4: ANSWER_MACOS
}
