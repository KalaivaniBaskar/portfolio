import React from 'react'
import './projects.css';
import DesignOne from './DesignOne'
import BottomNav from './BottomNav'
import ColorDial from './ColorDial'
import DesignTop from './DesignTop';
import { useThemeCTX } from '../Context'
import crm from '../assets/images/crm.jpg';
import aws from '../assets/images/aws.jpg';
import ai from '../assets/images/imggen.jpg';
import qr from '../assets/images/qr.png';
import ProjectCard from './ProjectCard';
import { Box } from '@mui/material';

const Projects = () => {
  const {theme, colSwitch, coltheme } = useThemeCTX();

  const projects = [
    {
      "title" : "CRM Application",
      "stack" : "React.js, Redux, Node.js, MongoDB, Express.js",
      "func" : "Authentication, Role based permission, Redux store",
      "site" : "https://crm-capstone-mern.netlify.app/",
      "fe": "https://github.com/KalaivaniBaskar/CRM-Capstone-frontend",
      "be" : "https://github.com/KalaivaniBaskar/CRM-Capstone-backend",
      "image" : crm
    },
    {
      "title" : "Serverless App w AWS",
      "stack" : "React.js, AWS - S3, Lambda, DynamoDB",
      "func" : "A CRUD app with frontend on S3, backend using Lambda, API gateway and DynamoDB",
      "site" : "http://kalais-aws-crud-app.s3-website-us-east-1.amazonaws.com/",
      "fe": "https://github.com/KalaivaniBaskar/AWS-CRUD-Serverless",
      "be" : "https://github.com/KalaivaniBaskar/AWS-CRUD-Serverless/tree/master/aws",
      "image" : aws
    },
    {
      "title" : "Image generator ",
      "stack" : "HTML,CSS, Javascript",
      "func" : "A text to image generator application using OpenAI platform",
      "site" : "https://txt-image-generator-openai.netlify.app/",
      "fe": "https://github.com/KalaivaniBaskar/Image-Generator-OpenAI-fe",
      "be" : "https://github.com/KalaivaniBaskar/Image-Generator-OpenAI-BE",
      "image" : ai
    },
    {
      "title" : "QR Code Creator/Scanner",
      "stack" : "React, Javascript",
      "func" : "A QR code generator and reader app built with QR server API upload and download",
      "site" : "https://qrcode-gen-scanner.netlify.app/",
      "fe": "https://github.com/KalaivaniBaskar/QR-code-App",
      "be" : "",
      "image" : qr
    },
   
  ]
  return (
    <>
    <section className={`grid-project ${theme}`}>
      <div></div>
      <div>
         <Box className={`title-hd ${colSwitch}`} my={2} p={2}> 
            My Projects
          </Box> 
          <div className='card-grid'>
             {
              projects.map((project,idx) => 
              <ProjectCard key={idx}  project={project} idx={idx}></ProjectCard>)
             }
          </div>
      </div>    
    <DesignOne />
    <DesignTop />
    </section>

    <section className={`grid-project-sm ${theme} ${coltheme}`}>
       <div>
         <p className={`title-hd ${colSwitch}`}>
            My Projects
          </p>
          <Box className='card-grid' mx={'auto'}>
             {
              projects.map((project,idx) => 
              <ProjectCard  key={idx} project={project} idx={idx}></ProjectCard>)
             }
          </Box>
        </div>        
    </section>
    <BottomNav />
    <ColorDial />
    </>
  )
}

export default Projects