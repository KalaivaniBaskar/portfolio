import React from 'react'
import { useThemeCTX } from '../Context';

const DesignTop = () => {
    
    const {theme} = useThemeCTX(); 

  return (
    <div className={ ` designtop ${theme}`} >
    <div className='four'>
    </div> 
    <div className='three'>
    </div>
    </div>  
  )
}

export default DesignTop