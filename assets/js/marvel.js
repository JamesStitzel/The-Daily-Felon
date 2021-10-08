var pubApiKey = "15caa8edf45059befdb7f6fa1aea984d";
var root = ""
var superHeroName;
var superHeroPic;
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var heroPic = document.getElementById("hero Pic");

// fetch("https://gateway.marvel.com/v1/public/characters?apikey=" + pubApiKey + "&nameStartsWith=Spider&limit=20&ts=" + ts + "&hash=" + hash)
// .then(response => {
// 	return response.json();
// })
// .then(data=>{
//   console.log(data);
// })
// .catch(err => {
// 	console.error(err);
// });

function getMarvelAPI() {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?&apikey=" + pubApiKey + "&limit=100&nameStartsWith=" + alphabet[Math.floor(Math.random() * alphabet.length)],
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Updated at 1:38PM");
        console.log(data);
        var superHero = data.data.results[Math.floor(Math.random() * data.data.results.length)];
        superHeroName = superHero.name;
        heroPic.setAttribute("src", superHero.thumbnail.path + "." + superHero.thumbnail.extension);
        console.log("-------" + superHeroName + "--------------");
        callStories();

      });
  }

