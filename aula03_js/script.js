const eduardo = {
    nome: 'Eduardo Barbosa Bernardes',
    idade: 25
};
console.log(eduardo.nome);
console.log(eduardo.idade);
console.log(eduardo);


eduardo.altura = 1.80;

console.log(eduardo.altura);

const pessoa = {
    nome: 'Eduardo Barbosa Bernardes',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
}

pessoa.descrever();


pessoa['nome'] = 'teste';
pessoa.nome = 'teste';


class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const eduardo = new Pessoa();
eduardo.name = 'eduardo Barbosa Bernardes';
eduardo.idade = 20;

const renan = new Pessoa();
renan.name = 'eduardo Barbosa Bernardes';
renan.idade = 20;

eduardo.descrever();
renan.descrever();

const eduardo = new Pessoa('Eduardo', 20);

console.log(eduardo);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const eduardo = new Pessoa('Eduardo', 25);
const vitor = new Pessoa('Vitor', 45);

compararPessoas(eduardo, vitor);

class Carros {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDePercuso(distanciaEmKM, precoCombustivel) {
        return distanciaEmKM * this.gastoMedioPorKM * precoCombustivel;
    }
}

const uno = new Carros('Fiat', 'Vermelho', 1 / 12);
console.log(uno.calcularGastoDePercuso(70, 5));

const celta = new Carros('Chevrolet', 'Prata', 1 / 20);
console.log(uno.calcularGastoDePercuso(70, 5));


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcular() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcular();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima de peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obsidade');
        } else if (imc >= 40) {
            return ('Obsidade full');
        }
    }
}
const jose = new Pessoa('Jóse', 70, 1.75);
console.log(jose.calcular());

const eduardo = new Pessoa('Eduardo', 20, 1.75);
console.log(eduardo.calcular());