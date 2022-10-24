/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível do carro por KM;
    2 - Gasto médio em combustível do carro por KM;
    3 - Distância em Hm da viagem;
 */


const valueEthanol = 5.90;
const valueGasoline = 5.79;
const spendingFuelAndKM = 10;
const distance = 1568;
const typeFuel = 'Etanol';

const tripValue = distance / spendingFuelAndKM;

if (typeFuel === 'Etanol') {
    const amountSpent = tripValue * valueEthanol;
    console.log(amountSpent.toFixed(2))
} else {
    const amountSpent = tripValue * valueGasoline;
    console.log(amountSpent.toFixed(2))
}



