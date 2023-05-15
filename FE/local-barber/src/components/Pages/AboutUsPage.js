import React from 'react'
import '../../styles/about.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function AboutUsPage() {
  return (
    <div className='aboutUsWrapper'>
        <div className="aboutPageContent">
            <div>
                <h3> ABOUT US </h3>
                <article>
                        Established in 1982, The Barber Shop Group has a passionate commitment to men’s grooming and offers no-nonsense high quality, value-for-money haircuts, styling and shaving for men            
                </article>
            </div>
            <div className='subContent'>
                <div className='info'>
                    <span><a href="https://waze.com/ul/hsv9hc540y"  target="blank"><LocationOnIcon/></a>Haim Orbach 10, Rehovot</span><br/>
                    <span><a href="mailto:test@email.com"><EmailIcon/></a>doriel@gmail.com</span><br/>
                    <span><a href="tel:0521234567"><LocalPhoneIcon/></a>0521234567</span>
                </div>
                <div className='social'>
                    <span>Visit us on:</span>
                    <InstagramIcon/>
                    <FacebookIcon/>
                </div>
            </div>
        </div>
        <div className='imgWrapper'><img style={{width:'100vw'}} src='/about.png' alt='main'/></div>
    </div>
  )
}
