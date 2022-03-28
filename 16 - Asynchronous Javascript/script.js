'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
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
    countriesContainer.style.opacity = '1';
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


// Simplified version: REFERENCE CODE
// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => {
//             if (!response.ok) 
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then (data => {
//             renderCountry(data[0]);
//             // const neighbour = data[0].borders[0];
            // const neighbour = 'shjshjsd';

//             // console.log(neighbour);
//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then (response => {
//             if (!response.ok) 
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json()
//         })
//         .then (data2 => renderCountry(data2[0], 'neighbour'))
//         .catch (err => {
//             console.error(`${err} 🔥🔥🔥`);
//             renderError(`🔥🔥🔥 Something went wrong: ${err.message}. Try Again!`);
//         })
//         .finally (() => {
//             countriesContainer.style.opacity = 1;
//         })
// }

// getCountryData('venezuela');

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) 
                throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
}

const getCountryData = function (country) {
    // Country 1
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`, 
        'Country not found'
    )
    .then (data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
        
        if (!neighbour) throw new Error('No neighbour found!');

        // Country 2
        return getJSON(
            `https://restcountries.com/v3.1/alpha/${neighbour}`, 
            'Country not found'
        )
    })
    .then (data2 => renderCountry(data2[0], 'neighbour'))
    .catch (err => {
        console.error(`${err} 🔥🔥🔥`);
        renderError(`🔥🔥🔥 Something went wrong: ${err.message}. Try Again!`);
    })
    .finally (() => {
        countriesContainer.style.opacity = 1;
    })
}

btn.addEventListener('click', function () {
    getCountryData('venezuela');
});

///////////////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a
country ONLY based on GPS coordinates. For that, you will use a second 
API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes an inputs a latitude value (lat)
and a longitude value (lng) (these are coordinates, examples are below).
2. Do 'reverse geocoding' of the provided. Reverse geocoding means to 
convert coodinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: 
https://geocode.xyz/52.508,12.381?geoit=json. Use the fetch API and promises
to get the data.
3. Once you have the data, take a look at it in the console to see all the 
attributes that you received about the provided location. Then, using this 
data, log a message like this in the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors 
to the console.
5. This API allows you to make only 3 request per second. If you reload fast,
you will get this error with code 403. This is an error with the request.
Remember, fetch() does NOT reject the promise in this case. So create an error 
to reject promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the 
relevant attribute from the geocoding API result, and plug it into the countries
API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture
(you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 12.381 (latitude, longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 3: -33.933, 18.474
*/

const whereAmI = function (lat, lng) {
    fetch (`https://geocode.xyz/${lat},${lng}?geoit=json&auth=221622119368574280400x62654`)
    .then (response => {
        if (!response.ok) throw new Error(`Problem with Geocoding ${response.status}`);

        return response.json();
    })
    .then (data => {
        if (Object.keys(data).some(key => key === 'error'))
            throw new Error(`${data.error.description}`);

        return fetch (`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then (res => {
        if (!res.ok) throw new Error(`Country not found ${res.status}`)
        return res.json()
    })
    .then (data => {
        renderCountry(data[0]);
        const [neighbour] = data[0].borders;
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then (res => {
        if (!res.ok) throw new Error(`Country has no neighbour ${res.status}`);
        return res.json();
    })
    .then (data => renderCountry(data[0], 'neighbour'))
    .catch (err => {
        console.error(`🔥🔥🔥 Something went wrong: ${err}`);
        renderError(`🔥🔥🔥 Something went wrong: ${err}`);
    })
    // .finally (() => countriesContainer.style.opacity = 1);
}

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(10.647,-71.617);
// whereAmI(13.037, 72.873);