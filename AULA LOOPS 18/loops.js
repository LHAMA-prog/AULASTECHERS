// REVISÃO
console.log("REVISÃO");

let x = 5;
x = x + 1;
console.log(x);
x += 2;
console.log(x);
x++;
console.log(x);
console.log(x <= 9);
x--;
console.log(x >= 9);

// Operador % //

console.log(7 % 2);
console.log(8 % 2);

// ---------- //

if (x > 8) {
    console.log("É maior que 8.");
} else {
    console.log("É menor que 8");
}

// AULA //

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);

// FOR
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 9; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// EXERCÍCIOS //

// Faça uma contagem regressiva de 10 até 1 e depois imprima uma mensagem falando "Parabéns, não aconteceu nada!!!"

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Parabéns, não aconteceu nada!!!");

// Fazer tabuada do 7 //

for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
}

// WHILE //

let dinheiro = 0;
let semanas = 0;

while (dinheiro < 100) {
    dinheiro += 15;
    semanas++;
    console.log("Semana " + semanas + ": R$ " + dinheiro);
}

console.log("Semanas: " + semanas);
console.log("Total: R$ " + dinheiro);

// let d = 0;
// while (d < 100){
//    console.log(d);
//}

// LOOPS COM IF/ELSE //

// PAR OU IMPAR //

for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

// Quantos múltiplos de 3 existem de 1 a 30 ? //

let contador = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        contador++;
    }
}

console.log(contador);

// Desafio para treinar //
// Mostre "TCHAMRAM" nos múltiplos de 5 e o número nos outros //

for (let i = 1; i <= 25; i++) {
    if (i % 5 === 0) {
        console.log("TCHAMRAM");
    } else {
        console.log(i);
    }
}
