setInterval (() => {
  let time = new Date();
  console.log(time)

  let hours = padNumber(time.getHours());
  let minutes = padNumber(time.getMinutes());
  let seconds = padNumber(time.getSeconds());

  let percentageMinute = time.getSeconds() / 60;
  let totalWidth = 1000;
  console.log(percentageMinute);

  document.querySelector("#timerBar").style.width = (totalWidth * percentageMinute) +"px";

//HOUR-UP
document.querySelector("#hour1-up").innerHTML = hours[0];
 document.querySelector("#hour1-down").innerHTML = hours[0];
  document.querySelector("#hour2-up").innerHTML = hours[1];
 document.querySelector("#hour2-down").innerHTML = hours[1];


//MINUTE-UP
document.querySelector("#minute1-up").innerHTML = minutes[0];
 document.querySelector("#minute1-down").innerHTML = minutes[0];
  document.querySelector("#minute2-up").innerHTML = minutes[1];
 document.querySelector("#minute2-down").innerHTML = minutes[1];

//SECOND-UP
document.querySelector("#second1-up").innerHTML = seconds[0];
document.querySelector("#second1-down").innerHTML = seconds[0];
document.querySelector("#second2-up").innerHTML = seconds[1];
document.querySelector("#second2-down").innerHTML = seconds[1];
}, 1000);

function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  }
  else {
    return String(num);
  }
};
