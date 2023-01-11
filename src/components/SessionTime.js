import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SessionTime = ({sessionTime, setSessionTime, timerOn, formateTime, setDisplayTime }) => {

  const handleClick = (btnAmount) => {
    if (sessionTime < 60 && btnAmount < 0) {
      return;
    }
    setSessionTime(prev => prev + btnAmount);
    if(!timerOn){
      setDisplayTime(sessionTime + btnAmount)
    }
  }

  return (
    <div>
      <h3>Session Time</h3>
      <div className="breakClass">
        <button onClick={() => handleClick(-60)}>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </button>
        <h3>{formateTime(sessionTime)}</h3>
        <button onClick={() => handleClick(+60)}>
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </button>
      </div>
    </div>
  )
}

export default SessionTime;