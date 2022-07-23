import React, { useState, useEffect, useRef } from "react";
import pomodoroStyle from "./pomodoro.css";

function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [play, pause] = useState(false);

  useEffect(() => {
    if (play) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 0 : 0;
            let seconds = 5;
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, play]);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoroTimer">
      {displayMessage && (
        <div className="messageContainer">
          <div className="message">
            {displayMessage && <div>Break Time!</div>}
          </div>
        </div>
      )}
      <div className="timerContainer">
        <div className="timer">
          {timerMinutes}: {timerSeconds}
        </div>
      </div>
      <div className="playPauseButtons">
        <button className="start-button" onClick={() => pause(!play)}>
          Play | Pause
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
