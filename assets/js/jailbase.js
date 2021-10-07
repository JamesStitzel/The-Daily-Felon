var criminal = {
   crimName: "",
   crime: "",
   location: "",
   mugshot: ""

}

villainPic = document.getElementById('villainPic');
var sources = ['fl-alac', 'fl-bcso', 'fl-bso', 'fl-chso', 'fl-dcso', 'fl-fcso', 'fl-gcso', 'fl-jso', 'fl-lcso', 'id-acso', 'id-tfcso', 'il-wcso'
]

var sourceID = sources[Math.floor(Math.random() * sources.length)];

function begin(){
  var sourceID = sources[Math.floor(Math.random() * sources.length)];
  var crimNum = Math.floor(Math.random() *  10);
  fetch("https://jailbase-jailbase.p.rapidapi.com/recent/?source_id=" + sourceID, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jailbase-jailbase.p.rapidapi.com",
		"x-rapidapi-key": "7cecd80984mshba5b779f70a29f7p10a0c2jsn383e80719e90"
	}
})
.then(response => {
	return response.json();
})
.then(data=>{
  console.log(data);
  criminal.crimName = data.records[crimNum].name;
  criminal.mugshot = data.records[crimNum].mugshot;
  if(criminal.mugshot.includes("NoMug")){
    begin();
    return;
  }
  console.log(criminal.mugshot);
  villainPic.setAttribute("src", criminal.mugshot);
  criminal.crime = data.records[crimNum].charges[0];
  criminal.location = data.jail.city;
  getMarvelAPI();
})
.catch(err => {
	console.error(err);
});
}

begin();