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
