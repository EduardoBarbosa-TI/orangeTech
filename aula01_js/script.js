/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível do carro por KM;
    2 - Gasto médio em combustível do carro por KM;
    3 - Distância em Hm da viagem;
 */

const valueFuel =  5.79;
const spendingFuelAndKM = 10;
const distance = 1568;

const tripValue = distance / spendingFuelAndKM;
const amountSpent = tripValue * valueFuel;

console.log(amountSpent.toFixed(2))

