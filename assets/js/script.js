var criminal = {
   crimName,
   crime,
   location,
   mugshot

}

fetch("https://jailbase-jailbase.p.rapidapi.com/recent/?source_id=fl-alac", {
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
  criminal.crimName = data.records[0].name;
  criminal.mugshot = data.records[0].mugshot;
  criminal.crime = data.records[0].charges[0];
  criminal.location = data.jail.city;
  console.log(criminal);
})
.catch(err => {
	console.error(err);
});