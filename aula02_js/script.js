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


function escrevaMeuNome(nome) {
    console.log("Meu nome é" + nome);
}

escrevaMeuNome("Eduardo Barbosa Bernardes");


function maioridade(idade) {
    if (idade < 18) {
        console.log("Menor de idade");
    } else if (idade >= 18) {
        console.log("Maior de idade");
    }
}

maioridade(18);

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

function pagamento(formaDePagamento, precoEtiqueta) {
    if (formaDePagamento === 1) {
       console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (formaDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 20));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }

}

const precoEtiqueta = 100;
const formaDePagamento = 1;

