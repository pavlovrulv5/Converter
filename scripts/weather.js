const weather_API_KEY = "0e88845c1800d2873f68937dcae2510d";
const city = "Москва";
const weather_apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_API_KEY}&units=metric&lang=ru`;

fetch(weather_apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.cod === 200) {
      document.getElementById("weather").innerHTML = `
                    Город: ${data.name} - Температура: ${data.main.temp}°C</p>
                `;
    } else {
      document.getElementById(
        "weather"
      ).innerHTML = `<p>Город не найден. Пожалуйста, попробуйте снова.</p>`;
    }
  })
  .catch((error) => {
    document.getElementById(
      "weather"
    ).innerHTML = `<p>Произошла ошибка: ${error.message}</p>`;
  });
