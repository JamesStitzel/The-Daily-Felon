var pubApiKey = "15caa8edf45059befdb7f6fa1aea984d";
var secApiKey = "ec2305142171c3be6a800b3d04739a038f8ab00a";
var ts = new Date().getTime();
var hash = ts + secApiKey + pubApiKey;
var root = ""
var superHeroName;
var superHeroPic;
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var heroPic = $("#hero");

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

function getAPI(callback) {
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
        console.log(data);
        const superHeroName = data.data.results[Math.floor(Math.random() * data.data.results.length)];
        console.log(superHeroName.name);
        heroPic.attr("src", superHero.thumbnail.path + superHero.thumbnail.extension);
        callback(data);
      });
  }

  getAPI();