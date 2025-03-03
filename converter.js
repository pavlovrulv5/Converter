const apiUrl = "https://api.exchangerate-api.com/v4/latest/";

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (amount === "" || isNaN(amount)) {
    document.getElementById("result").value = "";
    return;
  }

  fetch(`${apiUrl}${fromCurrency}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при получении данных о курсе валют.");
      }
      return response.json();
    })
    .then((data) => {
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById(
        "result"
      ).value = `${convertedAmount} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Не удалось получить данные о курсе валют.");
    });
}
