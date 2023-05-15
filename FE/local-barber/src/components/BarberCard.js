import React, { useState , useContext } from 'react'
import '../styles/BarberCard.css'
import BarberPic from '../resources/barber1.png'
import { Link, Navigate } from 'react-router-dom'
import  DataHolderContext  from '../components/DataHolderContext'


export default function BarberCard(props) {
  const [see , setSchedule] = useState(false);
  const {state} = useContext(DataHolderContext);
  const [chosen , setChosen] = useState('')
  console.log(props);

  function seeSchdule() {
    console.log(props.data);
    state.setchosenbarber(props.data._id)
    setChosen(props.data._id)
  }
  console.log(props);
  return (
    <div className={`barberCard ${props.data._id === props.isChosen ? 'selected' : ''}`}>
      <div className='desc'>
        <h3 onClick={() => seeSchdule()} id={props.data}>
          {props.data.Name}
        </h3>
        {/* <span >קבע תור</span> */}
      </div>
    </div>
  )
}
