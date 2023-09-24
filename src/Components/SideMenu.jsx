import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  Box,  IconButton, Typography,  List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Divider} from '@mui/material' 
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';

const SideMenu = ({isDraw, setIsDraw}) => {
    const navigate = useNavigate();
  return (
    <Box p={2} width={'250px'} textAlign={'center'} role='presentation'>
   
    <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setIsDraw(false)}
        >
          <ChevronLeftIcon />
      </IconButton>
      <Divider /> 
      
      <List onClick={() => setIsDraw(false)}>
      <ListItem key={'Home'} disablePadding>
        <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
            </ListItemButton>
            </ListItem>
            <Divider /> 
        <ListItem key={'skills'} disablePadding>
        <ListItemButton onClick={() => navigate('/skills')}>
            <ListItemIcon>
                    <EngineeringIcon />
                </ListItemIcon>
                <ListItemText primary={'Skillset'} />
            </ListItemButton>
            </ListItem>
            <Divider /> 
        <ListItem key={'projects'} disablePadding>
        <ListItemButton onClick={() => navigate('/projects')}>
            <ListItemIcon>
                    <FolderSharedIcon />
                </ListItemIcon>
                <ListItemText primary={'Projects'} />
            </ListItemButton>
            </ListItem>
            <Divider /> 
        <ListItem key={'education'} disablePadding>
        <ListItemButton onClick={() => navigate('/education')}>
            <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary={'Education'} />
            </ListItemButton>
            </ListItem>
            <Divider /> 
        <ListItem key={'contact'} disablePadding>
        <ListItemButton onClick={() => navigate('/contact')}>
            <ListItemIcon>
                    <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact Me'} />
            </ListItemButton>
            </ListItem>
      </List> 
        <Divider />
        </Box>
  )
}

export default SideMenu