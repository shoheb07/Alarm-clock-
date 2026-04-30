# Alarm-clock-
simple Alarm Clock web app using HTML, CSS, and JavaScript. It shows current time and lets you set an alarm.

# ⏰ Alarm Clock Web App

## 📌 Overview
A simple Alarm Clock built using HTML, CSS, and JavaScript.  
It displays the current time in real-time and allows users to set or clear an alarm with a sound notification.


## 🚀 Features
- Live digital clock (updates every second)
- Set alarm using time picker
- Alarm sound when time is reached
- Clear/reset alarm functionality
- Clean and responsive UI


## 📁 Project Structure
alarm-clock/ │── index.html     # Main HTML file │── style.css      # Styling │── script.js      # Logic for clock & alarm


## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JS)


## ▶️ How to Run
1. Download or clone this project  
2. Open the folder  
3. Double-click index.html or open it in any browser  


## ⚙️ How It Works
- The clock updates every second using setInterval()
- User selects a time using the input field
- When "Set Alarm" is clicked:
  - The app calculates the time difference
  - A setTimeout() is used to trigger the alarm
- When the alarm time is reached:
  - Sound plays
  - Status message updates


## 🔊 Alarm Sound
The app uses an online audio file:
https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3
You can replace it with your own audio file if needed.


## ❌ Limitations
- Alarm works only while the browser tab is open
- No snooze feature
- No multiple alarms support


## 🔮 Future Improvements
- Add snooze option
- Support multiple alarms
- Save alarms using localStorage
- Add dark/light mode toggle
- Mobile app version


## 📄 License
This project is free to use for learning and educational purposes.
