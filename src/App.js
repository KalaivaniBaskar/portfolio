import './App.css';
import Home from './Components/Home';
import Journey from './Components/Journey';
import './fonts/BethanyaRegular-4Bw5W.ttf';
import './fonts/Poppins-Light.ttf';
import './fonts/Poppins-Regular.ttf';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import {  Box, IconButton, Stack, Drawer } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import 'animate.css';
import Contact from './Components/Contact';
import { useThemeCTX } from './Context';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import SideMenu from './Components/SideMenu';
import ColorLensIcon from '@mui/icons-material/ColorLens';

function App() { 

  const {theme, setTheme, isDraw, setIsDraw,
          coltheme, setColTheme} = useThemeCTX();

  return ( 

    
      <div className = {`App ${theme} ${coltheme}`} >
       <nav className='nav-theme'>
         <div >
          {
            theme === 'dark' ?
            <IconButton size='large' onClick={ () => setTheme('light')}>
              <LightModeIcon color='primary' />
            </IconButton> 
            :
            <IconButton size='large' onClick={ () => setTheme('dark')}>
              <DarkModeIcon color= 'primary' />
            </IconButton>
          }
         </div>
         <Box  
           sx={{display: { xs: 'flex', md: 'none'  } }}> 
           { coltheme !== 'duo' ?
           <IconButton size='large' onClick={ () => setColTheme('duo')}>
              <ColorLensIcon color='primary' />
           </IconButton> 
           : 
           <IconButton size='large' onClick={ () => setColTheme('')}>
           <ColorLensIcon />
           </IconButton> 
           }
         </Box>
       </nav>

       <Box className='nav-buttons' 
       sx={{display: { xs: 'none', md: 'flex'  } }}>
          <ul>
          <li key={'home'}> <NavLink to='/' > 
             <IconButton  >
             <HomeIcon className = {`${theme}`}  sx={{fontSize : '2.3rem'}} />
            </IconButton>
          </NavLink>
          </li>
          <li key={'skills'}> <NavLink to='/skills' > 
          <IconButton   >
              <EngineeringIcon className = {`${theme}`} sx={{fontSize : '2.3rem'}} />
            </IconButton>
         </NavLink>
         </li>
          <li key={'proj'}> <NavLink to='/projects' > 
          <IconButton  >
              <FolderSharedIcon className = {`${theme}`} sx={{fontSize : '2.3rem'}} />
            </IconButton>
           </NavLink>
           </li>
          <li key={'edu'}> <NavLink to='/education' > 
          <IconButton  >
              <SchoolIcon className = {`${theme}`} sx={{fontSize : '2.3rem'}} />
            </IconButton>
         </NavLink>
         </li>
          <li key={'contact'}> <NavLink to='/contact' > 
          <IconButton  >
              <ContactMailIcon className = {`${theme}`} sx={{fontSize : '2.3rem'}} />
            </IconButton> 
           </NavLink>
           </li>
           </ul>
       </Box>
       <Box className='nav-buttons-small' 
        sx={{display: { xs: 'flex', md: 'none'  } }}>
           <IconButton
             onClick={() => setIsDraw(true)} >
             <MenuIcon className = {`${theme} ${coltheme}`}  sx={{fontSize : '2.3rem'}}  />
           </IconButton>
       </Box>
       {/* Default behaviour is to be hidden */}
       <Drawer anchor='left' open={isDraw} onClose={()=> setIsDraw(false)}>
          <SideMenu isDraw={isDraw} setIsDraw={setIsDraw} />
        </Drawer>


       <Routes>
        <Route path='/' element={ <Home />}  />
        <Route path='/skills' element={ <Skills />}  />
        <Route path='/projects' element={ <Projects />}  />
        <Route path='/education' element={ <Journey />}  />
        <Route path='/contact' element={ <Contact />}  />
      </Routes>
    </div>
   
  );
}

export default App;
