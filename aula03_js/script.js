const eduardo = {
    nome : 'Eduardo Barbosa Bernardes',
    idade: 25
};
console.log(eduardo.nome);
console.log(eduardo.idade);
console.log(eduardo);


eduardo.altura = 1.80;

console.log(eduardo.altura);

const pessoa = {
    nome : 'Eduardo Barbosa Bernardes',
    idade: 25,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever = function (){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
}

pessoa.descrever();


pessoa['nome'] = 'teste';
pessoa.nome = 'teste';


class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever (){
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

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}