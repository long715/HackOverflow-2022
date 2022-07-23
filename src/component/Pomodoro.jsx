import React, { useState, useEffect } from "react";
import pomodoroStyle from "./pomodoro.css";

function Pomodoro() {
  const startTimerMins = 0;
  const startTimerSecs = 5;
  const startBreakMins = 0;
  const startBreakSecs = 3;
  const [minutes, setMinutes] = useState(startTimerMins);
  const [seconds, setSeconds] = useState(startTimerSecs);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [play, pause] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (play) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? startTimerMins : startBreakMins;
            let seconds = displayMessage ? startTimerSecs : startBreakSecs;
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
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div className="playPauseButtons">
        <button
          className="playPause"
          onClick={() => {
            pause(!play);
            setDisable(false);
          }}
        >
          Play | Pause
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
