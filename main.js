const urlRandom = "https://api.thecatapi.com/v1/images/search?limit=2";
const urlFavourite = "https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_Bi9dH3ub4c1G1y6WJFqAE9nur3PexYpyiBrBI18ACU95x6d1QIjEHeJTyvLh5XDu";


const btn = document.querySelector("button");

const getRandomCat = async () => {
  try {
    const res = await fetch(urlRandom); //obtenemos la respuesta de la api
    const data = await res.json(); //convertimos la respuesta a json
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    img1.src = data[0].url;
    img2.src = data[1].url; //insertamos la url de la imagen que obtuvimos de la api
    //img.src = data[0].url;
  } catch (err) {
    console.log(err);
  }
};

const getFavoriteCats = async () => {
    try {
      const res = await fetch(urlFavourite); //obtenemos la respuesta de la api
      const data = await res.json(); //convertimos la respuesta a json
      console.log('favs');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
};

const saveFavouriteCat = async () => {
    try{
        const res = await fetch(urlFavourite, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_id: img1.src
            }),
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);          
    }
}

btn.addEventListener("click", getRandomCat);

getRandomCat();
getFavoriteCats();
