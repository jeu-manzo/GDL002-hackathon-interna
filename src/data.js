

    const searchMovie = (search) => {
        // Retornamos una promesa, prometiendo que le daremos los datos cuando lleguen del servidor
        return new Promise((resolve, reject) => {
            // usamos fetch para pedir los datos al servidor.
            fetch('http://www.omdbapi.com/?apikey=7250cff9&t=$' + search)
            // esperamos los datos
            .then((data)=>{
                // llegan los datos y los convertimos en json
                return data.json();
            // esperamos a que los datos se conviertan en json
            }).then((dataAsJson) => {
                // recibimos los datos en json y usamos resolve para cumplir la promesa y enviamos el json
                console.log(dataAsJson.Title);
                let movie = document.getElementById('movie');
                movie.innerHTML += `<div class='movieItem'><strong>Título:  </strong><span>${dataAsJson.Title}</strong><br/></span>
                      <strong> Actores y Actrices:  </strong><span>${dataAsJson.Actors}</strong><br/></span>
                      <strong> Género:  </strong><span>${dataAsJson.Genre}</strong><br/></span>
                      <strong> Poster  </strong><span><img src="${dataAsJson.Poster}"/></strong><br/></span></div>`;
                resolve (dataAsJson);
            // en caso de error atrapamos el error
            }).catch((error) => {
                // avisamos que la promesa no se cumplio y mandamos el error
                reject (error);
            });
        })
    }

searchMovie('Interstellar');
