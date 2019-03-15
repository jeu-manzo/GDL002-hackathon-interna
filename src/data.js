// var listMovies = [];
let element = document.getElementById('element');
let list = '';
let i = [];



const listMovies = fromSpace.forEach(function(name){
  api(name).then((response) => console.log(response));
  // API(name).then(element.innerHTML = `<span>${}</span>`);
})


// function mostrar(a) {
//   element.innerHTML = `<span>${a}</span>`
// }
//
// mostrar("pruebas")

  async function api(urlforanea){
  const url = 'http://www.omdbapi.com/?apikey=7250cff9&t=$';
  const response = await fetch(url + urlforanea);
  const data = await response.json()
  return data.Poster
}
