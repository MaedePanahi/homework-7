function formatDate(timestamp){
    let date = new date (timestamp);
    let hours = date.getHours();
    if(hours < 10){
        hours = `0${hours}`
    }
    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    let days = ["Sunay", "Monay", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `Lasted update : ${day} ${hours} : ${minutes}`;
}
 

function ShowWeather(response){
  console.log(response.data)
  let temp=document.querySelector("#temperature");
  let Description=document.querySelector("#description");
  let Humidity = document.querySelector("#humidity");
  let Wind = document.querySelector("#wind");
  let IconElement = document.querySelector("#icon");
  let dateElement=document.querySelector("#date");
  dateElement.innerHTML=formatDate(response.date.time*1000);
  celsiusTemperature = response.data.temperature.current;
  temp.innerHTML=Math.round(celsiusTemperature);
  Description.innerHTML=response.data.condition.description;
  Humidity.innerHTML=`Humidity : ${Math.round(response.data.temperature.humidity)}`;
  Wind.innerHTML=`Wind : ${Math.round(response.data.wind.speed)}`;
  IconElement.setAttribute("src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
}

function getWeather(query){
let url=`https://api.shecodes.io/weather/v1/current?query=${query}&key=b69109c34o2t8f93bad7f025530244c3&units=metric`;

axios.get(url).then(ShowWeather);
}
function clearThis(target) {
    if (target.value == 'exemplo') {
        target.value = "";
    }
}
function Search(event){
    event.preventDefault();
    let Input = document.querySelector("#form-control");
    let CityName = document.querySelector("#city");
    CityName.innerHTML = Input.value;
    getWeather(Input.value);
    document.getElementById("search-form").reset();
    
}
function displayFahrenheitTemp(event){
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let TempretureElement = document.querySelector("#temperature");
    let fahrenheitTemperature= (celsiusTemperature * 9)/5 + 32;
    TempretureElement.innerHTML=Math.round(fahrenheitTemperature);

}
function displayCelsiusTemp(event){
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let TempretureElement = document.querySelector("#temperature");
    TempretureElement.innerHTML=Math.round(celsiusTemperature);
}
let celsiusTemperature = null;

let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click" , displayFahrenheitTemp);

let celsiusLink=document.querySelector("#celsius-link");
celsiusLink.addEventListener("click" , displayCelsiusTemp);



let Form = document.querySelector("#search-form");
Form.addEventListener("submit" , Search);