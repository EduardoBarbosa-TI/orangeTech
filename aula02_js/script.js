function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return log('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return log('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return log('Acima de peso');
    } else if (imc >= 30 && imc < 40) {
        return log('Obsidade');
    } else if (imc >= 40) {
        return log('Obsidade');
    }
}

(function main() {
    const peso = 65;
    const altura = 1.70;
    
    const imc = classificarImc(peso, altura);
    console.log(classificarImc(imc));
})();




