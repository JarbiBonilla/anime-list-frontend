class Anime {
    constructor(id, title, genre, summary, rating, favorite, image){
        this.id = id
        this.title = title
        this.genre = genre
        this.summary = summary
        this.rating = rating
        this.favorite = favorite
        this.image = image 
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
}