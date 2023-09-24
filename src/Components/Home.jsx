import React from 'react'
import './home.css';
import mypic from '../assets/images/fullpicfix.png';
// import mypic from '../assets/images/mypic.JPG'
import mern from '../assets/images/mern.png'
import { Box } from '@mui/material'
import { useThemeCTX } from '../Context';
import {  useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import DesignOne from './DesignOne';
import ColorDial from './ColorDial';

const Home = () => {
  const { theme, coltheme, colSwitch} = useThemeCTX(); 

  const navigate = useNavigate();

  return (
    
    <>
    <section className={`grid-home bpad ${theme}`}>
       <div></div> 
       <Box  sx={{display: { xs: 'none', md: 'grid' } }} className="home-container" >
        <div >
            <div className='div-b'>
              <p className={`home-intro-lg  animate__animated animate__fadeInDown animate__repeat-1`}> Kalaivani Baskar</p>
              <p className={`home-desc ${colSwitch} animate__animated animate__slideInLeft`}> FullStack [MERN] Web Developer </p>
            </div>     
            
              <div className='div-c animate__animated animate__fadeInUp'>
                <img src={mern} alt="MERN" className='mern'></img>
              </div>
              
              <div className='btnwrap'>
                     <button onClick={() => navigate('/skills')}>More About me </button>
              </div>
        </div>   
       </Box> 

        <img src={mypic} alt="Kalaivani" className="img-container animate__animated animate__fadeInRight"></img>

      <DesignOne />
    </section> 

    <section className={`grid-home-sm bpad ${theme} ${coltheme}`}>
        <img src={mypic} alt="Kalaivani" className="img-container-sm animate__animated animate__fadeInDown"></img>
        
        <div>
        <p className='home-intro-sm animate__animated animate__fadeInDown animate__repeat-1'> Kalaivani Baskar</p>
        <p className={`home-desc ${colSwitch} animate__animated animate__slideInLeft`}> FullStack [MERN] Web Developer </p>
        </div>
        <div className='div-c animate__animated animate__fadeInUp'>
                <img src={mern} alt="MERN" className='mern'></img>
        </div>
      
        <div className='btnwrap'>
           <button onClick={() => navigate('/skills')} >More About me </button>
        </div>
    </section>
    <BottomNav></BottomNav>
    <ColorDial />
   </>
  )
}

export default Home