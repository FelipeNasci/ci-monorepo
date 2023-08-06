import { botManager } from './bot-manager';

describe('BotManager', () => {
  it('should be defined', () => {
    expect(botManager).toBeDefined();
  });

  describe('when user is in the first step', () => {

    describe('#SetupWifiFlow', () => {
      it('returns the setup wifi menu', () => {
        const firstSteps= botManager({ message: 'Olá', phoneNumber: '+5583999999999' })
        const secondStep = botManager({ message: '1', phoneNumber: '+5583999999999' })
        const thirdStep = botManager({ message: '2', phoneNumber: '+5583999999999' })
        const FourthStep = botManager({ message: '3', phoneNumber: '+5583999999999' })
        console.log({firstSteps, secondStep, thirdStep, FourthStep})
      })
    })
  })
})