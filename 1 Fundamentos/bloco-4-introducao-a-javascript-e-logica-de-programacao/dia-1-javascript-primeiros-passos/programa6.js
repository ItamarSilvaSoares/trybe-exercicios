const peca = "Pawn"

switch (peca.toLowerCase()) {
    case "pawn":
        console.log(`Peão: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas`)
        break;
    case "knight":
        console.log(`Cavalo: O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L`)
        break;
    case "bishop":
        console.log(`Bispo: Move-se na diagonal`)
        break;
    case "rook":
        console.log(`Torre: Move-se em linha reta, tanto na vertical quanto na horizontal`)
        break
    case "queen":
        console.log(`Dama: Pode mover-se em qualquer direção (vertical, horizontal e diagonal)`)
        break;
    case "king":
        console.log(`Rei: Pode mover-se em qualquer direção, porém apenas uma casa por vez`)
        break;
    default:
        console.log(`Erro peca não existe`)
        break;
}