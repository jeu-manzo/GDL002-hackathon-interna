
// var listMovies = [];
let element = document.getElementById('element');
let list = '';
let i = [];



const listMovies = fromSpace.forEach(function(name){
  api(name).then(console.log);
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

// API(fromSpace).then(console.log);

// const filterCategory = fromSpace.forEach(function(name) {
//   const url = `http://www.omdbapi.com/?apikey=7250cff9&t=${name}`;
//   fetch(url)
//   .then(response => response.json() )
//   .then(data => {
//     // list += `<br><span>${data.Title}</span><br>`;
//     listMovies.push(data.Poster)
//     listMovies.forEach(function(i) {
//       array = i;
//     })
//     // console.log(listMovies[0]);
//   })
//   .catch(err => console.log(err))
// });







// var sum = '';
//
//
// for (var item in listMovies) {
//   sum += item;
// }
//
// console.log(sum);

// for (var i = 0; i < listMovies.length; i++) {
//   console.log(listMovies[i]);
//   list += `<br><span>${listMovies[i]}</span><br>`;
// }
// element.innerHTML = list;



// console.log(listMovies);

// let element = document.getElementById('element');
// element.innerHTML = `<p>${listMovies}<p>`;


// listMovies = listMovies
// let list = "";
// let element = document.getElementById('element');
// for (var i = 0; i < listMovies.length; i++) {
//   list += `<span>${listMovies[i]}</span>`;
//
// }
// element.innerHTML = list;





// function showCategory(listMovies) {
//   for (var i = 0; i < listMovies.length; i++) {
//     console.log(listMovies[i])
//
//   }
//
//   // listMovies.forEach(function(i) {
//   //   console.log(i.prueba);
//   // //   let element = document.getElementById('element');
//   // //   console.log(i.Poster);
//   // //   element.innerHTML = `<p>${i.Poster}<p>`;
//   //
//   //
//   // })
// }


// console.log(showCategory(listMovies))
