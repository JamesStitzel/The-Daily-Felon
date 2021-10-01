var searchBtn = $("#searchBtn");

function search(url){
    fetch(url).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}

searchBtn.on("click", function(){
    //get value of form
})