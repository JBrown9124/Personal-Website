import React, { useEffect, useState } from "react";
import {
  
  
  Container,
  Row,
  Col,
  Image
  
  
} from "react-bootstrap";
import Accordion from "../components/Accordion"
import DoOrDoNotVid from "../images/DoOrDoNotVid.webm"
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DoOrDoNotPic1 from "../images/DoOrDoNotPic1.png"
import DoOrDoNotPic2 from "../images/DoOrDoNotPic2.png"
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import theme from "../themes/theme1"
import CardBoop from "../animators/CardBoop.js"

export default function Work(props) {
  
  function openInNewTab(url) {
    

    var win = window.open(url, '_blank');
    win.focus();
  }
  const handleDoOrDoNot=()=>{
    openInNewTab("https://do-or-do-not-1.herokuapp.com");
   
  }
  return (
    <>
    <Container >
       
    <Divider orientation="horizontal" textAlign="left" sx={{marginBottom:"30px"}} flexItem>
        <h1 className="aboutTitleText"> Personal projects</h1>
  </Divider>
  
  <Row>
    <Col xs={"auto"}>
    <CardBoop>
    <Card type="button"onClick={()=>handleDoOrDoNot()}className="workContainer"sx={{ maxWidth: 400 }}>
      <Container>
    <div className='player-wrapper'>
      
      <ReactPlayer
      
       playing={true}
        className='react-player'
        url={DoOrDoNotVid}
        width='100%'
        height='100%'
        muted={true}
        loop={true}
       
       
        
      />
    </div>
   
      <CardContent>
        <ThemeProvider theme={theme}>
        <Typography gutterBottom variant="h5" component="div">
          Do or Do Not
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Developed and deployed a social task managing web application that allows you to share, edit,
delete, create (drawing and image importing features included) and complete tasks with users
on your friends list. Also handles useful social functions such as user authentication, a friends
list (received and sent friend requests) and friend alerts (ex. notifying a user when a friend has
completed a shared task).Uses Django as the backend web framework and React.js as the
frontend library. All data is queried from and stored in a PostgreSQL database using a ReST API
developed with Django
        </Typography>
        </ThemeProvider>
      </CardContent>
    
      </Container>
     
    </Card>
   </CardBoop>
    
    </Col>
        <Col xs={"auto"}>
        <CardBoop>
        <Card  className="workContainer" sx={{ maxWidth: 400 }}>
        <Container>
    <div className='player-wrapper'>
      
      <ReactPlayer
      
       playing={true}
        className='react-player'
        url={DoOrDoNotVid}
        width='100%'
        height='100%'
        muted={true}
        loop={true}
       
       
        
      />
    </div>
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          Do or Do Not
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Developed and deployed a social task managing web application that allows you to share, edit,
delete, create (drawing and image importing features included) and complete tasks with users
on your friends list. Also handles useful social functions such as user authentication, a friends
list (received and sent friend requests) and friend alerts (ex. notifying a user when a friend has
completed a shared task).Uses Django as the backend web framework and React.js as the
frontend library. All data is queried from and stored in a PostgreSQL database using a ReST API
developed with Django
        </Typography>
      </CardContent>
    
  
      </Container>
    </Card>
    </CardBoop>
  
      </Col>
      <Col xs={"auto"}>
      <CardBoop>
      <Card className="workContainer" sx={{ maxWidth: 400}}>
        <Container>
    <div className='player-wrapper'>
      
      <ReactPlayer
      
       playing={true}
        className='react-player'
        url={DoOrDoNotVid}
        width='100%'
        height='100%'
        muted={true}
        loop={true}
       
       
        
      />
    </div>
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          Do or Do Not
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Developed and deployed a social task managing web application that allows you to share, edit,
delete, create (drawing and image importing features included) and complete tasks with users
on your friends list. Also handles useful social functions such as user authentication, a friends
list (received and sent friend requests) and friend alerts (ex. notifying a user when a friend has
completed a shared task).Uses Django as the backend web framework and React.js as the
frontend library. All data is queried from and stored in a PostgreSQL database using a ReST API
developed with Django
        </Typography>
      </CardContent>
    
  
      </Container>
    </Card>
    </CardBoop>
      </Col>
      </Row>
      {/* <Accordion flush>
  <Accordion.Item eventKey="0" >
    <Accordion.Header>Technlogies I use</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion> */}

    
</Container>
    </>
  );
}
