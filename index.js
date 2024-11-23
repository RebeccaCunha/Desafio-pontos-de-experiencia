//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
// let num1 = parseInt(gets());
// let num2 = parseInt(gets());

// //TODO: Implemente a lógica para exibir o xpGanho:
// const xpGanho = num1 * num2 * 100;

let formula = 100;

function calcula (numero1,numero2){
    let num1 = numero1 * numero2;
    return num1;
}

let resultadoCalculo = calcula(41,38)
let resultado = resultadoCalculo * formula;

console.log(`Você ganhou ${resultado} XP!`);
// Imprime a quantidade de XP ganho
// print("Voce ganhou " + xpGanho + " XP!");