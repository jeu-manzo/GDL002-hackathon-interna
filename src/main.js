const timeTravel = [
'12 Monkeys',
'Back to the Future',
'Groundhog Day',
'Source Code',
'Looper',
'The Lake House',
'Timecrimes',
'Déjà vu',
'Predestination',
'Edge of Tomorrow'
];

timeTravel.forEach(function(name) {
  const url = `http://www.omdbapi.com/?apikey=7250cff9&t=${name}`;
  fetch(url)
  .then(response => response.json() )
  .then(data => {
    // let element = document.getElementById('element');
    // element.innerHTML = `<p>${data.Poster}<p>`
    console.log(data.Poster);
  })
  .catch(err => console.log(err))

});
