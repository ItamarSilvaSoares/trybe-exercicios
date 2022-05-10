const myFizzBuzz = require('./myFizzBuzz');

describe('funcion myFizzBuzz', () => {
    it('Deve retornar fizzbuzz com a entrade 15', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    it('Deve retornar fizz com a entrada 12', () => {
        expect(myFizzBuzz(12)).toBe('fizz');
    })
    it('Deve retornar buzz com a entrada 20', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    })
    it('Deve retornar 2 com a entrada 2', () => {
        expect(myFizzBuzz(2)).toBe(2);
    })
    it('Deve retornar false com entrada "2"', () => {
        expect(myFizzBuzz('2')).toBe(false);
    })
})