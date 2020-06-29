class Anime {
    constructor(id, title, genre, summary, rating, favorite, image){
        this.id = id
        this.title = title
        this.genre = genre
        this.summary = summary
        this.rating = rating
        this.favorite = favorite
        this.image = image 
        this.renderAnime()
    }

    renderAnime(){
        const animeContainer = document.getElementById('anime-container')
        const animeCard = document.createElement('div')
        animeCard.classList.add('anime-card')
        animeCard.id = this.id
        animeCard.innerHTML += this.animeHTML()
        animeContainer.appendChild(animeCard)
        animeCard.addEventListener('click', e => {
          if (e.target.className.includes('header')) this.showAnime(e)
        })
      }
  
    showAnime(e) {

    }


    animeHTML(){
        return `
          <a href="/anime/${this.id}"><h2 class="header">${this.title}</h2></a>
          <img src="${this.image}" width="100" />
          <h5>Genre: ${this.genre}</h5>
          <h5>Rating: ${this.rating}</h5>
          <h5>Summary: ${this.summary}</h5>
          <p> ${this.favorite} favorites </p>
          <button onclick=API.favoriteAnime()> Favorite </button> 
        `
      }
}