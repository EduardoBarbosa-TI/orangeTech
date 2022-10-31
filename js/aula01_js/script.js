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




const peso = 65;
const altura = 1.70;
const imc = peso/ Math.pow(altura, 2);
console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do peso');
} else if( imc >= 18.5 && imc < 25){
    console.log('Peso normal');
} else if ( imc >= 25 && imc < 30){
    console.log('Acima de peso');
} else if ( imc >= 30 && imc < 40){
    console.log('Obsidade');
} else if ( imc >= 40){
    console.log('Obsidade');
}

const precoEtiqueta = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1 ){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2 ){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3 ){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}


