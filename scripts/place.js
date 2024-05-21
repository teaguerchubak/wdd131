let temp = 10;
let windSpeed = 9;

const calculateWindChill = (temp, windSpeed) =>
    13.12 + (0.6215 * temp) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temp * (windSpeed ** 0.16));

if (temp <= 10 && windSpeed > 4.8) {
    document.querySelector("#windchill").textContent =
    `${calculateWindChill(temp, windSpeed).toFixed(2)} °C`;
} else {
    document.querySelector("#windchill").textContent = "N/A";
}
