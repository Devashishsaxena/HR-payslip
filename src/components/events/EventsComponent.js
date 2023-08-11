import React, { useState } from 'react'
import Emptypop from '../modal/Emptypop';
import PersonalInfo from '../modal/Personalinfopopup';
import ProfileInfo from '../ProfileInfo';

const EventsComponent = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
    <button  onClick={() => setClick(true)}>
       Open model
    </button>
    {
      click && <Emptypop closeModal={setClick}/>
    }
    </div>
  )
}

export default EventsComponent