var apiKey = "c8ede173089abf0bfda7f1b098428b03";
var searchKey = "";
$(document).ready(function() {
    $("#submit").click(function(){
        var location = $("#location").val();
        // check if zip or city
        if (!isNaN(location)){
            searchKey = "zip";
        } else {
            searchKey = "q";
        }
        // check if text had data
        if(location != ""){
            $.ajax({
            url:'https://api.openweathermap.org/data/2.5/weather?'+
                searchKey+'='+location+'&units=imperial&appid='+apiKey,
                dataType:"jasonp",
                type:"GET",
                success: function(data){
                    var result = outputData (data);
                    $("#outputData").html(result);
                    $("#outputData").val('');
                }
            })
        }
    })
})

function outputData(data) {
    // return the html string of all the wanted data
    return "<div><h2>Weather in " + data.name + "</h2>" +
    "<img src='http:://openweathermap.org/img/w/" +data.weather[0].icon + ".png' width=100px>" + 
    "<h4> Weather:" + data.weather[0].main + "<br>" +
    "Description" + data.weather[0].description + "<br>" +
    "Tempature: " + data.main.temp + "F <br>" +
    "High Temp: " + data.main.temp_max + "F <br>"+
    "Low Temp: " + data.main.temp_min + "F <br>" +
    "Pressure: " + data.main.pressure + "hPa <br>" +
    "Visibility: " + data.visibility + "meters <br>" +
    "Wind Speed: " + data.wind.speed + "m/sec <br>" +
    "Wind Direction: " + data.wind.deg + "degrees </h4></div>";
}