var sentence = "this is my lambo cyan i really love this car";

var captializeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();


var words = sentence.split(" ").map(captializeString);
var captializedSentence = words.join(" ");
console.log(captializedSentence);



// ASHU xD 