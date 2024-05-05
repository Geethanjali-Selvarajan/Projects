import React from 'react';
import Layout from '../Components/Layout';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const MovieItem = ({ src, alt, name }) => (
  <Card sx={{ maxWidth: 400, height: 270, backgroundColor: '#424242', color: '#ffffff' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={src}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Movie = () => {
  const trendingMovies = [
    { src: "https://media.cnn.com/api/v1/images/stellar/prod/240112121354-01-lift-movie-netflix.jpg?q=w_1110,c_fill/f_webp", alt: "Slide 1", name: "Lift" },
    { src: "https://images.thedirect.com/media/article_full/brie-larson-fast-and-furious.jpg", alt: "Slide 2", name: "Fast and furious" },
    { src: "https://moviegalleri.net/wp-content/gallery/sultan-movie-posters/thumbs/thumbs_Actor-Karthi-Sultan-Movie-Posters.jpg", alt: "Slide 3", name: "Sultan" },
    { src: "https://bollywoodmovieposters.com/wp-content/uploads/2023/04/pushpa-the-rise-poster-telugu-film-768x1078.jpg", alt: "Slide 4", name: "Pushpha" },
    { src: "https://img.etimg.com/thumb/msid-90500113,width-300,height-225,imgsize-115038,resizemode-75/rrr-box-office-collection.jpg", alt: "Slide 5", name: "RRR" },
    { src: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/01/hindi-dubbing-rights-of-tamil-action-entertainer-warriorr-sold-for-rs-16-crore-001.jpg", alt: "Slide 6", name: "The Warrior" },
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b4a1ba87123937.5daeb6af5f27c.jpg", alt: "Slide 2", name: "Kaithi" },
    { src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Action_Tamil_Film.jpg", alt: "Slide 2", name: "Action" },
    { src: "https://telugucinema.com/wp-content/uploads/cwv-webp-images/2022/04/KGF2.jpeg.webp", alt: "Slide 2", name: "KGF" },
   { src: "https://i.pinimg.com/474x/a3/55/83/a3558350a8f77d97d7ead34811cc1265.jpg", alt: "Slide 2", name: "Soorarai Potru" }, 
    { src: "https://i.pinimg.com/474x/36/4b/05/364b0525ba07be02e2eebdfda23bca4a.jpg", alt: "Slide 2", name: "Darbar" },
    { src: "https://i.pinimg.com/474x/49/97/22/4997221b8bfbe445f61157fe5d4ea8de.jpg", alt: "Slide 2", name: "Komban" },
    { src: "https://i.pinimg.com/474x/23/9d/37/239d374aba16abd071fd3b982dda78da.jpg", alt: "Slide 2", name: "Aarambam" },
    { src: "https://i.pinimg.com/736x/d2/2c/da/d22cda3cb30380dafbd1d1a2647bb4d5.jpg", alt: "Slide 2", name: "Siren" },
    { src: "https://i.pinimg.com/736x/49/af/49/49af498d51dcf4db3c659f009c98c187.jpg", alt: "Slide 2", name: "Rebel" },
    { src: "https://i.pinimg.com/736x/a2/05/5b/a2055b30fbb7a1488176794803bf32b1.jpg", alt: "Slide 2", name: "Seeru" },
    { src: "https://i.pinimg.com/564x/06/09/d8/0609d881f87b1588134dc121c13ea22e.jpg", alt: "Slide 2", name: "Ratsasan" },
    { src: "https://i.pinimg.com/564x/85/f4/60/85f460cba55d5524ffbc8a3f6030a8ab.jpg", alt: "Slide 2", name: "Ghilli" },
    
    

    // Add more movies as needed
  ];

  return (
    <Layout>
      <div className="location" id="home">
        <div className="box1">
          {trendingMovies.map((movie, index) => (
            <MovieItem
              key={index}
              src={movie.src}
              alt={movie.alt}
              name={movie.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Movie;


