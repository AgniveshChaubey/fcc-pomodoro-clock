import React, { useState } from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

const BreakTime = ({ breakTime, setBreakTime, formateTime }) => {

  const handleClick = (btnAmount) => {
    if (breakTime < 60 && btnAmount < 0) {
      return;
    }
    setBreakTime(prev => prev + btnAmount)
  }

  return (
    <div>
      <h3>Break Time</h3>
      <div className="breakClass">
        <button className='downBtn' onClick={() => handleClick(-60)}>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </button>
        <h3>{formateTime(breakTime)}</h3>
        <button className='upBtn' onClick={() => handleClick(+60)}>
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </button>
      </div>
    </div>
  )
}

export default BreakTime;