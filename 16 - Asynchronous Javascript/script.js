'use strict';

const getCountryData = function (country) {
    const btn = document.querySelector('.btn-country');
    const countriesContainer = document.querySelector('.countries');

    ///////////////////////////////////////

    // XMLhttprequest
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(JSON.parse(this.responseText));

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        console.log(Object.entries(data.languages));

        const html = `
            <article class="country">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
                    <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
                    <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][0]}</p>
                </div>
            </article>
        `;

        countriesContainer.insertAdjacentHTML('afterbegin', html);
        countriesContainer.style.opacity = '1';
    });
}

getCountryData('venezuela');
getCountryData('estonia');
getCountryData('united kingdom');