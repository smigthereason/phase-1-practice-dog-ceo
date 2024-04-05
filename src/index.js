console.log('%c HI', 'color: firebrick')
document.addEventListener ("DOMContentLoaded", function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imageContainer = document.getElementById("dog-image-container");
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogBreed =document.getElementById("dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown")
  fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
      data.message.forEach( imgUrl => {
          const img = document.createElement("img");
          img.src = imgUrl;
          img.alt = "Dog Image";
          imageContainer.appendChild(img);
      });
  })
  // .catch(error => console.error("Error fetching dog images:", error));
  fetch (breedUrl)
  .then(response => response.json())
  .then(data => {
      const breeds = Object.keys(data.message);
      breeds.forEach(breed =>{
          const list = document.createElement("li")
          list.textContent = breed;
          dogBreed.appendChild(list);

          list.addEventListener("click", function(){
              list.style.color = "blue";
          });
      

              breedDropdown.addEventListener("change", function() {
                  const selectedLetter = breedDropdown.value;
                  renderBreeds(selectedLetter);
              });       
      });
  })
  function renderBreeds(letter) {
      const breeds = dogBreed.getElementsByTagName("li");
      for (let i = 0; i < breeds.length; i++) {
          const breedName = breeds[i].textContent.toLowerCase();
          if (letter === "all" || breedName.startsWith(letter)) {
              breeds[i].style.display = "block";
          } else {
              breeds[i].style.display = "none";
          }
      }
  }

})
  