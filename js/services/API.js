class API {
    static addAnimes(){
        fetch("http://localhost:3000/animes")
          .then(resp => resp.json())
          .then(animes => {
            animes.forEach(anime => {
                const { id, title, genre, summary, rating, favorite, image } = anime 
                new Anime(id, title, genre, summary, rating, favorite, image)
            })
        }) 
      }
    
      // move our form here
      static addAnime(e){
        e.preventDefault()
        // capture our form data
        let data = {
            'title': e.target.title.value,
            'genre': e.target.genre.value,
            'summary': e.target.summary.checked,
            'rating': e.target.rating.value,
            'favorite': e.target.favorite.value,
            'image': e.target.image.value,
            'characters_attributes': {
              'name': e.target.name.value,
              'powers': e.target.powers.value,
              'description': e.target.description.value,
            } 
        };
        // write our fetch and send it to our back end
        fetch('http://localhost:3000/animes', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // grab our fetch response
        .then(resp => resp.json())
        .then(anime => {
            const { id, title, genre, summary, rating, favorite, image } = anime
            new Anime(id, title, genre, summary, rating, favorite, image)
            document.getElementById('anime-form').reset()
        })
        // create a new object
        // clear our form
      }
      // make sure all the functions still work
}