import React, { useEffect } from 'react'
import './skills.css'
import {  Stack, Button , Tooltip} from '@mui/material'
import { useThemeCTX } from '../Context';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import BottomNav from './BottomNav';
import DesignOne from './DesignOne';
import ColorDial from './ColorDial';
import DesignTop from './DesignTop';

const Skills = () => {
  const {theme, coltheme, colSwitch} = useThemeCTX(); 
 
  const navigate = useNavigate();
 
  return (
      
    <>
     <section className={`grid-skills ${theme}`}>
        <div></div>
        <div className='about'>
        <p className= 'title-hd'>ABOUT ME</p>
        <p className={` name-hd ${colSwitch} animate__animated animate__bounceInDown animate__slow`}>Kalaivani Baskar,  
        <span className={` name2-hd ${colSwitch}`} > Chennai. </span></p>
            
              <p className='m-10'>Hi, I'm a certified MERN stack developer aspiring to be a FullStack Engineer, familiar with a range of programming utilities and languages. Knowledgeable in backend and frontend development technologies with database management. Collaborative team player with a willingness to learn and grow with the organization.</p>
              <p className='m-10'> <span className={`${colSwitch}`}>2 yrs experience </span> in IT industry </p> 
              <p className='m-10  animate__animated animate__heartBeat animate__delay-4s animate__repeat-2'> <span className={`${colSwitch}`}>7+ months certification </span> in MERN Stack</p> 
              <p className='m-10'>Programming languages known : <span className={`${colSwitch}`}> Javascript, Java, C++ </span></p> 

              <div className='flex-div'>
                <Button variant='outlined' className='btn-skills' onClick={()=> navigate('/education')}>Education</Button>
                <Button variant='outlined' className='btn-skills' >
                <a href='https://drive.google.com/file/d/1zlgsXu79LWff7J5PagLxCfXOBss2VHo0/view?usp=sharing' 
                target='_blank' rel="noreferrer"> RESUME
                </a>
              </Button>
                <a href='https://github.com/KalaivaniBaskar' target='_blank' rel="noreferrer">
                 <Tooltip title="GitHub"> <GitHubIcon fontSize='large'/> </Tooltip>
                </a>
                <a href='https://www.linkedin.com/in/kalaivani-baskar-912a9b8b' target='_blank' rel="noreferrer">
                <Tooltip title="LinkedIn">  <LinkedInIcon fontSize='large'/> </Tooltip>
                </a>
              </div>
        </div>
          
        <div className='skill-container'>
          <p className= 'title-hd'>Tech Stack</p>
          <p className= 'label-hd m-20'>FRONTEND</p>
          <div className='skillset animate__animated animate__flipInX'>
           <Stack gap={1} justifyContent={'center'} width={'100%'}
           height={'100%'}>
           <CircularProgressWithLabel value={85}  />
           <p className={ ` label-hd ${theme}`}>HTML5</p>
           </Stack>                   
     
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>CSS3</p>
           </Stack>
      
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>JavaScript</p>
           </Stack>

           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={70}  />
           <p className={ ` label-hd ${theme}`}>Bootstrap5</p>
           </Stack>

           <Stack gap={1} justifyContent={'center'} width={'100%'}
           height={'100%'}>
           <CircularProgressWithLabel value={60}  />
           <p className={ ` label-hd ${theme}`}>REACTjs</p>
           </Stack>                   
     
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={50}  />
           <p className={ ` label-hd ${theme}`}>REDUX</p>
           </Stack>
      
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>Material UI</p>
           </Stack>

           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={70}  />
           <p className={ ` label-hd ${theme}`}>Bootstrap</p>
           </Stack>
          </div>
         
          <p className= 'label-hd m-20'>BACKEND </p>
          <div className='skillset animate__animated animate__flipInX'>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={60}  />
           <p className={ ` label-hd ${theme}`}>NODEjs</p>
           </Stack>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>Expressjs</p>
           </Stack>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={70}  />
           <p className={ ` label-hd ${theme}`}>MongoDB</p>
           </Stack>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>Mongoose</p>
           </Stack>
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>SQL</p>
           </Stack>
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={35}  />
           <p className={ ` label-hd ${theme}`}>AWS</p>
           </Stack>
          </div> 
        </div>  

         <DesignOne />
         <DesignTop />
    </section>

    <section className={`grid-skills-sm ${theme} ${coltheme}`}> 

    <div className='about'>
        <p className= 'title-hd'>ABOUT ME</p>
        <p className={` name-hd ${colSwitch} animate__animated animate__bounceInDown animate__slow`}>Kalaivani Baskar,  <span className={` name2-hd ${colSwitch}`} > Chennai. </span></p>
            
              <p className='m-10'>Hi, I'm a certified MERN stack developer aspiring to be a FullStack Engineer, familiar with a range of programming utilities and languages. Knowledgeable in backend and frontend development technologies with database management. Collaborative team player with a willingness to learn and grow with the organization.</p>
              <p className='m-10'> <span className={`${colSwitch}`}>2 yrs experience </span> in IT industry </p> 
              <p className='m-10 animate__animated animate__heartBeat animate__delay-3s animate__repeat-2	'> <span className={`${colSwitch}`}>7+ months certification </span> in MERN Stack</p> 
              <p className='m-10'>Programming languages known : <span className={`${colSwitch}`}> Javascript, Java, C++ </span></p> 

              <div className='flex-div'>
                <Button variant='outlined' className='btn-skills' onClick={()=> navigate('/education')}>Education</Button>
                <Button variant='outlined' className='btn-skills' >
                <a href='https://drive.google.com/file/d/1zlgsXu79LWff7J5PagLxCfXOBss2VHo0/view?usp=sharing' 
                target='_blank' rel="noreferrer"> RESUME
                </a>
              </Button>
                <a href='https://github.com/KalaivaniBaskar' target='_blank' rel="noreferrer">
                 <Tooltip title="GitHub"> <GitHubIcon fontSize='large'/> </Tooltip>
                </a>
                <a href='https://www.linkedin.com/in/kalaivani-baskar-912a9b8b' target='_blank' rel="noreferrer">
                <Tooltip title="LinkedIn">  <LinkedInIcon fontSize='large'/> </Tooltip>
                </a>
              </div>
        </div>        
        <div className='skill-container'>
          <p className= 'title-hd'>Tech Stack</p>
          <p className= 'label-hd m-20'>FRONTEND</p>
          <div className='skillset animate__animated animate__flipInX' >
           <Stack gap={1} justifyContent={'center'} width={'100%'}
           height={'100%'}>
           <CircularProgressWithLabel value={85}  />
           <p className={ ` label-hd ${theme}`}>HTML5</p>
           </Stack>                   
     
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>CSS3</p>
           </Stack>
      
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>JavaScript</p>
           </Stack>

           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={70}  />
           <p className={ ` label-hd ${theme}`}>Bootstrap5</p>
           </Stack>

           <Stack gap={1} justifyContent={'center'} width={'100%'}
           height={'100%'}>
           <CircularProgressWithLabel value={60}  />
           <p className={ ` label-hd ${theme}`}>REACTjs</p>
           </Stack>                   
     
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={50}  />
           <p className={ ` label-hd ${theme}`}>REDUX</p>
           </Stack>
      
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>Material UI</p>
           </Stack>

           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={70}  />
           <p className={ ` label-hd ${theme}`}>Bootstrap</p>
           </Stack>
          </div>
         
          <p className= 'label-hd m-20'>BACKEND </p>
          <div className='skillset animate__animated animate__flipInX' >
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={60}  />
           <p className={ ` label-hd ${theme}`}>NODEjs</p>
           </Stack>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>Expressjs</p>
           </Stack>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={70}  />
           <p className={ ` label-hd ${theme}`}>MongoDB</p>
           </Stack>
          <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>Mongoose</p>
           </Stack>
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={65}  />
           <p className={ ` label-hd ${theme}`}>SQL</p>
           </Stack>
           <Stack gap={1} justifyContent={'center'}>
           <CircularProgressWithLabel value={35}  />
           <p className={ ` label-hd ${theme}`}>AWS</p>
           </Stack>
          </div> 
        </div>  
    </section> 
    <BottomNav></BottomNav>
       <ColorDial />
    </>
  )
}

export default Skills