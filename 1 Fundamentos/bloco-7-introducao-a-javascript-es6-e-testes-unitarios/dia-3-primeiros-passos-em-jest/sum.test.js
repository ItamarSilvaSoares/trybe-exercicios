const sum = require('./sum');


describe('funcion sun', () => {
    it('sum two values', () => {
        expect(sum(4,5)).toEqual(9);
    })
    it('Deve retornar zero quando os dois valores for zero', () => {
        expect(sum(0,0)).toBe(0);
    })
    it('Deve retornar error quando um valor for invalido', () => {
        expect(() => {sum(4,'5')}).toThrow();
    })
    it('Deve retornar a mensagem parameters must be numbers quando um valor for invalido', () => {
        expect(() => {sum(4,'5')}).toThrow("parameters must be numbers");
    })
})
