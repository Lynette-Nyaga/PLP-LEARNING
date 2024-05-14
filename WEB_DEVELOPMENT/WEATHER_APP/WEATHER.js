const apiKey =  "0f848e7829bcc1032528212f768f69ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput=document.getElementById("locationInput");
const searchButton=document.getElementById("searchButton");
const locationElement=document.getElementById("location");
const temperature=document.getElementById("temperature");
const description=document.getElementById("description");


searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if(location){
        fetchWeather(location);
    }
    else{
        alert('please enter a location');
    }
});
function fetchWeather(location){
    const url=`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            locationElement.textContent = data.name;
            temperature.textContent=`${Math.round(data.main.temp)} C `;
            description.textContent= data.weather[0].description;
        })

        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
}
