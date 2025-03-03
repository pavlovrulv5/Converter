const API_KEY = "0e88845c1800d2873f68937dcae2510d";
const city = "Москва";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

// Fetch API для отправки запроса
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Обработка данных и вывод на экран
    const weatherElement = document.getElementById("weather");
    const description = data.weather[0].description;
    const temperature = data.main.temp;

    weatherElement.textContent = `${city}: ${description}, температура ${temperature}°C`;
  })
  .catch((error) => {
    console.error("Ошибка при получении данных о погоде:", error);
  });
