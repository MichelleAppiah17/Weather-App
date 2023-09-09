const apiKey = "4e014787c94b402799a140647230709";
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?q=";

const searchBox = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");
const weather_icon = document.querySelector(".weatherIcon");

async function checkWeather(location) {
  const response = await fetch(`${apiUrl}${location}&key=${apiKey}`);
  const data = await response.json();

  weather_icon.src = data.current.condition.icon;
  document.querySelector(".location").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
  document.querySelector(".windDirection").innerHTML = data.current.wind_dir;

  const todayTime = document.querySelectorAll(".todayTime");
  const todayIcon = document.querySelectorAll(".todayIcon");
  const todayTemp = document.querySelectorAll(".todayTemp");

  console.log(data)

  const hourForecast = data.forecast.forecastday[0]?.hour;

  const currentTime = new Date();
  let currentHour = currentTime.getHours();

  const timeFormat = { hour:"numeric", minute:"2-digit" };

   
  for (let i = 0; i < todayTime.length; i++) {
    if (currentHour >= hourForecast.length) {
      currentHour = currentHour % hourForecast.length;
    }

    const rawTime = hourForecast[currentHour].time;
    const formattedTime = new Date(rawTime).toLocaleTimeString("en-US", timeFormat);
     

    todayTime[i].innerHTML = formattedTime;
    todayTemp[i].innerHTML = hourForecast[currentHour].temp_c + "°";
    todayIcon[i].src = hourForecast[currentHour].condition.icon;
    currentHour += 3; 
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", async () => {
  const location = searchBox.value;
  await checkWeather(location);
});


