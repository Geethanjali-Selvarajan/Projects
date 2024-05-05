import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import banner1 from "../images/banner1.jpg";
import "../styles/HomeStyles.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography, Container} from '@mui/material';



const Home = () => {
  const imageStyle = {
    maxWidth: '100%',
   Height:'25px',
    borderRadius: '10px',
  };
 
  const gallerySectionStyle1 = {
    backgroundColor: 'white', 
    padding: '10px',
    color:'white',
    textAlign: 'center',
    marginBottom: '70px',
    marginTop:'5px'
    
    
  };

  const galleryBoxStyle = {
    
    marginBottom: '20px',
    padding: '10px',
    textAlign:'center',
    color:'black',
    fontSize:'30px'
  

  };
  
  return (
    <Layout>
      <div className="container">
        <div className="home" style={{ backgroundImage: `url(${banner1})` }}>
          <div className="headerContainer">
            <h1>DINEPLAN</h1>
            <p>Book a table and enjoy a delightful dining experience.</p>  
            <Button>
              <Link  to="/reservation">Book now</Link>
            </Button>
          </div>
        </div>
        
      </div>
      <Box sx={{ backgroundColor: "White", marginBottom: '20px', padding: '50px' }}>
  <Container style={{ backgroundColor: "darkslategrey", color: "white", padding: '20px', maxWidth: "1000px" }}>
    <Typography >
      <p style={{ textAlign: "center",fontSize:"26px" }}>HAVING A YEAR END PARTY OR EVENT?</p>
      <p style={{ textAlign: "center",fontSize:"17px",lineHeight:"60px" }}>We have more than 7 cuisine available each with choices of starters, mains and desserts. Party on!</p>
      <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  variant="body2">
               
              <Button component={Link} to="/cuisine">View cuisine</Button>
         
                </Link>
              </Grid>
            </Grid>
    </Typography>
  </Container>

        <Container style={{marginTop:"40px"}}> 
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <br></br>
                <br></br>
              
                <Typography variant="body2" color="inherit" >
                <h1>EXPERIENCE IT</h1>
                <br></br>
                <p>Relax in our glam art deco style vaulted space, beneath lush French panoramic murals, tropical foliage and signature custom hand crafted pink tiles. Whether you are having birthday cocktails, a quick coffee with clients or a big family get together we have the perfect place for you.</p>
                </Typography>
              </Box>
              <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2">
                
              <Button component={Link} to="/reservation">Reserve a table</Button>
  
                </Link>
              </Grid>
            </Grid>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <br></br>
                
                <img src="https://www.northjersey.com/gcdn/presto/2020/06/11/PNJM/9f194cfa-7d63-4921-965a-74d193c85d31-outdoor_dining_haven_new_outdoor.jpg" alt="GalleryImage3" style={imageStyle} />
                
              </Box>
            </Grid>
         
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://i.pinimg.com/736x/5b/15/19/5b151961cfaed69eb54802ab79c5899f.jpg" alt="GalleryImage2" style={imageStyle} />
                
              </Box>
            </Grid>
          </Grid>
        
        </Container>
      </Box>


        <Box sx={gallerySectionStyle1} id="about" >
        <Container style={{backgroundColor:"darkslategrey"}}>
          
        <Typography >
          <h1 >We've been serving people for a long time</h1>
          <p style={{marginTop:"20px"}}>Dineplan is one  of the world’s best restaurants . </p>
         <p style={{marginTop:"20px"}}>Over 2,000 people's use Dineplan everyday to streamline their reservations, drive traffic through their doors, and save time and money. We are only happy if they are happy.</p>
        </Typography>
          
        <Box sx={{padding:"20px"}}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"red"}}>12,000+</p>
                 <p>
                 RESTAURANT CLIENTS </p>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"red"}}>7+</p>
                  <p>CUISINE</p>
                </Typography>
              </Box>
            </Grid>
        
            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                 <p style={{fontSize:"30px", color:"red"}}>10,000</p>
                 <p>
                 BOOKINGS PER DAY </p>
                </Typography>
              </Box>
            </Grid>
       
            <Grid item xs={12} md={4}>
              <Box >
              
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"red"}}>500,000</p>
                  <p>DINEPLAN GUEST PROFILES</p>
                </Typography>
              </Box>
            </Grid>
      
            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"red"}}>95%</p>
                  <p>CLIENT SATISFACTION SCORE</p>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"red"}}>2,500,000</p>
                  <p>COVERS PER MONTH</p>
                </Typography>  
              </Box>
            </Grid>
          
          </Grid>
        </Container>
      </Box>
        </Container>
      </Box>
      
    </Layout>
  );
};

export default Home;
