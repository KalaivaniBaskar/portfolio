import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  
from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import ConstructionIcon from '@mui/icons-material/Construction';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { useThemeCTX } from '../Context';
import BottomNav from './BottomNav';
import DesignOne from './DesignOne';
import DesignTop from './DesignTop';
import ColorDial from './ColorDial';

const Journey = () => { 

  const {theme} = useThemeCTX(); 
 
  return (
    <>
  <section className='journey grid-journey bp'>
    <div></div>
      <VerticalTimeline lineColor='#3e497a'>

      <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<ScreenSearchDesktopIcon />}
          />
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
          //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022 - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ConstructionIcon />}
        >
          <h3 className="vertical-timeline-element-title"> FullStack Web Development - MERN stack </h3>
          <h4 className="vertical-timeline-element-subtitle">GUVI, IIT-Madras Campus, Chennai </h4>
          <p>
            REACT.js, Node.js, Express, MongoDB, Mongoose, SQL, Redux, Bootstrap, Material UI, HTML, CSS, JavaScript
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: '#000' }}
          date="2013 - 2015"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Infosys Limited, Chennai</h4>
          <p>
            Systems Engineer, Mainframe Programming, COBOL - JCL, SQL, BNSF Railway Application
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ color: '#000' }}
          date="2008 - 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Jaya Engineering College, Thiruninravur</h4>
          <p>
            Electronics and Communication Engineering, C++, Java, OOPs
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ color: '#000' }}
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary School Certificate</h3>
          <h4 className="vertical-timeline-element-subtitle">Velammal HSS, Mogappair</h4>
          <p>
            Maths, Computer Science, C, C++, OOPs, SQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ color: '#000' }}
          date="2005 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Secondary School Leaving Certificate</h3>
          <h4 className="vertical-timeline-element-subtitle">Alagappa MHSS, Chennai</h4>
          <p>
            Matriculation State Board
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />} date="1991"
          />
      </VerticalTimeline> 
   
        <DesignOne></DesignOne>
        <DesignTop />
   </section> 
  <BottomNav /> 
  <ColorDial />
  </>

  )
}

export default Journey