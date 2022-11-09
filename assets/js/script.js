var apiKey = "c8ede173089abf0bfda7f1b098428b03";
var searchKey = "";
var submit = document.getElementById("submit");
var coordsUrl = "http://api.openweathermap.org/data/2.5/forecast?q=london&appid=c8ede173089abf0bfda7f1b098428b03"

submit.addEventListener("click", () => {getCoords(coordsUrl)})
//Function that fetches data
function getWeather(url){
    fetch(url).then(res => res.json()).then(data => console.log(data.list[0]))
}
//add event listner to button element

// fetch coords
function getCoords(url){
    fetch(url).then(res => res.json()).then(data => console.log(data.list[0]))
}


