import React, { useState } from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

const BreakTime = ({ formateTime }) => {
  const [breakTime, setBrealTime] = useState(5 * 60);

  return (
    <div>
      <h3>Break Time</h3>
      <div className="breakClass">
        <button>
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </button>
        <h4>{formateTime(breakTime)}</h4>
        <button>
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </button>
      </div>
    </div>
  )
}

export default BreakTime;