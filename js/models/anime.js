class Anime {
    constructor(id, title, genre, summary, rating, favorite, image, characters){
        this.id = id
        this.title = title
        this.genre = genre
        this.summary = summary
        this.rating = rating
        this.favorite = favorite
        this.image = image 
        this.characters = characters 
        this.renderAnime() // as new instance is created, so is the card
    }

    renderAnime(){
        const animeContainer = document.getElementById('anime-container')
        const animeCard = document.createElement('div')
        animeCard.classList.add('anime-card')
        animeCard.id = this.id
        animeCard.innerHTML += this.animeHTML()
        animeContainer.appendChild(animeCard)
        animeCard.addEventListener('click', e => {
          if (e.target.className.includes('delete')) this.deleteAnime(e)
          if (e.target.className.includes('rating')) this.removeRating(e)
        })
      }
  
    deleteAnime(event) {
        const animeId = parseInt(event.target.parentElement.id)
        fetch(`http://localhost:3000/animes/${animeId}`, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json'
          }
      })
      .then (()=> {
        document.getElementById('anime-container').removeChild(document.getElementById(animeId))
      }) 

    }

    removeRating(event) {
      event.target.parentElement.removeChild(event.target.parentElement.querySelector('#rating-header'))
    }


    animeHTML(){
        return `
          <h2 class="header">${this.title}</h2>
          <img src="${this.image}" width="100" />
          <h5>Genre: ${this.genre}</h5>
          <h5 id= 'rating-header'> Rating: ${this.rating}</h5>
          <h5>Summary: ${this.summary}</h5>
          <p> ${this.favorite} favorites </p>
          <button onclick=API.favoriteAnime()> Favorite </button>
          <button class= 'delete'> Delete? </button>
          <button class= 'rating'> Remove Rating? </button>
          <h5>Characters:</h5>
          ${this.characters.map(function(character){
            return (`${character.name},
            ${character.powers},
            ${character.description}`)
            })}`

      }

}