const dados = require('./exercicio-2');

// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.


// const expectedResult = 43;

function averageAge() {

  // const allAges = dados.books.map((book) => book.releaseYear - book.author.birthYear)
  // console.log(allAges)

  // return allAges.reduce((acc, curr) => acc + curr) / allAges.length

  return dados.books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0 ) / dados.books.length

}

console.log(averageAge());