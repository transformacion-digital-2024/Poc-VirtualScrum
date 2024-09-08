const impedimentService = require('../src/services/impedimentService');
const readAiService = require('../src/services/readAiService');
const openAiService = require('../src/services/openAiService');
const slackService = require('../src/services/slackService');

jest.mock('../src/services/readAiService');
jest.mock('../src/services/openAiService');
jest.mock('../src/services/slackService');

describe('Impediment Service', () => {
  it('should analyze transcription and return impediments', async () => {
    const mockTranscription = 'Esta es una transcripción de prueba';
    const mockImpediments = [
      { descripcion: 'Problema con el servidor', mencionadoPor: 'Juan' }
    ];

    readAiService.getTranscription.mockResolvedValue(mockTranscription);
    openAiService.detectImpediments.mockResolvedValue(mockImpediments);
    slackService.sendImpediments.mockResolvedValue();

    const result = await impedimentService.analyzeTranscription('123');

    expect(readAiService.getTranscription).toHaveBeenCalledWith('123');
    expect(openAiService.detectImpediments).toHaveBeenCalledWith(mockTranscription);
    expect(slackService.sendImpediments).toHaveBeenCalledWith(mockImpediments);
    expect(result).toEqual(mockImpediments);
  });

  // Agrega más pruebas según sea necesario
});
