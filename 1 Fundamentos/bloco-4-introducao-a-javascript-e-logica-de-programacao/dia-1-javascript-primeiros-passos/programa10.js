const custoProduto = 100;
const valorVenda = 0;
const qtd = 1000;
lucro(custoProduto, valorVenda, qtd);

function lucro(produto, venda, qtd) {
    if (produto < 0 || venda < 0) {
        console.log("valor de entrada invalido");
    } else {
        let custoTotal = qtd * produto * 1.2;
        let lucro = qtd * venda - custoTotal;
        if (lucro > 0) {
            console.log(`O lucro total da venda foi ${lucro}`);
        } else {
            console.log(`O prejuízo total da venda foi ${lucro}`);
        }
    }
}