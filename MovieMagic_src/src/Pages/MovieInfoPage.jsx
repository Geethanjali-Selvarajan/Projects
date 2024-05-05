import React from 'react';
import Layout from '../Components/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Modal, Box, Typography, Button } from '@mui/material';

// Define movie data
const movies = [
  { 
    id: 1,
    src: "https://i.ytimg.com/vi/Rk05XFXhyqE/maxresdefault.jpg", 
    alt: "Slide 1", 
    name: "Badla", 
    description: "When a woman is accused of killing her lover, a renowned lawyer is hired -- but the more they try to untangle the truth, the more convoluted it becomes.", 
    genre: "Thiller", 
    rating: "7.5", 
    cast: ["Amitabh Bachchan", "Taapsee Pannu", "Amrita Singh"],
    ageLimit: "13+",
    language: "Hindi",
    year: 2019
  },
  {
    id: 2,
    src: "https://media.cnn.com/api/v1/images/stellar/prod/240109095636-lift-movie-netflix-kevin-hart.jpg?c=16x9&q=w_850,c_fill",
    alt: "Slide 2",
    name: "Lift",
    description: "A professional thief and his expert crew attempt the ultimate heist: stealing $500 million in gold from a vault on a plane — 40,000 feet in the air.",
    genre: "Action",
    rating: "8.0",
    cast: ["Kevin Hart", "Gugu Mbatha-Raw", "Vincent D'Onofrio"],
    ageLimit: "13+",
    language: "English",
    year: 2024
  },
  {
    id: 3,
    src: "https://assets.mspimages.in/gear/wp-content/uploads/2023/12/Untitled-design-2023-12-19T084927.558.jpg",
    alt: "Slide 3",
    name: "kuiko",
    description: "An ex-teacher's outlook on life shifts when he embarks on a journey to deliver a freezer — enjoying heartfelt moments and quirky encounters on the way.",
    genre: "Comedy",
    rating: "7.8",
    cast: ["Vidharth", "Yogi Babu", "Sri Priyanka"],
    ageLimit: "7+",
    language: "Tamil",
    year: 2023
  },
  {
    id: 4,
    src: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/08/dulquer-salmaan-hanu-raghavapudi-swapna-cinemas-sita-ramams-sensational-run-in-first-weekend-reached-600k-at-us-box-office-001.jpg",
    alt: "Slide 4",
    name: "Sita Ramam",
    description: "An orphaned soldier's life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to her camp in Kashmir, he sends a letter to Sita that will not reach her.",
    genre: "Romance,Drama,Tragedy,Couples",
    rating: "8.5",
    cast: ["Mrunal Thakur", " Dulquer Salmaan", "Rashmika Mandanna"],
    ageLimit: "U",
    language: "Hindi,Tamil,Telugu",
    year: 2022
  },
  // Add more movies as needed
];

// Movie modal component
const MovieModal = ({ open, onClose, movie }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', boxShadow: 24, p: 4, maxWidth: '80%' }}>
      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'black' }}>
        {movie.name}
      </Typography>
      <img src={movie.src} alt={movie.alt} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
      <Typography variant="body1" sx={{ color: 'black' }}>
        Description: {movie.description}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        Genre: {movie.genre}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        Rating: {movie.rating}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        Cast: {movie.cast.join(", ")}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        Language: {movie.language}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        Year: {movie.year}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        U/A: {movie.ageLimit}
      </Typography>
      {/* Add more movie details as needed */}
      <Button onClick={onClose}>Close</Button>
    </Box>
  </Modal>
);

const Home = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Layout>
      <div style={{ width: '90vw', maxWidth: '1600px', margin: '0 auto' }}>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={movie.src} 
                alt={movie.alt} 
                style={{ width: '90vw', maxWidth: '100%', height: 'auto', cursor: 'pointer' }} 
                onClick={() => handleOpenModal(movie)} 
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Render modal if openModal is true */}
      {selectedMovie && (
        <MovieModal open={openModal} onClose={handleCloseModal} movie={selectedMovie} />
      )}
    </Layout>
  );
};

export default Home;
