const fromSpaceListMovies = [
  'Interstellar',
  'Gravity',
  'The Martian',
  'Alien',
  'Enemy Mine',
  'Star Trek',
  'Star Wars',
  'Gattaca',
  'Predator',
  'Guardians of the Galaxy'
];

/**
 * fetch single movie
 * @param string movieName
 * @param function callback
 *
 * callback param is a function that will triggers in the final .then
 */
function fetchMovie (movieName, callback) {
  const url = `http://www.omdbapi.com/?apikey=7250cff9&t=${movieName}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
}

/**
 * handle the fetch of a movie
 * @param object movieData
 *
 * movieData param is the result of the fetchMovie
 */
function handleFetchMovie (movieData) {
  console.log(movieData)
}

// single element of the array
fetchMovie(fromSpaceListMovies[0], handleFetchMovie)

// all elements of the array
fromSpaceListMovies.forEach((movieName) => {
  fetchMovie(movieName, handleFetchMovie)
})








    // const searchMovie = (search) => {
    //     // Retornamos una promesa, prometiendo que le daremos los datos cuando lleguen del servidor
    //     return new Promise((resolve, reject) => {
    //         // usamos fetch para pedir los datos al servidor.
    //         fetch('http://www.omdbapi.com/?apikey=7250cff9&t=$' + search)
    //         // esperamos los datos
    //         .then((data)=>{
    //             // llegan los datos y los convertimos en json
    //             return data.json();
    //         // esperamos a que los datos se conviertan en json
    //         }).then((dataAsJson) => {
    //             // recibimos los datos en json y usamos resolve para cumplir la promesa y enviamos el json
    //             console.log(dataAsJson.Title);
    //             let movie = document.getElementById('movie');
    //             movie.innerHTML += `<div class='movieItem'><strong>Título:  </strong><span>${dataAsJson.Title}</strong><br/></span>
    //                   <strong> Actores y Actrices:  </strong><span>${dataAsJson.Actors}</strong><br/></span>
    //                   <strong> Género:  </strong><span>${dataAsJson.Genre}</strong><br/></span>
    //                   <strong> Poster  </strong><span><img src="${dataAsJson.Poster}"/></strong><br/></span></div>`;
    //             resolve (dataAsJson);
    //         // en caso de error atrapamos el error
    //         }).catch((error) => {
    //             // avisamos que la promesa no se cumplio y mandamos el error
    //             reject (error);
    //         });
    //     })
    // }




// // // var listMovies = [];
// let element = document.getElementById('element');
// // let list = '';
// // let i = [];
// //
// //
// //
// const listMovies = api("roma").then(console.log);
// // const listMovies = api("roma").then((response) => console.log(response));
//
// //
// //
// // // function mostrar(a) {
// // //   element.innerHTML = `<span>${a}</span>`
// // // }
// // //
// // // mostrar("pruebas")
// //
//   async function api(urlforanea){
//   const url = 'http://www.omdbapi.com/?apikey=7250cff9&ts=$';
//   const response = await fetch(url + urlforanea);
//   const data = await response.json()
//   return data.Poster
// }
