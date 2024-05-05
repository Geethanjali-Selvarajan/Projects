import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Layout from '../Components/Layout';
import './Home.css';

const MovieItem = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} />
  </div>
);

const Home = () => {
  const [movies, setMovies] = useState([]);
  //const apiKey = "6004fe31b02c79700baac20643ce8ed5"; 
  const query = "";
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
      .then(response => response.json())
      .then(data => {
        // Update the component state with the fetched data
        setMovies(data.movies);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [query]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  
    autoplaySpeed: 3000,
   
  };
  return (
    <Layout>
    <div style={{ width: '90vw', maxWidth: '1600px', margin: '0 auto' }}>
  <Slider {...settings}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src="https://i.ytimg.com/vi/Rk05XFXhyqE/maxresdefault.jpg" alt="Slide 1" style={{ width: '90vw', maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/240109095636-lift-movie-netflix-kevin-hart.jpg?c=16x9&q=w_850,c_fill" alt="Slide 2" style={{ width: '90vw', maxWidth: '100%', height: '690px' }} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src="https://assets.mspimages.in/gear/wp-content/uploads/2023/12/Untitled-design-2023-12-19T084927.558.jpg" alt="Slide 3" style={{ width: '90vw', maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/08/dulquer-salmaan-hanu-raghavapudi-swapna-cinemas-sita-ramams-sensational-run-in-first-weekend-reached-600k-at-us-box-office-001.jpg" alt="Slide 4" style={{ width: '90vw', maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    {/* Add more slides as needed */}
  </Slider>
</div>

      <body>
        <div className='wrapper'>
          <div className="location" id="home">
          <h2 id="home">Trending Now</h2>
          <div class="box1">
          <Link to="/moviecardTrend" state={{ name: "Movie Name", description: "Movie Description" }}>
          <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt="" />
        </Link>
        <Link to="/moviecardTrend" state={{ name: "Movie 2", description: "Description for Movie 2" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt="" />
</Link>
<Link to="/moviecardTrend" state={{ name: "Movie 3", description: "Description for Movie 3" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="" />
</Link>
<Link to="/moviecardTrend" state={{ name: "Movie 4", description: "Description for Movie 4" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="" />
</Link>
<Link to="/moviecardTrend" state={{ name: "Movie 5", description: "Description for Movie 5" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt="" />
</Link>
<Link to="/moviecardTrend" state={{ name: "Movie 6", description: "Description for Movie 6" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt="" />
</Link>

            {/*  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt=""/></a>
  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt=""/></a>   */}     
          </div>
      </div>
      <div className="location" id="home">
          <h2 id="home">Popular</h2>
          <div class="box1">
           {/* <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt=""/></a>
<a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt=""/></a>*/}
<Link to="/moviecardPopular" state={{ name: "Movie 7", description: "Description for Movie 7" }}>
<img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardPopular" state={{ name: "Movie 8", description: "Description for Movie 8" }}>
<img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardPopular" state={{ name: "Movie 9", description: "Description for Movie 9" }}>
<img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardPopular" state={{ name: "Movie 10", description: "Description for Movie 10" }}>
<img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardPopular" state={{ name: "Movie 11", description: "Description for Movie 11" }}>
<img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardPopular" state={{ name: "Movie 12", description: "Description for Movie 12" }}>
<img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt="" />
</Link>

</div>
      </div>
      
      <div>
      <section class="link">
     
      <h1 id="originals" >New Releases</h1>
      <div class="box1">
      <Link to="/moviecardNew" state={{ name: "Movie 1", description: "Description for Movie 1" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 2", description: "Description for Movie 2" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 3", description: "Description for Movie 3" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 4", description: "Description for Movie 4" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 5", description: "Description for Movie 5" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 6", description: "Description for Movie 6" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 7", description: "Description for Movie 7" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 8", description: "Description for Movie 8" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 9", description: "Description for Movie 9" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 10", description: "Description for Movie 10" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 11", description: "Description for Movie 11" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="" />
</Link>

<Link to="/moviecardNew" state={{ name: "Movie 12", description: "Description for Movie 12" }}>
  <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt="" />
</Link> 
      
      </div>
    
    </section>
      </div>
        </div>
      </body>
    </Layout>
  );
};

export default Home;
