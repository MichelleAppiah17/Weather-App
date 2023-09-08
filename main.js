const apiKey = "4e014787c94b402799a140647230709";
const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=";

const searchBox = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");
const weather_icon = document.querySelector(".weatherIcon");

async function checkWeather(location){
    const response = await fetch(apiUrl + location + `&key=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".location").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c ) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_degree + "km/h";
    
    if(data.current.condition.text == "clear"){
        weather_icon.src = "images/clear.png";
    } else if(data.current.condition.text == "cloud"){
        weather_icon.src = "images/Cloudy.png";
    }else if(data.current.condition.text == "partly cloudy"){
        weather_icon.src = "images/partlyCloudy.png";
    }else if(data.current.condition.text == "rainy"){
        weather_icon.src = "images/rainy.png";
    }else if(data.current.condition.text == "sunny"){
        weather_icon.src = "images/sunny.png";
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


checkWeather();