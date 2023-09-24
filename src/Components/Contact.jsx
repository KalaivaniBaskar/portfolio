import React from 'react'
import { useState, useRef } from 'react';
import './contact.css'
import { useThemeCTX } from '../Context'
import { Box, Button, Stack, Tooltip } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import DesignOne from './DesignOne';
import ColorDial from './ColorDial';
import DesignTop from './DesignTop';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    const {theme, colSwitch, coltheme } = useThemeCTX();
    const form = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    

  
    const handleSubmit = (e) => {
      e.preventDefault(); 
 
      emailjs.sendForm("service_ypc4t5d", "template_6vgypuj", form.current, 'MtXw4JAAfaCDrkbGP')
      .then((result) => {
          console.log(result.text);
          window.alert("Thank you for contacting me!")
          navigate('/')
          }, 
          (error) => {
          console.log(error.text);
      });
 
   }
  return (
    <>
    <section className={`grid-contact ${theme}`}>
        <div className='des'></div>
        <Box >
        <Stack rowGap={2} my={'2rem'} justifyContent={'center'} 
        flexWrap={'wrap'} > 
          
          <p className={`title-hd ${colSwitch}`}>
            Contact Me
          </p>
          <p className=' info ' style={{wordBreak : 'break-word'}}>Need more info or have something to discuss? Don't hesitate to get in touch.</p>
          <p className={`mail-hd ${colSwitch}`}>
            Email: kalaivani.working@gmail.com
          </p>
          <p className='animate__animated animate__tada animate__delay-3s animate__repeat-2	'>
              <a href='https://github.com/KalaivaniBaskar' target='_blank' rel="noreferrer">
                 <Tooltip title="GitHub"> <GitHubIcon fontSize='large'/> </Tooltip>
                </a>
                <a href='https://www.linkedin.com/in/kalaivani-baskar-912a9b8b' target='_blank' rel="noreferrer">
                <Tooltip title="LinkedIn">  <LinkedInIcon fontSize='large'/> </Tooltip>
                </a>
          </p>
          <form ref={form} onSubmit={handleSubmit}>
          <Stack className='form-wrap animate__animated animate__fadeInUpBig' 
          gap={2} my={'2rem'} mx={'auto'} alignItems={'center'} 
           justifyContent={'center'}> 
            <input className={`${theme}`}
            label={'Name'}
            type='text'
            name="user_name"
            placeholder= 'Your Name'
            onChange={(e) => setName(e.target.value)}
            style={{height : '50px', borderRadius : '20px', fontSize: '1rem', padding: '20px', maxWidth: '600px', width: '100%'}}
            required>
            </input>

            <input className={`${theme}`}
            label={'Email'}
            type='email'
            name='user_email'
            placeholder= 'Your Email'
            onChange={(e) => setEmail(e.target.value)}
            style={{height : '50px', borderRadius : '20px', fontSize: '1rem', padding: '20px', maxWidth: '600px', width: '100%'}}
            required>
            </input>

            <textarea className={`${theme}`}
            label={'Message'}
            type='text'
            placeholder= 'Your Message'
            name="message"
            onChange={(e) => setMsg(e.target.value)}
            style={{height : '50px', borderRadius : '20px', fontSize: '1rem', padding: '20px', minHeight : '100px' , maxWidth: '600px', width: '100%'}}
            required>
            </textarea>

            <Button type='submit' variant='contained' sx={{width : '120px', }} >
              Send 
              <MailIcon fontSize='medium' color='secondary.light' sx={{mx :1 }}/>
            </Button>

            </Stack>
          </form>
          </Stack>
        </Box>

         <DesignOne />
         <DesignTop />
    </section> 
    <section className={`grid-contact-sm ${theme} ${coltheme}`}>
        <Box >
        <Stack rowGap={2} my={'2rem'} justifyContent={'center'} p={2}
        flexWrap={'wrap'} > 
          
          <p className={`title-hd ${colSwitch}`}>
            Contact Me
          </p>
          <p className=' info ' style={{wordBreak : 'break-word'}}>Need more info or have something to discuss? Don't hesitate to get in touch.</p>
          <p className={`mail-hd ${colSwitch}`}>
            <InboxIcon/> kalaivani.working@gmail.com
          </p>
          <p className='animate__animated animate__tada animate__delay-3s animate__repeat-2	'>
                <a href='https://github.com/KalaivaniBaskar' target='_blank' rel="noreferrer">
                 <Tooltip title="GitHub"> <GitHubIcon fontSize='large'/> </Tooltip>
                </a>
                <a href='https://www.linkedin.com/in/kalaivani-baskar-912a9b8b' target='_blank' rel="noreferrer">
                <Tooltip title="LinkedIn">  <LinkedInIcon fontSize='large'/> </Tooltip>
                </a>
          </p>
          <form ref={form} onSubmit={handleSubmit}>
          <Stack gap={2} my={'2rem'} px={'1rem'} justifyContent={'center'} className='animate__animated animate__fadeInUpBig'> 
            <input className={`${theme}`}
            label={'Name'}
            type='text'
            name="user_name"
            placeholder= 'Your Name'
            onChange={(e) => setName(e.target.value)}
            style={{height : '50px', borderRadius : '20px', fontSize: '1rem', padding: '20px', maxWidth: '600px'}}
            required>
            </input>

            <input className={`${theme}`}
            label={'Email'}
            type='email'
            name='user_email'
            placeholder= 'Your Email'
            onChange={(e) => setEmail(e.target.value)}
            style={{height : '50px', borderRadius : '20px', fontSize: '1rem', padding: '20px', maxWidth: '600px'}}
            required>
            </input>

            <textarea className={`${theme}`}
            label={'Message'}
            type='text'
            placeholder= 'Your Message'
            name="message"
            onChange={(e) => setMsg(e.target.value)}
            style={{height : '50px', borderRadius : '20px', fontSize: '1rem', padding: '20px', minHeight : '100px' , maxWidth: '600px'}}
            required>
            </textarea>

            <Button type='submit' variant='contained' sx={{width : '120px', }} >
              Send 
              <MailIcon fontSize='medium' color='secondary.light' sx={{mx :1 }}/>
            </Button>

            </Stack>
          </form>
          </Stack>
        </Box>

         <DesignOne />
         <DesignTop />
    </section> 
    <BottomNav></BottomNav>
       <ColorDial />
</>
    
  )
}

export default Contact