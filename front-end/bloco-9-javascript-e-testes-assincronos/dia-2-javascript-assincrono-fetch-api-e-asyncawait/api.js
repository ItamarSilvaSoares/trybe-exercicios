const API_CRYPTO = `https://api.coincap.io/v2/assets`
const API_CONVERT = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`

const convert = async () => {
    try {
        const response = await fetch(API_CONVERT);
        const data = await response.json();
        return data;
        } catch (err) {
            console.log(err);
        }
    
}

const fetchCrypto = async () => {
    try {
        const response = await fetch(API_CRYPTO);
        const data = await response.json();
        const usdCurrencies = await convert();
        const brValor = Number(usdCurrencies.usd.brl);
    const crypto = document.querySelector('#crypto');
    crypto.innerHTML = data.data.filter((item) => Number(item.rank) <= 10).map(crypto => `<li>${crypto.name} (${crypto.symbol}): ${((Number(crypto.priceUsd) * brValor).toFixed(2))} </li>`).join('');
        } catch (err) {
            console.log(err);
        }
    
}

onload = fetchCrypto;
