import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Layout from './../components/Layout/Layout';

const Cuisine = () => {
 
  const cuisines = [
    { id: 1, name: 'Italian', description: 'Delicious Italian dishes', imageUrl: 'https://www.foodrepublic.com/img/gallery/100-italian-fooddrink-words-and-phrases/l-intro-1684783348.jpg' },
    { id: 2, name: 'Japanese', description: 'Authentic Japanese cuisine', imageUrl: 'https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg' },
    { id: 3, name: 'Mexican', description: 'Spicy and flavorful Mexican food', imageUrl: 'https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg' },
    { id: 4, name: 'Korean', description: 'Savory Korean dishes', imageUrl: 'https://images.yummy.ph/yummy/uploads/2022/04/koreanfoodramyunwithtteokbokki.jpg' },
    { id: 5, name: 'North Indian', description: 'Rich North Indian delicacies', imageUrl: 'https://cdn.vox-cdn.com/thumbor/JJirw6wf5ku6VWp_4Vu9WNtl_jM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg' },
    { id: 6, name: 'South Indian', description: 'South Indian culinary delights', imageUrl: 'https://gumlet.assettype.com/homegrown%2Fimport%2Fbook%2Fkuhwlbayxs-1533040300.jpg?auto=format%2Ccompress&fit=max&w=700&dpr=1.3' },
    { id: 7, name: 'Thai', description: 'Exquisite Thai cuisine', imageUrl: 'https://www.restaurant-in-pattaya.com/mv/media/Thai-Food-834x487.jpg' },
    { id: 8, name: 'French', description: 'Elegant French dishes', imageUrl: 'https://images.assetsdelivery.com/compings_v2/funandrejss/funandrejss1909/funandrejss190900102.jpg' },
    { id: 9, name: 'Vegan', description: 'Healthy and plant-based options', imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png' },
   
    { id: 10, name: 'Seafood', description: 'Delicious seafood options', imageUrl: 'https://c.ndtvimg.com/2021-02/9e8j71q_grilled-fish_625x300_10_February_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
   
  ];

  return (
    <Layout>
      <Box sx={{marginLeft:"100px" ,marginRight:"100px",marginTop:"100px",marginBottom:"100px" }}>
     
        <Typography variant="h4" gutterBottom>
          Explore Cuisines
          <br></br>
        </Typography>
        <Grid container spacing={3}>
          {cuisines.map((cuisine) => (
            <Grid item key={cuisine.id} xs={12} sm={6} md={3}>
              <Card style={{ height: '100%',maxWidth: '300px' }}>
                <NavLink to={"/searchpage"} style={{ textDecoration: 'none' }}>
                  <img src={cuisine.imageUrl} alt={cuisine.name} style={{ height: '200px', objectFit: 'cover' }} />
                </NavLink>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {cuisine.name}
                  </Typography>
                  <Typography>{cuisine.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Cuisine;
