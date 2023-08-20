import { botManager } from '../../../src/bot-manager';
import { firstOptionsMock, gticOptionsMock, gticInternetAccessOptionsMock, gticSetupWifiOptionsMock, OperationalSystemAnswerMock } from './mocks'

const phoneNumber = "+5583999999999"

enum Choice {
  ANY_MESSAGE = "Message_test",
  GTIC = "1",
  INTERNET_ACCESS = "1",
  ETHERNET_FAILURE = "2",
  WIFI_FAILURE = "3",
}

const failureType = {
  [Choice.ETHERNET_FAILURE]: "Ethernet Failure",
  [Choice.WIFI_FAILURE]: "Wifi Failure",
}
//, Choice.WIFI_FAILURE
const choices: Choice[] = [Choice.ETHERNET_FAILURE]

type MakeSutParams = {
  message: string,
  phoneNumber?: string
}

const makeSut = (params: MakeSutParams) => botManager({ phoneNumber, ...params })


choices.forEach((choice) => {


  describe(`#${failureType[choice]} - when user report a internet error`, () => {
    let output: string

    describe('when user starts the bot', () => {

      describe('and request a signup form', () => {
        it('asks the user name', () => {
          output = makeSut({ message: Choice.ANY_MESSAGE })
          expect(output).toEqual('Olá 👋, vamos iniciar nos apresentando. Eu sou o 🤖 CCAE-BOT, o assistente virtual do CCAE. E você? Qual o seu nome completo?')
        })

        it('asks the user type when send the name', () => {
          output = makeSut({ message: Choice.ANY_MESSAGE })
          expect(output).toEqual('Qual o seu vínculo com a UFPB?\n' +
            '1 - PROFESSOR\n' +
            '2 - TAE\n' +
            '3 - ALUNO\n' +
            '4 - OUTRO')
        })

          it('resend the same question when send a invalid answer', () => {
            output = makeSut({ message: '8' })
        
            expect(output).toEqual(
              'Desculpe, não entendi.\n' +
              'Qual o seu vínculo com a UFPB?\n' +
              '1 - PROFESSOR\n' +
              '2 - TAE\n' +
              '3 - ALUNO\n' +
              '4 - OUTRO')
          })


        it('asks the user location when send the type', () => {
          output = makeSut({ message: '2' })
          expect(output).toEqual('Para qual unidade você gostaria de atendimento?\n' +
            '1 - RIO TINTO\n' +
            '2 - MAMANGUAPE'
          )
        })

        it('asks the user email when send the location', () => {
          output = makeSut({ message: "2" })
          expect(output).toEqual('Agora precisamos do seu email :D'
          )
        })
      })

      it('returns the initial first options', () => {
        output = makeSut({ message: Choice.ANY_MESSAGE })
        console.log(output)
        expect(output).toEqual(firstOptionsMock)
      })

      describe('when user select the GTIC option', () => {
        it('returns the GTIC options', () => {
          output = makeSut({ message: Choice.GTIC })
          expect(output).toEqual(gticOptionsMock)
        })

        describe('when user select internet access', () => {

          it('returns internet services options', () => {
            output = makeSut({ message: Choice.INTERNET_ACCESS })
            expect(output).toEqual(gticInternetAccessOptionsMock)
          })
        })

        describe('when user select ethernet error', () => {
          it('returns a question asking which block the problem occurred in', () => {
            output = makeSut({ message: choice })
            expect(output).toEqual("Em qual bloco ocorre a falha?")
          })
        })

        describe('when user report the block with failure', () => {
          it('returns a question asking which hall the problem occurred in', () => {
            output = makeSut({ message: Choice.ANY_MESSAGE })
            expect(output).toEqual("Em qual sala ocorre a falha?")
          })
        })

        describe('when user report the hall with failure', () => {
          it('returns a question asking more details about the problem', () => {
            output = makeSut({ message: Choice.ANY_MESSAGE })
            expect(output).toEqual("Você poderia fornecer mais detalhes sobre a falha?")
          })
        })

        describe('when user report more details about the failure', () => {
          it('returns a question asking more details about the problem', () => {
            output = makeSut({ message: Choice.ANY_MESSAGE })
            expect(output).toEqual("Tudo certo! Nós registramos o seu chamado Obrigado!")
          })
        })
  
      })
    })
  })
})

