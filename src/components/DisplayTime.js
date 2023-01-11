import { faCirclePause, faPlayCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import BreakTime from './BreakTime';
import SessionTime from './SessionTime';

const DisplayTime = () => {
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = useState(
    new Audio("./clockRinging.mp3")
  );

  const playSound = () => {
    breakAudio.currentTime = 0;
    //setTimeout or timeMode
    breakAudio.play();
  }

  const formateTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' + (seconds < 10 ? '0' + seconds : seconds)
    )
  }

  const handlePlayPause = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;

    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime(previous => {
            if (previous <= 0 && !onBreakVariable) {
              // playSound();
              // onBreakVariable = true;
              setOnBreak(true);
              console.log(onBreakVariable);
              return breakTime;
            } else if (previous <= 0 && onBreakVariable) {
              // playSound();
              onBreakVariable = false;
              // setOnBreak(false);
              console.log(onBreakVariable);
              return sessionTime;
            }
            return previous - 1;
          });
          nextDate = nextDate + second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem('interval-id'))
    }
    setTimerOn(!timerOn);
  };

  const handleReset = () => {
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
    setDisplayTime(25 * 60);
  }

  return (
    <>
      <h1>Pomodoro Clock</h1>
      <div className='mainDisplay'>
        <BreakTime
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          formateTime={formateTime}
        />
        <SessionTime
          sessionTime={sessionTime}
          setSessionTime={setSessionTime}
          timerOn={timerOn}
          setDisplayTime={setDisplayTime}
          formateTime={formateTime}
        />
      </div>
      <div className="timerDisplay">
        <h2 className='status'>{onBreak ? "Break Time" : "Work Time"}</h2>
        <d1><b>{formateTime(displayTime)}</b></d1>
        <div className='controlBtn' onClick={handlePlayPause}>
          <div className='playpause'>
            {timerOn ? <FontAwesomeIcon icon={faCirclePause} /> :
              <FontAwesomeIcon icon={faPlayCircle} />}
          </div>
          <div className='reset' onClick={handleReset}>
            <FontAwesomeIcon icon={faSync} />
          </div>
        </div>
      </div>
      <i>-by Agnivesh</i>
    </>
  )
}

export default DisplayTime;