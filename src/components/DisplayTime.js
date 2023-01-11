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

  const formateTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' + (seconds < 10 ? '0' + seconds : seconds)
    )
  }

  const handlePlayPause = () => {
    let togglePlayPause = timerOn;
    return !togglePlayPause;
  }
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
        <h1>{formateTime(displayTime)}</h1>
        <button onClick={handlePlayPause}>
          {timerOn ? <FontAwesomeIcon icon={faPlayCircle} /> :
            <FontAwesomeIcon icon={faCirclePause} />}
        </button>
        <button className='reset' onClick={handleReset}>
          <FontAwesomeIcon icon={faSync} />
        </button>
      </div>
    </>
  )
}

export default DisplayTime;