const apiKey = "4e014787c94b402799a140647230709";
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?&q=";

const searchBox = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");
const weather_icon = document.querySelector(".weatherIcon");

async function checkWeather(location){
    const response = await fetch(apiUrl + location + `&key=${apiKey}`);
    var data = await response.json();
    weather_icon.src = data.current.condition.icon;

    console.log(data);

    document.querySelector(".location").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c ) + "°";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_degree + "km/h";
    document.querySelector(".windDirection").innerHTML = data.current.wind_dir;
    

    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather(location);