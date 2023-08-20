import { botManager } from '../../../src/bot-manager';
import { firstOptionsMock, gticOptionsMock, gticInternetAccessOptionsMock, gticSetupWifiOptionsMock, OperationalSystemAnswerMock } from './mocks'

const phoneNumber = "+5583999999999"

enum Choice {
  ANY_MESSAGE = "Message_test",
  GTIC = "1",
  INTERNET_ACCESS = "1",
  SETUP_WIFI = "1",
}

type MakeSutParams = {
  message: string,
  phoneNumber: string
}

const makeSut = (params: MakeSutParams) => botManager(params)

describe('when user setup wifi with operational system:', () => {

  Object.entries(OperationalSystemAnswerMock).forEach(([operationSystem, value]) => {

    describe(`#${value.system}`, () => {
      let output: string
      
      describe('when user starts the bot', () => {
        it('returns the initial first options', () => {
          output = makeSut({ message: Choice.ANY_MESSAGE, phoneNumber })
          expect(output).toEqual(firstOptionsMock)
        })

        describe('when user select the GTIC option', () => {
          it('returns the GTIC options', () => {
            output = makeSut({ message: Choice.GTIC, phoneNumber })
            expect(output).toEqual(gticOptionsMock)
          })

          describe('when user select internet access', () => {
            it('returns internet services options', () => {
              output = makeSut({ message: Choice.INTERNET_ACCESS, phoneNumber })
              expect(output).toEqual(gticInternetAccessOptionsMock)
            })
          })

          describe('when user select setup wifi', () => {
            it('returns operational system options', () => {
              output = makeSut({ message: Choice.SETUP_WIFI, phoneNumber })
              expect(output).toEqual(gticSetupWifiOptionsMock)
            })
          })

          describe(`when user select the operational system ${value.system}`, () => {
            it(`returns how to setup wifi within ${value.system}`, () => {
              output = makeSut({ message: operationSystem, phoneNumber })
              expect(output).toEqual(value.text)
            })
          })
        })
      })
    })
  })
})