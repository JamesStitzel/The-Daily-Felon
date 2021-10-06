var superName;

function callStories(name){
    superName = name;
    tellStory();
}

function tellStory(){
    console.log("Our hero's name is " + superName);
}