const {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
  } = require('./challenges');

  describe('function decode', () => {
      it('Deve retorna true, se decode é uma função', () => {
          expect(typeof decode).toEqual('function');
      })
      it('Deve retornar uma string com numeros a, e, i, o, u no lugar de 1, 2, 3, 4, 5', () => {
          expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
      })
      it('Deve retornar a string fsd, com emtrada fsd', () => {
          expect(decode('fsd')).toEqual('fsd');
      })
      it('Deve retornar uma string do mesmo tamanho da string passada', () => {
        expect(decode('itamar')).toHaveLength('itamar'.length);
      })
    })

    describe('function encode', () => {
    it('Deve retorna true, se encode é uma função', () => {
            expect(typeof encode).toEqual('function');
        })
        it('Deve retornar uma string com numeros 1, 2, 3, 4, 5 no lugar de a, e, i, o, u ', () => {
            expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
        })
        it('Deve retornar a string fsd, com emtrada fsd', () => {
            expect(encode('fsd')).toEqual('fsd');
        })
        it('Deve retornar uma string do mesmo tamanho da string passada', () => {
            expect(encode('3t1m1r')).toHaveLength('3t1m1r'.length);
          })
        
  })