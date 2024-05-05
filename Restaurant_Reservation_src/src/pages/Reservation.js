import React from "react";
import Layout from "./../components/Layout/Layout";
import Banner from "../images/banner.webp";
import { Link,Button,Box,Select,MenuItem,TextField,Container,Grid,Typography,InputLabel,FormControl} from '@mui/material';
import { NavLink } from "react-router-dom";
const Reservation = () =>{

  const [numberOfGuests, setNumberOfGuests] = React.useState('');
  
    const handleGuestsChange = (event) => {
      setNumberOfGuests(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add your booking submission logic here
      console.log('Booking submitted!');
    };
  const galleryBoxStyle = {
    
   
    padding: '20px',
    textAlign:'center',
    color:'black',
    fontSize:'30px',
   
   color:"black",
  backgroundColor:"white",

  };
  const imageStyle = {
    maxWidth: '100%',
   Height:'25px',
    borderRadius: '10px',
  };
  const gallerySectionStyle1 = {
    
   marginTop:'70px',
    color:'black',
    textAlign: 'center',
   marginBottom:'70px',
   maxWidth: "850px"
    
    
  };
    return(
        <Layout>
        <div className="container">
          <div className="home" style={{ backgroundImage: `url(${Banner})`,
          height: "70vh",
  display:" flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize:" cover" }}>
            <div className="headerContainer">
              
             <h1> 
              <br></br>MODERN DINER</h1>
                <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                backgroundColor: "white",
                marginTop: "5px",
                borderRadius: '50px',
                padding: '10px'
              }}
              noValidate
              autoComplete="off"
            >
               <FormControl fullWidth variant="outlined">
                  <InputLabel id="guests-label">Number of Guests</InputLabel>
                  <Select
                    labelId="guests-label"
                    id="guests"
                    value={numberOfGuests}
                    onChange={handleGuestsChange}
                    label="Number of Guests"
                    color="success"
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
            
              <TextField
                label="Restaurant"
                variant="filled"
                color="success"
                sx={{ marginLeft: '10px' }}
              />
              <TextField variant="filled" color="success" type="date"  sx={{ marginLeft: '10px' }} />
              <TextField variant="filled" color="success" type="time"  sx={{ marginLeft: '10px' }} />
            </Box>
              <Button>
              <NavLink component={Link} to="/booking">Book now
            </NavLink>
              </Button>
 </div>
 </div>
 </div>
 
     
     <Container style={{marginTop:"10px"}}> 
        <Grid container spacing={9}>
          
          {/* Box 1 */}
          <Grid item xs={12} md={6} sx={{marginTop:"90px"}}>
            <Box sx={galleryBoxStyle}>
           <Typography>
            <p style={{fontSize:"27px"}}>
              INDOOR DINING
            </p>
            <br></br>
            <p style={{fontSize:"15px"}}>
            Luxury finishes and a dazzling bar, intimate seating for a romantic date (you may need a bib for those ribs) or a big table for your kids and their friends
            </p>
           </Typography>
            </Box>
          </Grid>

          {/* Box 2 */}
          <Grid item xs={12} md={6}>
            <Box sx={galleryBoxStyle}>
                <br></br>
                <img src="https://media.architecturaldigest.com/photos/60e33d2f97f7b381826d563d/master/w_1600%2Cc_limit/Luties-CPE_Dine_Luties_Interiors_2020_0399%25201.jpg" alt="GalleryImage3" style={imageStyle} />
              </Box>
          </Grid>
        </Grid>
        
      </Container>


     <Container > 
        <Grid container spacing={9}>

          {/* Box 2 */}
          <Grid item xs={12} md={6}>
            <Box sx={galleryBoxStyle}>
                <br></br>
                <img src="https://media.gettyimages.com/id/1273557778/zh/%E7%85%A7%E7%89%87/%E5%B8%95%E8%92%82%E5%A5%A7%E9%A4%90%E5%BB%B3.jpg?s=612x612&w=0&k=20&c=98WouJ_dyvxiz_I5uCd9DdXTZ_TzN6bfXTN0Luwikro=" alt="GalleryImage3" style={imageStyle} />
              </Box>
          </Grid>
          {/* Box 1 */}
          <Grid item xs={12} md={6} sx={{marginTop:"90px"}}>
            <Box sx={galleryBoxStyle}>
           <Typography>
            <p style={{fontSize:"27px"}}>
            THE TERRACE
            </p>
            <br></br>
            <p style={{fontSize:"15px"}}>
            A relaxed space for quieter, slow weekend lunches. Cool in summer and cosy in winter. No pressure, just great food, great music and awesome service.  </p>
           </Typography>
            </Box>
          </Grid>

          
        </Grid>
      </Container>
      <Container style={{marginTop:"10px"}}> 
        <Grid container spacing={9}>
          
          {/* Box 1 */}
          <Grid item xs={12} md={6} sx={{marginTop:"90px"}}>
            <Box sx={galleryBoxStyle}>
           <Typography>
            <p style={{fontSize:"27px"}}>
              PARTY HALL
            </p>
            <br></br>
            <p style={{fontSize:"15px"}}>
            A party hall is a venue specifically designed for hosting social events and celebrations. It provides a spacious and adaptable setting for various occasions such as weddings, birthdays, and corporate gatherings. </p>
           </Typography>
            </Box>
          </Grid>

          {/* Box 2 */}
          <Grid item xs={12} md={6}>
            <Box sx={galleryBoxStyle}>
                <br></br>
                <img src="https://files.yappe.in/place/full/the-currynight-restaurant-and-banquet-partyhall-4183382.webp" alt="GalleryImage3" style={imageStyle} />
              </Box>
          </Grid>
        </Grid>
        
      </Container>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Box sx={gallerySectionStyle1} id="about" >
        <Container>
          
        <Typography >
        <p style={{fontSize:"32px"}}>
        RESERVE BY PHONE
            </p>
         
          <p style={{marginTop:"20px"}}>We take reservations for brunch, lunch and dinner. To make a reservation, please call us on one of the following numbers 031 035 0105/6 or 064 914 6697 between 10.00am–10.00pm, Monday to Sunday. </p>
         <p style={{marginTop:"20px"}}>For private events, functions and venue hire give us a ring or drop us an email and we will help you make it a memorable occasion.</p>
        </Typography>
          
            </Container>
            </Box>
            </Box>
  
  </Layout>
    );
};
export default Reservation;