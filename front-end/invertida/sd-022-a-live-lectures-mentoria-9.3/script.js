/*
  - capturar o botão;
  - addEventListener;
  - capturar valor do input;
  - fazer o fetch usando o valor capturado
  - tratar o response;
  - usar o response tratado para inserir no innerHtml do .results-text
*/

const appendInfo = (info) => {
  const infoToAppend = `UF: ${info.uf} | Localidade: ${info.localidade}`
  const resultsTextArea = document.getElementsByClassName('results-text')[0];
  resultsTextArea.innerHTML = infoToAppend;
}

const fetchCep = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(endpoint);
  const json = await response.json();

  /*
    Outras possibilidades de se realizar os passos anteriores:
      const response = await (fetch(endpoint).then((response) => response.json()))
      const response = await (await fetch(endpoint)).json();
  */

  // appendInfo(json);
  return json;
}

// const searchButton = document.querySelector('.search-cep-info-button');
// searchButton.addEventListener('click', () => {
//   const inputValue = document.querySelector('.input-cep').value;
//   fetchCep(inputValue);
// })