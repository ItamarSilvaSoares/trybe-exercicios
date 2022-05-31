// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio08");

describe("A função getPokemonDetails", (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    const filter = (pokemon) => pokemon.name === "Pikachu";
    const callback = (err, message) => {
      expect(err).toEqual(expectedError);
      done();
    };
    getPokemonDetails(filter, callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const filter = (pokemon) => pokemon.name === "Squirtle";
    const callback = (err, message) => {
      expect(message).toEqual(
        "Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun"
      );
      done();
    }
    getPokemonDetails(filter, callback);
  });
});