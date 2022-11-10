var apiKey = "c8ede173089abf0bfda7f1b098428b03";
var searchKey = "";
//grab html element to make submit button var.
var submit = document.getElementById("submit");
//insert api url.
var coordsUrlBase = "https://api.openweathermap.org/data/2.5/forecast?q=";
var appIdKey = "&appid=c8ede173089abf0bfda7f1b098428b03";

//event listner on button element:
submit.addEventListener("click", () => {
    getCoords(coordsUrlBase + document.getElementById("loc").value + appIdKey).then((data) => {
    console.log(data);
    //display the currentdaydiv
    document.getElementById("currentDay").style.display = "block";
    renderWeather(data.list[0], data.city.name);
    const history = document.getElementById("history");
    const item = document.createElement('p');
    item.addEventListener("click", () => {
        getCoords( coordsUrlBase + data.city.name + appIdKey).then((data) => {
            renderWeather(data.list[0], data.city.name);
        })
    });
    item.textContent=data.city.name;
    history.append(item);    
    });
});


function renderWeather(listObject, name) {
    console.log(listObject);
//text content of current day data return.
    const {clouds, dt_txt, main, weather, wind} = listObject;
    document.getElementById('humidity').textContent = `Humidity: ${main.humidity}`;
    document.getElementById('temp').textContent = `Tempature: ${main.temp}`;
    document.getElementById('cityName').textContent = `City Name: ${name}`;
    document.getElementById('date').textContent = `Date: ${dt_txt}`;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}

function getCoords(url) {
    return (
        fetch(url).then((res) => res.json())
    );

}