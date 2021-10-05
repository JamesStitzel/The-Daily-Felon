var pubApiKey = "15caa8edf45059befdb7f6fa1aea984d";
var secApiKey = "ec2305142171c3be6a800b3d04739a038f8ab00a";
var ts = new Date().getTime();
var hash = ts + secApiKey + pubApiKey;
var root = ""

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

function getAPI(name, callback) {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?&apikey=" + pubApiKey,
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
        callback(data);
      });
  }

  getAPI();