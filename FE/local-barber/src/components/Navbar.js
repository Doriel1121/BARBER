import React from 'react'
import '../styles/Navbar.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import  HomeIcon from '@mui/icons-material/Home';
import { Link , useNavigate } from 'react-router-dom';
import Menu from './Menu'


export default function Navbar(props) {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="NavPanel">
        <div className='iconsRow'>
          <ArrowBackIosIcon fontSize='small' onClick={() => navigate(-1)}/>
        </div>
        <div className='rightNabPanel'>
          <Menu/>
          {/* <Link to={'/about'}><InfoIcon className='aboutIcon' fontSize='small'/></Link>
          <Link to={'/home'}><HomeIcon className='homeIcon' fontSize='small'/></Link> */}
        </div>
      </div>
        {/* <div className='NavbarTitle'>
            <span>{props.title ? props.title : ''}</span>
        </div> */}
            {/* <div className='shapeMaker'></div> */}
    </div>
  )
}
