// AUTHENTICATION
// username = 'aucune_angenard_elodie';
// password = '82nIjQaY1Y';

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/token', true);

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            console.log(request.responseText);
        } else {
            console.error('Erreur:', request.status, request.statusText);
        }
    }
};
request.send();



// fetch('https://login.meteomatics.com/api/v1/token', {
//     method: 'GET', headers: headers
// }).then(function (resp) {
//     return resp.json();
// }).then(function (data) {
//     var token = data.access_token;
//     console.log('token', token);
// }).catch(function (err) {
//     console.log('something went wrong', err);
// });

// console.log('token', token);


// DATA
let now = new Date();
now = now.toISOString();
let validDateTime = now + 'P5D:PT12H'; 
console.log(validDateTime);

let parameters = 'weather_symbol_1h:idx,t_2m:C,t_min_2m_24h:C,t_max_2m_24h:C,wind_speed_10m:kmh,wind_dir_10m:d,sunrise:sql,sunset:sql';

let locations = 'postal_FR' + '86000';

let format = 'json';

let optionals = 'model = mix';

async function getWeatherData() {
    try {
        const response = await fetch('api.meteomatics.com/validDateTime/parameters/locations/format?optionals');
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        // data.forEach((movie) => {
        //     //Create a div with a card class
        //     const card = document.createElement('div');
        //     card.setAttribute('class', 'card');

        //     // Create a h1 and set the text content to the film's title
        //     const h1 = document.createElement('h1');
        //     h1.textContent = movie.title;

        //     // Create a p and set the text content to the film's description
        //     const p = document.createElement('p');
        //     movie.description = movie.description.substring(0, 300); // Limit description to 300 characters
        //     p.textContent = `${movie.description}...`;

        //     // Append the cards to the container element
        //     container.appendChild(card);

        //     // Each card will contain a h1 and a p
        //     card.appendChild(h1);
        //     card.appendChild(p);
        // });
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }   
}

getWeatherData();