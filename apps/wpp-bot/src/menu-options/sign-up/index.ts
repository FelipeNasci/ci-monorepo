import { MenuOptions } from "../interface"

export enum EUserType {
  Professor = "1",
  TAE = "2",
  Student = "3",
  Other = "4",
}

export enum ELocation { RTT = "1",  MME = "2" }

export const FULL_NAME: MenuOptions = {
  className: 'FULL_NAME',
  message: "Olá 👋, vamos iniciar nos apresentando. Eu sou o 🤖 CCAE-BOT, o assistente virtual do CCAE. E você? Qual o seu nome completo?",
}

export const USER_TYPE: MenuOptions = {
  className: 'USER_TYPE',
  message: "Qual o seu vínculo com a UFPB?",
  [EUserType.Professor]: "Professor",
  [EUserType.TAE]: "TAE",
  [EUserType.Student]: "Aluno",
  [EUserType.Other]: "Outro",
}

export const LOCATION: MenuOptions = {
  className: 'LOCATION',
  message: "Para qual unidade você gostaria de atendimento?",
  [ELocation.RTT]: "Rio Tinto",
  [ELocation.MME]: "Mamanguape"
}

export const EMAIL: MenuOptions = {
  className: 'EMAIL',
  message: "Agora precisamos saber o seu email 😄",
}
