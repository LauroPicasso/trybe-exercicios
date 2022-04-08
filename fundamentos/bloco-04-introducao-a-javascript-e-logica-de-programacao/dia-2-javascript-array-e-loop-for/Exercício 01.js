let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 01
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/* Resolução Exercício 1*/
// for (let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }





// Exercício 02
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/* Resolução Exercício 2 */
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {

   resultado = resultado + numbers[index];
}

// console.log(resultado);





// Exercício 03
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let mediaAritimetica = resultado / numbers.length
console.log(mediaAritimetica)














// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .