import React, { useState } from 'react'
import BreakTime from './BreakTime';
import SessionTime from './SessionTime';

const DisplayTime = () => {

  const [display, setDisplay] = useState(25 * 60);

  const formateTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' + (seconds < 10 ? '0' + seconds : seconds)
    )
  }
  return (
    <>
      <div className='dis1'>
        <BreakTime formateTime={formateTime} />
        <SessionTime formateTime={formateTime} />
      </div>
      {formateTime(display)}
    </>
  )
}

export default DisplayTime;