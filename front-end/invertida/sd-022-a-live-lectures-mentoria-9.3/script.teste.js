const { appendInfo, fetchCep } = require('./script')
describe ('Testar função appendInfo', () => {
    expect.assertions(1);
    it('Testar na função appendInfo se ao inserir um cep valido retorna dados', async () => {
        const response = await appendInfo('88020000');
        expect(response).toHavePropety('UF', 'SC' 'Florianópolis');

        // UF: SC | Localidade: Florianópolis
    });
});