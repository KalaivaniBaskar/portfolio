import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import { useThemeCTX } from '../Context';

export default function BottomNav() {
  const [value, setValue] = React.useState();
  const {theme} = useThemeCTX();
  const navigate = useNavigate();
  return (
    <Box  sx={{ width: '100%',  position: 'fixed', bottom: 0, 
    zIndex: 30 , overflowX: 'auto' , backgroundColor: 'azure'}} 
    className = {`bottom-nav `}>
      <BottomNavigation 
        showLabels  
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); 
          if(newValue === 0)
          navigate('/');
          if(newValue === 1)
          navigate('/skills');
          if(newValue === 2)
          navigate('/projects');
          if(newValue === 3)
          navigate('/education');
          if(newValue === 4)
          navigate('/contact');
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} 
        sx={{paddingRight: '8px'}} />
        <BottomNavigationAction label="Skills" icon={<EngineeringIcon />}
         sx={{paddingRight: '8px', paddingLeft: 0}}/>
        <BottomNavigationAction label="Project" icon={<FolderSharedIcon />} 
         sx={{paddingRight: '8px', paddingLeft: 0}}/>
        <BottomNavigationAction label="Edu" icon={<SchoolIcon />} 
        sx={{paddingRight: '8px', paddingLeft: 0}}/>
        <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} 
        sx={{paddingRight: '5px', paddingLeft: `8px`}}/>
      
      </BottomNavigation>
    </Box>
  );
}