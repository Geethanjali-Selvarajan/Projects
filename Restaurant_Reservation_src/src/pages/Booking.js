import React from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Grid, Typography,Box,Container } from '@mui/material';
import Layout from './../components/Layout/Layout';

const Booking = () => {
  const [numberOfGuests, setNumberOfGuests] = React.useState('');
  const [selectedSeating, setSelectedSeating] = React.useState('');

  const handleGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleSeatingChange = (event) => {
    setSelectedSeating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your booking submission logic here
    console.log('Booking submitted!');
  };
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
    maxWidth: '100%',
   Height:'25px',
   
  };
  return (
    <Layout>
     
       <Container style={{marginTop:"40px"}}> 
          <Grid container spacing={9}>
            {/* Box 1 */}
            <Grid item xs={12} md={5} style={{marginTop:"110px"}}>
              <Box sx={galleryBoxStyle}>
              <img src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais" alt="GalleryImage3" style={imageStyle} />
             
            <Typography>
              <br></br>
              <p style={{fontSize:"15px"}}> we believe in turning ordinary moments into extraordinary memories. Secure your table and let us create a dining experience to remember."
              <br></br>
              <br></br></p>

              <p>Opening times:<br></br>
Monday – Sunday<br></br>
10.00am – 10.00pm</p>
            </Typography>
              </Box>
            </Grid>
           
           
            {/* Box 2 */}
            <Grid item xs={12} md={7} >
              <Box sx={galleryBoxStyle} >
            
      <Grid container spacing={3} justify="center" alignItems="center" style={{ minHeight: '80vh', padding: '20px' }}>
        <Grid style={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
           Book a table
           <br></br>
           <br></br>
          <hr></hr>
          <br></br>
          
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="seating-label">Seating Preference</InputLabel>
                  <Select
                    labelId="seating-label"
                    id="seating"
                    value={selectedSeating}
                    onChange={handleSeatingChange}
                    label="Seating Preference"
                  >
                    <MenuItem value="Indoor">Indoor Dining</MenuItem>
                    <MenuItem value="Outdoor">Outdoor Dining</MenuItem>
                    <MenuItem value="Terrace">The Terrace</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="guests-label">Number of Guests</InputLabel>
                  <Select
                    labelId="guests-label"
                    id="guests"
                    value={numberOfGuests}
                    onChange={handleGuestsChange}
                    label="Number of Guests"
                  >
                    <MenuItem value={1}>1 person</MenuItem>
                    <MenuItem value={2}>2 people</MenuItem>
                    <MenuItem value={3}>3 people</MenuItem>
                    <MenuItem value={4}>4 people</MenuItem>
                    <MenuItem value={5}>5 people</MenuItem>
                    <MenuItem value={6}>6 people</MenuItem>
                    <MenuItem value={7}>7 people</MenuItem>
                    <MenuItem value={8}>8 people</MenuItem>
                    <MenuItem value={9}>9 people</MenuItem>
                    <MenuItem value={10}>10 people</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Reservation Date"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Reservation Time"
                  type="time"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="inherit">
                  Reserve Table
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
   

  
        </Box>
            </Grid>
            
          </Grid>
        
        </Container>
      
    </Layout>
  );
};

export default Booking;
