import { Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../Components/Layout';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const trendingMovies = [
    { src: "https://preview.redd.it/some-really-great-tamil-movie-posters-drop-what-yall-think-v0-ch1d4xizu7xa1.jpg?width=443&format=pjpg&auto=webp&s=fe2b694dc9566d10f40e905ea89fd40396ebe530", alt: "Slide 1", name: "Maanaadu" },
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/29daa4148323087.62d3bff6dc8cc.jpg", alt: "Slide 2", name: "Maaveeran" },
    { src: "https://e1.pxfuel.com/desktop-wallpaper/685/842/desktop-wallpaper-20-creative-indian-movie-poster-designs-by-prathool-i-tamil-movie.jpg", alt: "Slide 3", name: "Imaika Nodigal" },
    { src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sita-ramam-et00329656-30-05-2022-06-32-41.jpg", alt: "Slide 4", name: "Sita Ram" },
    { src: "https://m.media-amazon.com/images/M/MV5BMGQyYWE0NzQtNTdlNC00MzFhLWFkYjQtMzZkMGI4MzQ2NWE0XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg", alt: "Slide 5", name: "Kaala" },
    { src: "https://preview.redd.it/some-really-great-tamil-movie-posters-drop-what-yall-think-v0-uapoavizu7xa1.jpg?width=465&format=pjpg&auto=webp&s=e2848bbecaa27bfe1c8a004d281d6ccf8c7edd0a", alt: "Slide 6", name: "Kabali" },
    { src: "https://moviegalleri.net/wp-content/uploads/2023/01/Rio-Raj-Bhavya-Trikha-in-JOE-Movie-Poster.jpg", alt: "Slide 2", name: "Joe" },
    { src: "https://assets.voxcinemas.com/posters/P_HO00006538.jpg", alt: "Slide 2", name: "June" },
    { src: "https://1847884116.rsc.cdn77.org/telugu/home/premalu-twitter-review.jpg", alt: "Slide 2", name: "Premalu" },
    { src: "https://wallpapercave.com/wp/wp8751605.jpg", alt: "Slide 2", name: "Teddy" }, 
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/66396629323171.55edda9490afb.jpg", alt: "Slide 2", name: "Premam" },
    { src: "https://i0.wp.com/moviegalleri.net/wp-content/uploads/2019/12/Vijay-Master-Movie-First-Look-Poster-HD.jpg?ssl=1", alt: "Slide 2", name: "Master" },
    { src: "https://tharaiticketu.files.wordpress.com/2014/08/anjaan-first-look-posters04.jpg", alt: "Slide 2", name: "Anjaan" },
    { src: "https://i.pinimg.com/564x/ce/0d/c3/ce0dc3e3be107f65b259968469b9c4a7.jpg", alt: "Slide 2", name: "Yennai Arindhal" },
    { src: "https://i.pinimg.com/564x/66/6d/5d/666d5d58bf53aaf37de5c22c35571680.jpg", alt: "Slide 2", name: "Spider" },
    { src: "https://images.moviebuff.com/6ab7421e-e347-4ee2-a944-948b8efbe0ae?w=500", alt: "Slide 2", name: "Doctor" },
    { src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tg76zywLA9_J6zRtpolBfw@2x.jpeg", alt: "Slide 2", name: "96" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT5dQ_yV6G4PkHAvej_lkgQMbYhSeEp9TXHhxHMU8QmR3ilyTsYBDcHFWuuZcBS7GN1k8q8JajTXG6dC37Di-HdCgDjzHZAEl6OmWTd9xdSTijoCCE8lR64q9ZbaR68wWxOZodNbbLjUJtWlCVYcYfrf1T-vBRfSPQAi6Gty6GSKNHcykedx-EhCV6/s16000/pathu-thala-tamil-movie-posters%20(1).jpg=w0-h0-p-k-no-nu", alt: "Slide 2", name: "Pathu Thala" },
    // Add more movies as needed
  ];

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6004fe31b02c79700baac20643ce8ed5&query=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };
  
  return (
    <Layout>
      <div>
      <TextField
  placeholder="Search Movies"
  variant="outlined"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }}
  fullWidth
  style={{ marginBottom: '20px', backgroundColor: 'white' }}
/>
        <div className="location" id="home">
          <div className="box1">
            {searchResults.map((movie, index) => (
              <MovieItem
                key={index}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                name={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
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
