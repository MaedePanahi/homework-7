let now = new Date();

let currentDate = document.querySelector("#date");

 let date = now.getDate();
 let hours = now.getHours();
 let minutes = now.getMinutes();
 let year = now.getFullYear();

 let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 let day = days[now.getDay()];

  let months = [
   "Jan",
   "Feb",
   "March",
    "Apr",
   "May",
   "Jun",
  "Jul",
   "Aug",
  "Sep",
   "Oct",
   "Nov",
  "Dec"
 ];
let month = months[now.getMonth()];

currentDate.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

function ShowWeather(response){
  console.log(response.data)
  let temp=document.querySelector("#temperature");
  let Description=document.querySelector("#description");
  
  let Humidity = document.querySelector("#humidity");
  let Wind = document.querySelector("#wind");
  let IconElement = document.querySelector("#icon");
  temp.innerHTML=Math.round(response.data.temperature.current);
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

let Form = document.querySelector("#search-form");
Form.addEventListener("submit" , Search);