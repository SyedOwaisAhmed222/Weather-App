function getWeather() {
  let city= document.getElementById("city").value ;
  let p = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44ea68e3984516940a790e0a77a78f2d`
  );
  p.then((response) => {
    return response.json();
  }).then((response) => {
    console.log(response);
    document.getElementById("wind").innerHTML=response.wind.speed;
    document.getElementById("sky").innerHTML=response.weather[0].description;
    document.getElementById("temp").innerHTML=response.main.temp;
    document.getElementById("humidity").innerHTML=response.main.humidity;
  });
}

