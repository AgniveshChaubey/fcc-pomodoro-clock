import { faCirclePause, faPlayCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import BreakTime from './BreakTime';
import SessionTime from './SessionTime';

const DisplayTime = () => {
  const [sessionTime, setSessionTime] = useState(5);
  const [displayTime, setDisplayTime] = useState(5);
  const [breakTime, setBreakTime] = useState(3);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = useState(new Audio('./clockRunning.mp3'));

  const formateTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' + (seconds < 10 ? '0' + seconds : seconds)
    )
  }

  const playSound = () => {
    breakAudio.currentTime = 0;
    breakAudio.play();
    //setTimeout or timeMode
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
              onBreakVariable = true;
              setOnBreak(true);
              console.log(onBreakVariable);
              return breakTime;
            } else if (previous <= 0 && onBreakVariable) {
              // playSound();
              onBreakVariable = false;
              setOnBreak(false);
              console.log(onBreakVariable);
              return sessionTime;
            }
            return previous - 1;
          });
          nextDate =nextDate + second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem('interval-id'))
    }
    setTimerOn(!timerOn);
    // console.log(date)
    // console.log(nextDate)
  };

  const handleReset = () => {
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
    setDisplayTime(25 * 60);
  }

  return (
    <>
      <div className='mainDisplay'>
        <BreakTime breakTime={breakTime} setBreakTime={setBreakTime} formateTime={formateTime} />
        <SessionTime
          sessionTime={sessionTime}
          setSessionTime={setSessionTime}
          timerOn={timerOn}
          setDisplayTime={setDisplayTime}
          formateTime={formateTime}
        />
      </div>
      <div className="timerDisplay">
      <h3>{ onBreak ? "Break Time" : "Work Time"}</h3>
        <h1>{formateTime(displayTime)}</h1>
        <button onClick={handlePlayPause}>
          {timerOn ? <FontAwesomeIcon icon={faCirclePause} /> :
            <FontAwesomeIcon icon={faPlayCircle} />}
        </button>
        <button className='reset' onClick={handleReset}>
          <FontAwesomeIcon icon={faSync} />
        </button>
      </div>
    </>
  )
}

export default DisplayTime;