/*
    Formula do IMC:
    IMC = peso/(altura * altura)
 */

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