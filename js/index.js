document.addEventListener("DOMContentLoaded", function(){
    // add anime cards to anime container
    API.addAnimes()
    // add the form event listener to the domContentLoaded
    document.getElementById('form').addEventListener('submit', API.addAnime)
})