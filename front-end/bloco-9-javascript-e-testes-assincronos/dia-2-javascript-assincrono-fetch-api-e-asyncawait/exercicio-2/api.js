const apiURL = 'api.coincap.io/v2/assets';

const fetchCrypto = () => {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data));
    // .then(data => document.getElementById('listCrypto').innerText = data.);
};

window.onload = () => fetchCrypto();