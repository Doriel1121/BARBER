import React, { useEffect , useState } from 'react'
import '../../styles/FirstPage.css'
import LOGO from '../../resources/MainLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import LoginPage from '../LoginPage';


export default function FirstPage(props) {
  const navigate = useNavigate();
  const [nextPage , setNextPage] = useState('')
  const [isTimePassed , setIsTimePassed] = useState(false);
  const [showComp , setShowComp] = useState(false);

  setTimeout(() => { 
    // navigate('/login');
    const elem = document.getElementById('logo').classList.add('tran');
    setTimeout(() => {
    setShowComp(true)
    }, 2000)
    
  }, 2500);
  return (
    <div className='firstpageWrapper bg-pan-left'>
      <div className='header'>  
        <img id='logo' className='logo puff-in-center' src={LOGO} alt='pic'/>
        {showComp ? <LoginPage/> : null}
        
        </div>
    </div>
  )
}
