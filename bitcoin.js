
const outputEl = document.querySelector('.output');
const btnEl = document.querySelector('.btn');

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

async function GetPrice() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        outputEl.value = data.bpi.EUR.rate + ' EUR';
        console.log(data.bpi.EUR.rate);
    } catch (error) {
        outputEl.value = 'Not working, try again later!';
    }
}

btnEl.addEventListener('click', GetPrice);