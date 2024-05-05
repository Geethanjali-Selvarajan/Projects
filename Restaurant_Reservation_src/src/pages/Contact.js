import React from "react";
import Layout from "./../components/Layout/Layout";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Typography,
  Container,Grid,Button,TextField

} from "@mui/material";

const Contact = () => {
  const galleryBoxStyle = {
    
    marginBottom: '20px',
    padding: '40px',
    textAlign:'center',
    color:'black',
    fontSize:'30px',
    backgroundColor:'white',
    maxWidth: '100%',
  

  };
  const imageStyle = {
   Height:'25px',
    borderRadius: '10px',
  };
 
  return (
    <Layout>
     
       <Container style={{marginTop:"40px"}}> 
          <Grid container spacing={9}>
            {/* Box 1 */}
            <Grid item xs={12} md={6} >
              <Box sx={galleryBoxStyle}>
             
     
            <Typography variant="h5" color="text.primary" gutterBottom>
            <h2>GET IN TOUCH</h2>
            </Typography>
            <Typography color="text.secondary">
             <p style={{fontSize:"19px"}}>Dineplan 123 Main Street, Coimbatore, India.
             <br></br>
              Email: dineplan@gmail.com
          
              </p>
            </Typography>
            <br></br>
            <Typography>
              <p style={{fontSize:"19px",textAlign:"left"}}>Opening times:<br></br>
Monday – Sunday<br></br>
10.00am – 10.00pm<br></br>
</p>
            </Typography>
            <br></br>
            <Typography>
              <p style={{fontSize:"19px",textAlign:"left"}}>
              Contact <br></br>
031 035 0105/6
              </p>
            </Typography>
          
            <br></br>
            <Typography>
              <p style={{fontSize:"15px",textAlign:"left"}}>
              If you have questions or comments, please get a hold of us in whichever way is most convenient. Ask away.</p>
            </Typography>
          
            <br></br>
            <Typography>
              <p style={{fontSize:"15px",textAlign:"left"}}>
              You can give us a ring on There is no reasonable question that our team can not answer </p>
            </Typography>
           <br></br>
            <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
              </Box>
             
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={6}>
              <Box sx={galleryBoxStyle}>
              <Container maxWidth="md" sx={{ mt: 4 }}>
      
      
      <form >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
      </Container>
        </Box>
            </Grid>
            
          </Grid>
        
        </Container>
      
    </Layout>
  );
};

export default Contact;
