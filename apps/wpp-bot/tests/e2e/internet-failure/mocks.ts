export const firstOptionsMock = 'Olá, bem-vindo.\n' +
  'Com qual setor você gostaria de falar?\n' +
  '1 - GTIC\n' +
  '2 - ASSESSORIA ADMINISTRATIVA\n' +
  '3 - SUBPREFEITRA'

export const gticOptionsMock = 'No que a GTIC poderia te ajudar?\n' +
  '1 - ACESSO A INTERNET' 

export const gticInternetAccessOptionsMock = 'Em qual tipo de conexão a GTIC pode te ajudar?\n' +
  '1 - CONECTAR A UFPB SEM FIOS\n' +
  '2 - FALHA EM INTERNET CABEADA\n' +
  '3 - FALHA EM INTERNET WIFI'

export const gticSetupWifiOptionsMock = 'Qual o sistema que você gostaria de suporte?\n' +
  '1 - ANDROID\n' +
  '2 - LINUX\n' +
  '3 - WINDOWS\n' +
  '4 - MACOS/iOS'

enum OperationalSystem {
  ANDROID = '1',
  LINUX = '2',
  WINDOWS = '3',
  MAC_IOS = '4',
}

export const OperationalSystemAnswerMock: Record<OperationalSystem, {system: string; text: string}> = {
  [OperationalSystem.ANDROID]: {
    system: "ANDROID",
    text: `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO ANDROID

*1*: Procure pela rede UfpbSemFios.
*2*: Selecione Método EAP: PEAP.
*3*: Autenticação de Fase 2: MSCHAPV2
*4*: Certificado CA: (não especificado).
*5*: Identidade: seu usuário do sistema SIGAA / SIGRH.
*6*: Identidade anônima: deixe em branco.
*7*: Senha: senha do sistema SIGAA / SIGRH.
*8*: Conectar!`
  },

  [OperationalSystem.LINUX]: {
    system: "LINUX",
    text: `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO LINUX

*1*: Procure pela rede UfpbSemFios.
*2*: Segurança Wi-FI: WPA & WPA2 empresas.
*3*: Autenticação: TLS encapsulado.
*4*: Identidade anônima: deixe em branco.
*5*: Certificado CA: (Nenhum). Marque a opção “Nenhum certificado CA é necessário.
*6*: Autenticação interna: MSCHAPv2.
*7*: Nome de usuário: seu usuário do sistema SIGAA / SIGRH.
*8*: Senha: senha do sistema SIGAA / SIGRH.
*9*: Conectar!`
  },

  [OperationalSystem.WINDOWS]: {
    system: "WINDOWS",
    text: `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO WINDOWS

*1*: Baixe e execute o aplicativo de configuração da rede UfpbSemFios disponível no endereço:
*2*: Procure pela rede UfpbSemFios.
*3*: Nome de usuário: seu usuário do sistema SIGAA / SIGRH.
*4*: Senha: senha do sistema SIGAA / SIGRH.
*5*: Conectar!`
  },

  [OperationalSystem.MAC_IOS]: {
    system: "MACOS/iOS",
    text: `SIGA ESTES PASSOS PARA REALIZAR SUA CONFIGURAÇÃO DE INTERNET NO MACOS / iOS

*1*: Procure pela rede UfpbSemFios.
*2*: Nome de usuário: seu usuário do sistema SIGAA / SIGRH.
*3*: Senha: senha do sistema SIGAA / SIGRH.
*4*: Conectar!`
  }
}

