import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const SessionTime = ({ formateTime }) => {

  const [sessionTime, setSessionTime] = useState(25 * 60)
  return (
    <div>
      <h3>Session Time</h3>
      <div className="breakClass">
        <button>
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </button>
        <h4>{formateTime(sessionTime)}</h4>
        <button>
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </button>
      </div>
    </div>
  )
}

export default SessionTime;