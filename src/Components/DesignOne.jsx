import React, { Fragment } from 'react'
import { useThemeCTX } from '../Context';

const DesignOne = () => {
    const {theme} = useThemeCTX(); 
  const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const pattern = range(1,37,1);
  return (
    <div className={ ` design ${theme}`} >
      <div className='one' key={"orange"}>
        <div className= {`block-in-one ${theme}`}></div>
      </div>
      <div className='two' key={"blue"}>
        <div className={`block-in ${theme}`} key={"inwrap"}>
          {
            pattern.map( (el, i) => 
            <Fragment key={i}>
              <div key={`o${i}`} className='block-in-orange' ></div>
              <div key={`b${i}`} className='block-in-blue' ></div>
             </Fragment>
            )
          }
            
          </div>
        </div> 
     </div>  
  )
}

export default DesignOne