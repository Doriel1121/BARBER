import React, { useContext } from 'react';
import '../../styles/HomePage.css'
import useFetch from '../Hooks/useFetch';
import  DataHolderContext  from '../DataHolderContext';
import { Link } from 'react-router-dom';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import StandardImageList from '../gallery';
import SoapIcon from '@mui/icons-material/Soap';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export default function HomePage() {
    const {state} = useContext(DataHolderContext);


  return (
        <div className="optionPageWrapper">
        <div className="restOfHomepage">
        <div className='welcomeMessage'>
            <h2 className='tracking-in-expand'>Hello,  <b>{state.logedInUser.name}</b><br/></h2>
        </div>
        <div className='latestMessages'>

            <span className='subTitle'>Happy Christmes</span>
            <h3>
                Latest News
            </h3>
            <span className='desc'>
                For your information, due to christmes the barber shop will be close on 01/02.
            </span>
        </div>
        <div className='OptionsSection'>
            <h4>Options</h4>
            <div className='options'>
                <div className="option">
                    <div className="card">
                        <ContentCutIcon/>
                    </div>
                    <span>Haircuts</span>
                </div>
                <div className="option">
                    <div className="card">
                        <img src='./beard.svg' width={40} height={40} alt='beard'/>
                    </div>
                    <span>Beard</span>
                </div>
                <div className="option">
                    <div className="card">
                        <ChildCareIcon/>
                    </div>
                    <span>Child</span>
                </div>
                <div className="option">
                    <div className="card">
                        <ColorLensIcon/>
                    </div>
                    <span>Color</span>
                </div>
                <div className="option">
                    <div className="card">
                        <SoapIcon/>
                    </div>
                    <span>Head Wash</span>
                </div>
            </div>
        </div>
        <div className="gallery">
            <StandardImageList/>
        </div>
        <div className="callToAction">
            <button className='heartbeat'>
                <Link to={'/allBarbers'}>New Appointment</Link>
            </button>
        </div>
        </div>
        </div>
    )
}