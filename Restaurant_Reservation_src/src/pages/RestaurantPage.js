import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Layout from './../components/Layout/Layout';

const RestaurantPage = () => {
  // Updated cuisine data with image URLs
  const cuisines = [
    { id: 1, name: 'The Weekly Brewhouse & Kitchen', imageUrl: 'https://b.zmtcdn.com/data/pictures/7/20828407/00d94c51e3df7a6662f20bb3ebf65bce.jpg' },
    { id: 2, name: 'Havana Multicusine Restaurant', imageUrl: 'https://b.zmtcdn.com/data/pictures/2/20447222/7f28a715d9f0ab527524d90066a86835.jpg' },
    { id: 3, name: "The Kenny's Gusto", imageUrl: 'https://www.bestrestaurants.com.au/media/e20h2aey/1.png?width=400&height=300&mode=crop&quality=80' },
    { id: 4, name: 'The French Door', imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/90/c6/99/the-french-door-interior.jpg' },
    { id: 5, name: 'Red Pearl', imageUrl: 'https://b.zmtcdn.com/data/reviews_photos/eda/dda4e8b3562beafb6e20873eab55deda_1468032725.jpg' },
    
    { id: 7, name: 'Meridian Resaturant', imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/13/1a/d6/b0/meridian-panorama-view.jpg' },
   
    { id: 9, name: 'Orchid Restaurant', imageUrl: 'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_522,w_4997,h_2811,r_0,c_crop,q_90,fl_progressive/w_500,f_auto,c_fit/the-orchid-hotel-pune/Boulevard_-_24_Hour_Coffee_Shop_at_The_Orchid_Hotel_Pune,_Restaurants_in_Pune,_Luxury_Hotel_in_Pune' },
    { id: 11, name: 'Tangerine-The World Kitchen', imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/23/8b/2b/43/tangerine-restaurant.jpg' },
    { id: 12, name: 'Hotel AshwaPark', imageUrl: 'https://r1imghtlak.mmtcdn.com/3bae38ae72ce11e7b7fa025f77df004f.jpg' },
    // Add more cuisines as needed
  ];

  return (
    <Layout>
      <Box sx={{marginLeft:"100px" ,marginRight:"100px",marginTop:"100px",marginBottom:"100px" }}>
        {/* Set height to 100vh for full viewport height */}
        <Typography variant="h4" gutterBottom>
          Restaurant's
          <br></br>
        </Typography>
        <Grid container spacing={3}>
          {cuisines.map((cuisine) => (
            <Grid item key={cuisine.id} xs={12} sm={6} md={3}>
              <Card style={{ height: '100%',maxWidth: '300px' }}>
                <NavLink to={"/booking"} style={{ textDecoration: 'none' }}>
                  <img src={cuisine.imageUrl} alt={cuisine.name} style={{ height: '200px', objectFit: 'cover' }} />
                </NavLink>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography >
                    {cuisine.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default RestaurantPage;
