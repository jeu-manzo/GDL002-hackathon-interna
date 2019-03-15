/Lista de peliculas de comedia

const moviesIMDB = ["tt0107048", "tt3106046", "tt0095631", "tt0093822", "tt0387808", "tt5463162",
"tt1119646", "tt7634968", "tt0212338", "tt0302886"];

//Array of concatenated urls for my fetch
const fetchURL = urlGen(moviesIMDB);
//Function to create url for fetch with IDs and key
function urlGen(moviesIMDB){
 const fetchURL = [];
 for(i = 0; i < moviesIMDB.length; i++){
   fetchURL[i] = 'http://www.omdbapi.com/?i=' + moviesIMDB[i] + '&apikey=a934b92d';
 }
 return fetchURL;
}

main();

//Async function to fetch data
async function fetchData(fetchURL) {
 //Array where I will save all my movie objects
 let movies = [];
 // Create all the promises and wait for them
 //Map me regresa tres valores, el valor actual, el índice del valor actual y el arreglo que se está mapeando en ese orden
 const fetchPromises = fetchURL.map(async (url, index) => {
   // Get response
   const response = await fetch(url);
   // Get json data
   const data = await response.json();
   movies[index] = data;
 });
 //I make sure that the data is fetched before I return my array
 await Promise.all(fetchPromises);
 return movies;
}
//Main function is async as well, because here I run the fetching first and then the rest
async function main() {
 //I wait for the data to be fetched, and after that I organize my data by characters for further use
 const movies = await fetchData(fetchURL);
 console.log(movies);
 printMovies(movies);


}

//Función que sirve para imprimir data
function printMovies (movies){;
 const div = document.getElementById('root');
 div.innerHTML = " ";

 movies.map((movies) => {
   let title = movies.Title + " (" + movies.Year + ")"
   let nameMovies =
     `<div onclick="" class="movies">
       <div class="movieBg" style="background-image: url(${movies.Poster});"></div>
       <div class="movieText">
         <h3 class="movieTitle"><strong>${title}</strong></h3>
         <p class="moviePlot">${movies.Plot}</p>
       </div>
     </div>`;
   div.insertAdjacentHTML("beforeend", nameMovies);

 })
}
Message Input


Message Ana Laura Flores
