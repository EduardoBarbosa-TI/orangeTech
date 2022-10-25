const alunos = ['Eduardo', 'Vitor','João'];

alunos.push('teste');

alunos.pop(); //deleta ultimo elemento do array

alunos.shift(); //deleta o primeiro elemento do array

console.log(alunos[0])

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(3);

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

let soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;   
}

const media = soma / notas.length;
console.log(media);

for(let i = 1; i <= 10; i++){ 
    console.log(i * 5)
}

const listNumbers = [7,5,3,2,1,23,3];

for(let i = 0; i < listNumbers.length; i++){
    const number = listNumbers[i];
    if (number % 2 === 0){
        console.log(listNumbers);
    }
    
}

const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);