import { MenuOptions } from "../interface"

export const COMPLETE_NAME: MenuOptions = {
  className: 'COMPLETE_NAME',
  message: "Olá 👋, vamos iniciar nos apresentando. Eu sou o 🤖 CCAE-BOT, o assistente virtual do CCAE. E você? Qual o seu nome completo?",
}

export enum BOND_TYPE_KEY {
  TEACHER = "1",
  TAE = "2",
  STUDENT = "3",
  OTHER = "4",
}
export const BOND_TYPE: MenuOptions = {
  className: 'BOND_TYPE',
  message: "Qual o seu vínculo com a UFPB?",
  [BOND_TYPE_KEY.TEACHER]: "PROFESSOR",
  [BOND_TYPE_KEY.TAE]: "TAE",
  [BOND_TYPE_KEY.STUDENT]: "ALUNO",
  [BOND_TYPE_KEY.OTHER]: "OUTRO",
}

export enum UNIT_KEYS { RTT = "1",  MME = "2" }

export const UNIT: MenuOptions = {
  className: 'UNIT',
  message: "Para qual unidade você gostaria de atendimento?",
  [UNIT_KEYS.RTT]: "RIO TINTO",
  [UNIT_KEYS.MME]: "MAMANGUAPE"
}

export const EMAIL: MenuOptions = {
  className: 'EMAIL',
  message: "Agora precisamos do seu email :D",

}
