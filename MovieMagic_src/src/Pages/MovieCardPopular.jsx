import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';
import {  Typography, Modal, Box } from '@mui/material';


const movies = [
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true", alt: "Slide 1", name: "The Road Trick", description: "Road Trick is a gripping thriller that takes viewers on a pulse-pounding journey through the winding roads of suspense and deception. The film follows a group of friends on a road trip, seeking adventure and freedom from the monotony of their everyday lives" },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true", alt: "Slide 2", name: "Wynonna earr", description: "Wynonna Earp is a supernatural Western horror television series based on the comic book series of the same name by Beau Smith. The show follows Wynonna Earp, the great-great-granddaughter of legendary lawman Wyatt Earp, as she battles revenants, demons, and other supernatural entities that inhabit the cursed town of Purgatory" },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true", alt: "Slide 3", name: "Club de cuervos", description: "Club de Cuervos is a Mexican comedy-drama television series created by Gaz Alazraki and Michael Lam. While it's not a movie, it follows the story of the Iglesias siblings, Chava and Isabel, who inherit a football club, the Cuervos, after the death of their father. The series explores the challenges they face as they try to manage the club and navigate their personal lives." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true", alt: "Slide 4", name: "Grey's Anatomy", description: "Grey's Anatomy is a long-running American medical drama television series created by Shonda Rhimes. Premiering in 2005, it follows the lives of surgical interns, residents, and attendings as they navigate the challenges of their personal and professional lives at Seattle Grace Hospital" },
  { src: "https://raw.githubusercontent.com/carlosavilae/Netflix-Clone/master/img/p5.PNG", alt: "Slide 5", name: "Step up 2", description: "The Streets is a 2008 American dance film directed by Jon M. Chu. It is the second installment in the Step Up film series. The movie follows the story of rebellious street dancer Andie (played by Briana Evigan) who joins forces with the top dance crew at her new school, the 410, after being expelled from her previous institution. " },
  { src: "https://raw.githubusercontent.com/carlosavilae/Netflix-Clone/master/img/p6.PNG", alt: "Slide 6", name: "Liquid science", description: "Grey's Anatomy is a long-running American medical drama television series created by Shonda Rhimes. Premiering in 2005, it follows the lives of surgical interns, residents, and attendings as they navigate the challenges of their personal and professional lives at Seattle Grace Hospital (later renamed Grey Sloan Memorial Hospital)." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true", alt: "Slide 7", name: "i3 reason why", description: "I, 3 Reasons Why is a hypothetical show concept where each episode presents three compelling reasons to support a particular argument, idea, or course of action. The format is structured to provide concise and persuasive arguments, making it an effective tool for advocacy, debate, or education." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true", alt: "Slide 8", name: "the staircase", description: "The Staircase is a gripping true crime documentary series that follows the complex case of Michael Peterson, a novelist who was accused of murdering his wife Kathleen Peterson. Directed by Jean-Xavier de Lestrade, the series offers a comprehensive and intimate look into the investigation, trial, and aftermath of the case." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true", alt: "Slide 9", name: "The vitiem war", description: "The Vietnam War was a protracted conflict that took place from 1955 to 1975, primarily between the communist government of North Vietnam, supported by its allies, and the government of South Vietnam, supported by the United States and other anti-communist allies." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true", alt: "Slide 10", name: "The covenant", description: "The Covenant refers to a 2006 supernatural thriller film directed by Renny Harlin. The movie follows the story of four young men with extraordinary powers, known as the Sons of Ipswich who are descendants of powerful witches. As they navigate the challenges of high school life, they must also contend with a malevolent force that threatens their existence." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true", alt: "Slide 11", name: "Marcella", description: "Marcella is known for its dark and moody atmosphere, tense suspense, and intricate plotting. The show keeps viewers on the edge of their seats with its unpredictable twists and turns, as Marcella races against time to solve each case before it's too late." },
  { src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true", alt: "Slide 12", name: "Riverdale", description: "Riverdale is an American teen drama television series based on the characters from Archie Comics. Created by Roberto Aguirre-Sacasa, the show first premiered in 2017 and quickly gained popularity for its blend of mystery, drama, and teen romance." },

 
];

const MovieInfoPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Layout>
     
      <div className="location" id="home">
        <h2 id="home">Popular</h2>
        <div className="box1">
          {movies.map((movie, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/moviecardPopular" state={{ name: movie.name, description: movie.description }}>
                <img src={movie.src} alt={movie.alt} onClick={() => handleOpenModal(movie)} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'rgb(44, 40, 40)', boxShadow: 24, p: 4, maxWidth: '80%' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedMovie.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={selectedMovie.src} alt={selectedMovie.alt} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{selectedMovie.description}</p>
          </Typography>
        </Box>
      </Modal>
    </Layout>
  );
};

export default MovieInfoPage;
