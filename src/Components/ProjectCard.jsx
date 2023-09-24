import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useThemeCTX } from '../Context';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export default function ProjectCard({project, idx}) { 

  const {theme, colSwitch} = useThemeCTX();
  const {title, stack, func, site, fe, be, image} = project;
  const effect = ((idx + 1) %2 === 0) ? `animate__slideInRight` : `animate__slideInLeft`;
  
  return (
    <Card sx={{ maxWidth: 345, justifySelf: 'center', borderLeft: '1px solid grey', 
    borderRight: '1px solid grey'}} elevation={16} 
           className={`${theme} animate__animated ${effect}` }  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          width='320'
          image= {image}
          alt={title}
          sx={{objectFit: 'cover'}}
        />
        <CardContent>
          <Typography className={`${colSwitch}`} gutterBottom variant="h5" component="div">
             {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div" py={1} fontWeight={'550'}>
           <DeveloperModeIcon />   {stack}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {func}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={fe} target='_blank' rel="noreferrer"> <Button size="small" color="primary">
          Frontend
        </Button> </a>
        { be && <a href={be} target='_blank' rel="noreferrer"> <Button size="small" color="primary">
          Backend
        </Button>  </a> }
        <a href={site} target='_blank' rel="noreferrer"><Button size="small" color="primary">
          Live Site
        </Button> </a>
      </CardActions>
    </Card>
  );
}
