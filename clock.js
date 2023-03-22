
let name = prompt("Lütfen adınızı giriniz:");


let myName = document.getElementById("myName");
myName.innerText = name;


function showDateTime() {
  let date = new Date();


  let options = { timeZone: "Europe/Istanbul" };


  let optionsDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  let dateStr = date.toLocaleDateString("tr-TR", optionsDate);


  let optionsTime = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  let timeStr = date.toLocaleTimeString("tr-TR", optionsTime);

  
  let myClock = document.getElementById("myClock");
  myClock.innerHTML = `${dateStr} ${timeStr}`;

  
  setTimeout(showDateTime, 1000);
}


window.onload = showDateTime;
