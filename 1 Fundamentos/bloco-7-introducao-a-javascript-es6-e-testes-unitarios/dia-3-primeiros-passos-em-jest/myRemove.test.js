const myRemove = require('./myRemove');
describe('funcion myRemove', () => {
    const array = [1,2,3,4];
    it('Deve retornar o array sem elemento passado', () => {
        expect(myRemove(array, 3)).not.toContain(3);
    })
    it('Deve retornar um array diferente quando passado um array', () => {
        expect(myRemove(array,3)).not.toEqual(array);
    })
    it('Deve retornar um array o mesmo array quando passado elemento não se encotra no array', () => {
        expect(myRemove(array,5)).toEqual(array);
    })
})