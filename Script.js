let alarmTime = null;
let alarmTimeout = null;

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("currentTime").innerText = timeString;

    if (alarmTime === timeString) {
        document.getElementById("alarmSound").play();
        document.getElementById("status").innerText = "Alarm ringing!";
    }
}

setInterval(updateClock, 1000);

function setAlarm() {
    const input = document.getElementById("alarmTime").value;

    if (!input) {
        alert("Please select a time");
        return;
    }

    let [hours, minutes] = input.split(":");
    let now = new Date();

    let alarm = new Date();
    alarm.setHours(hours);
    alarm.setMinutes(minutes);
    alarm.setSeconds(0);

    let timeToAlarm = alarm.getTime() - now.getTime();

    if (timeToAlarm < 0) {
        timeToAlarm += 24 * 60 * 60 * 1000;
    }

    alarmTimeout = setTimeout(() => {
        document.getElementById("alarmSound").play();
        document.getElementById("status").innerText = "Alarm ringing!";
    }, timeToAlarm);

    document.getElementById("status").innerText = "Alarm set for " + input;
}

function clearAlarm() {
    clearTimeout(alarmTimeout);
    document.getElementById("status").innerText = "Alarm cleared";
}
