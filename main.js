const apiKey = "4e014787c94b402799a140647230709";
const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=london";

async function checkWeather(){
    const response = await fetch(apiUrl + `&key=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".location").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c ) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_degree + "km/h";
}

checkWeather();