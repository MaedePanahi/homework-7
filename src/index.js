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
  let City = document.querySelector("#city");
  let Humidity = document.querySelector("#humidity");
  let Wind = document.querySelector("#wind");
  let Icon = document.querySelector("#icon")
  temp.innerHTML=Math.round(response.temperature.current);
  Description.innerHTML=response.condition.Description;
  City.innerHTML=response.City;
  Humidity.innerHTML=response.temperature.Humidity;
  Wind.innerHTML=Math.round(response.Wind.speed);
  Icon.innerHTML=response.condition.icon_url;
}


let url=`https://api.shecodes.io/weather/v1/current?query=Lisbon&key=b69109c34o2t8f93bad7f025530244c3&units=metric`;

axios.get(url).then(ShowWeather);

