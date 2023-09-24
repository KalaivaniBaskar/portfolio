import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useThemeCTX } from '../Context';

export default function CircularProgressWithLabel(props) {
  const { theme, colSwitch} = useThemeCTX(); 

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} 
    className={`progress-box ${colSwitch}`} alignSelf={'center'}>
      <CircularProgress  
      variant="determinate" {...props} 
      color='inherit'
      style={{width: '85px', height: '85px', 
      minWidth: '85px', minHeight:'85px' }} 
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography  component="div" 
        className={` .label-hd ${theme}`} 
        sx={{backgroundColor: 'transparent'}}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

