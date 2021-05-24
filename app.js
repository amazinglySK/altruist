setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  let currentTime = hour + ":" + min + am_pm;

  document.getElementById("time").innerHTML = currentTime;
}

showTime();

if (
  localStorage.name == null ||
  localStorage.name == "" ||
  localStorage.name == " " ||
  localStorage.name == undefined
) {
  username = prompt("Enter your nickname");
  if (username == null || username == "" || username == " ") {
    document.getElementById("greeting").innerHTML = `Hello`;
  } else {
    localStorage.name = username;
    document.getElementById(
      "greeting"
    ).innerHTML = `Hello @${localStorage.name}`;
  }
} else {
  document.getElementById("greeting").innerHTML = `Hello @${localStorage.name}`;
}
