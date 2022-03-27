'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
                <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
                <!--<p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][0]}</p>-->
                <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][1].name}</p>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = '1';
}

// const getCountryData = function (country) {
//     const btn = document.querySelector('.btn-country');
//     const countriesContainer = document.querySelector('.countries');

//     ///////////////////////////////////////

//     // XMLhttprequest
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         // console.log(JSON.parse(this.responseText));

//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         console.log(Object.entries(data.languages));

//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flags.png}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name.common}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
//                     <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
//                     <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][0]}</p>
//                 </div>
//             </article>
//         `;

//         countriesContainer.insertAdjacentHTML('afterbegin', html);
//         countriesContainer.style.opacity = '1';
//     });
// }

// getCountryData('venezuela');
// getCountryData('estonia');
// getCountryData('united kingdom');

// const getCountryAndNeighbour = function (country) {
    
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         console.log(Object.entries(data.currencies)[0][1].name);
        
//         // Render country 1 
//         renderCountry(data);

//         // Get neighbour country (2)
//         const [neighbour] = data.borders;


//         if (!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const [data2] = JSON.parse(this.responseText);

//             // console.log(data2);
//             renderCountry(data2, 'neighbour');
//         })
//     });
// }

// // getCountryAndNeighbour('venezuela');
// getCountryAndNeighbour('usa');

// // Callback hell example
// setTimeout(() => {
//     console.log('1 seconds passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//         setTimeout(() => {
//             console.log('4 seconds passed');
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)



// Promises and Fetch API
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/venezuela`);
// console.log(request);

// Extended version
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then (function (data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// }


// Simplified version
const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then (data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            console.log(neighbour);
            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then (response => response.json())
        .then (data2 => renderCountry(data2[0], 'neighbour'))
        .catch (err => {
            console.error(`${err} 🔥🔥🔥`);
            renderError(`Something went wrong 🔥🔥🔥 ${err.message} Try Again!`);
        })
        .finally (() => {
            countriesContainer.style.opacity = 1;
        })
}

// getCountryData('venezuela');

btn.addEventListener('click', function () {
    getCountryData('venezuela');
});


