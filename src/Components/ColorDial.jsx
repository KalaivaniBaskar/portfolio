import React from 'react'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { useThemeCTX } from '../Context';
import {   SpeedDial, SpeedDialAction } from '@mui/material'

const ColorDial = () => {
   
    const { setColSwitch} = useThemeCTX(); 
    const actions = [
        { icon: <div className='palette red-bg' />, name: 'red' },
        { icon:<div className='palette yellow-bg' />, name: 'yellow' },
        { icon: <div className='palette blue-bg' /> , name: 'blue' },
        { icon: <div className='palette violet-bg' /> , name: 'violet' },
      ];

  return (
    <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 60, right: 16 }}
    icon={<FormatColorFillIcon />}
  >    
  {actions.map((action) => ( 
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={() => setColSwitch(action.name)}
      />
      ))}
  </SpeedDial>
  )
}

export default ColorDial