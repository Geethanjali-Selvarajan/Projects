
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
 
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import MovieInfoPage from './Pages/MovieInfoPage';
import Action from './Pages/Action';
import MovieCardTrendingNow from './Pages/MovieCardTrendingNow';
import MovieCardPopular from './Pages/MovieCardPopular';
import MovieCardNewRelease from './Pages/MovieCardNewRelease'
import Contact from './Pages/Contact';
function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
      
      <Route path="/signup" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/" element={<Home/>}/>
     <Route path='/movie' element={<Movie/>} />
     <Route path="/movie-info" element={<MovieInfoPage/>} />
     <Route path="/action" element={<Action/>} />
     <Route path="/moviecardTrend" element={<MovieCardTrendingNow/>}/>
     <Route path="/moviecardPopular" element={<MovieCardPopular/>}/>
     <Route path="/moviecardNew" element={<MovieCardNewRelease/>}/>
     <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
