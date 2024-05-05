import {
    Button,
    Container,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import Layout from '../Components/Layout';

const Contact = () => {
 
  return (
    <Layout>
     
       <Container style={{marginTop:"40px"}}> 
        
              
              <Container maxWidth="md" sx={{ mt: 4 }}>
      
      <Typography variant="h4" >Get In Touch</Typography>
      <form >
 
      <TextField
  placeholder="Name"
  variant="outlined"
  fullWidth
  margin="normal"
  required
  color="error"
  InputProps={{
    style: { color: 'white' } // Change input text color to white
  }}
/>

        <TextField
          placeholder="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
          color="error"
          InputProps={{
            style: { color: 'white' } // Change input text color to white
          }}
        />
        <TextField
          placeholder="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
          color="error"
          InputProps={{
            style: { color: 'white' } // Change input text color to white
          }}
        />
        <Button type="submit" variant="contained" color="error" sx={{ mt: 2 }}>
          Submit
        </Button>
    
      </form>
      

      </Container>           
        </Container>
      
    </Layout>
  );
};

export default Contact;
