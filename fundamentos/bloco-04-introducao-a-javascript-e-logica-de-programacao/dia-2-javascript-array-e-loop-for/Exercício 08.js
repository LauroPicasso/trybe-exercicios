// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = []

let contador = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] <= contador){
        contador += 1
    }
    numbers.push(contador)
}

console.log(numbers);