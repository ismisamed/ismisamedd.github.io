const form = document.querySelector(".new-anime-form");
const input = document.querySelector(".new-anime-input");
const anime_list = document.querySelector(".animes");

const addHTML = (anime) => {
    const animeDiv = document.createElement("div");
    animeDiv.classList.add("list");

    const animeContent= document.createElement("div");
    animeContent.classList.add("content");

    animeDiv.appendChild(animeContent);

    const animeText = document.createElement("p");
    animeText.classList.add("text");
    animeText.innerHTML =anime.text;

    animeContent.appendChild(animeText);

    const animeActions = document.createElement("div");
    animeActions.classList.add("actions");

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.innerHTML  ="sil";
    
    animeActions.appendChild(btnDelete);

    animeDiv.appendChild(animeActions);

    anime_list.appendChild(animeDiv);

    btnDelete.addEventListener("click", () => {
        anime_list.removeChild(animeDiv);

    });
}

const startConf = () =>{
    const animes = JSON.parse(localStorage.getItem("movies"));
    if(!animes){
        localStorage.setItem("movies", JSON.stringify([]));
    }
    else {
        animes.forEach(anime => {
            addHTML(anime); 
        })  
    }
}
const addAnime = (e) => {
    e.preventDefault();

    inputVal = input.value;

        if(!inputVal){
            alert("Lütfen Anime Adı Giriniz!");
        }
        else{
            const anime ={
                text: inputVal,
            }
         
            const animes = JSON.parse(localStorage.getItem("movies"));
            animes.push(anime);
            localStorage.setItem("movies", JSON.stringify(animes));
            addHTML(anime);
        }
    form.reset();
}
startConf();

form.addEventListener("submit", addAnime);
