const service = require("./service");

describe('test das funções que estão no service', () => { 
    it('test de mock ', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);
        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    })
    
    it('reatribuir funcionalidade a função', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
        
        expect(service.randomNumber(10, 2)).toBe(5);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
    })

    it('reatribuir funcionalidade a função, multiplicação', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
        
        expect(service.randomNumber(10, 5, 2)).toBe(100);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(10, 5, 2);
    })
    
    it('reatribuir funcionalidade a função, dobro', () => {
        service.randomNumber = jest.fn().mockReset();
        expect(service.randomNumber).toHaveBeenCalledTimes(0);
        service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
        
        expect(service.randomNumber(10)).toBe(20);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledWith(10);
    })
    it('SPY', () => {
        const mockFirstFunction = jest.spyOn(service, 'firstFunction').mockImplementation(a => a.toLowerCase()); 
        
        expect(mockFirstFunction('ITAMAR')).toBe('itamar');
        expect(service.firstFunction).toHaveBeenCalled();
        expect(service.firstFunction).toHaveBeenCalledWith('ITAMAR');
    })

    it('mockando função que recebe um parâmetro e retorna a última letra', () => {
        const mockSecondFunction = jest.spyOn(service, 'secondFunction').mockImplementation(a => a.at(-1)); 
        
        expect(mockSecondFunction('ITAMAR')).toBe('R');
        expect(service.secondFunction).toHaveBeenCalled();
        expect(service.secondFunction).toHaveBeenCalledWith('ITAMAR');
    })
    it('mockando função que recebe um parâmetro e retorna a última letra', () => {
        const mockThirdFunction = jest.spyOn(service, 'thirdFunction').mockImplementation((a, b, c) => a.concat(b, c)); 
        
        expect(mockThirdFunction('It', 'a', 'mar')).toBe('Itamar');
        expect(service.thirdFunction).toHaveBeenCalled();
        expect(service.thirdFunction).toHaveBeenCalledWith('It', 'a', 'mar');
    })
    
    it('restaurando a primeira função e verifica se ela retorna em caixa alta', () => {
        service.firstFunction.mockRestore();

        expect(service.firstFunction('itamar')).toBe('ITAMAR');
        
    })

    
})

describe('testando a requisição ', () => {
    service.fetchDog = jest.fn();
    afterEach(service.fetchDog.mockReset);

    it('testando requisição caso a promise resolva', async () => {
        service.fetchDog.mockResolvedValue('request success');

        service.fetchDog();
        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        await expect(service.fetchDog()).resolves.toBe('request success');
        expect(service.fetchDog).toBeCalledTimes(2);
    })

    it('testando requisição caso a promise seja rejeitada', async () => {
        service.fetchDog.mockResolvedValue('request failed');

        expect(service.fetchDog).toHaveBeenCalledTimes(0);
        await expect(service.fetchDog()).resolves.toBe('request failed');
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
    })
})