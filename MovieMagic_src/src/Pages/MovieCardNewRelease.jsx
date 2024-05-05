import { Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';


const movies = [
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true",
      alt: "Slide 1",
      name: "Cooking on high",
      description: "Cooking on High is a cannabis cooking competition show that premiered on Netflix in 2018. The series features a lineup of professional chefs who compete against each other to create gourmet dishes infused with cannabis. Hosted by comedian Josh Leyva, each episode of Cooking on High showcases two chefs going head-to-head in a culinary showdown, with the goal of impressing a panel of celebrity judges."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true",
      alt: "Slide 2",
      name: "Queer eye",
      description: "Queer Eye is a popular American reality television series that first premiered in 2003. The show was later rebooted by Netflix in 2018 with a new Fab Five and has since gained widespread acclaim for its heartwarming stories, positive messages, and infectious charm."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true",
      alt: "Slide 3",
      name: "Jessica Jones",
      description: "Jessica Jones is a Marvel Comics-based television series that premiered on Netflix in 2015. It is part of the Marvel Cinematic Universe (MCU) and is produced by Marvel Television in association with ABC Studios and Tall Girls Productions. The show is based on the Marvel Comics character Jessica Jones, created by writer Brian Michael Bendis and artist Michael Gaydos."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true",
      alt: "Slide 4",
      name: "Brain of fire",
      description: "Brain on Fire is a biographical drama film based on the memoir Brain on Fire: My Month of Madness by Susannah Cahalan. The film was released in 2016 and directed by Gerard Barrett."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true",
      alt: "Slide 5",
      name: "i3 reason why",
      description: "I, 3 Reasons Why is a hypothetical show concept where each episode presents three compelling reasons to support a particular argument, idea, or course of action. The format is structured to provide concise and persuasive arguments, making it an effective tool for advocacy, debate, or education."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true",
      alt: "Slide 5",
      name: "The Staircase",
      description: "The Staircase is a gripping true crime documentary series that follows the complex case of Michael Peterson, a novelist who was accused of murdering his wife Kathleen Peterson. Directed by Jean-Xavier de Lestrade, the series offers a comprehensive and intimate look into the investigation, trial, and aftermath of the case"
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true",
      alt: "Slide 6",
      name: "The vietnam war",
      description: "The Vietnam War was a protracted conflict that took place from 1955 to 1975, primarily between the communist government of North Vietnam, supported by its allies, and the government of South Vietnam, supported by the United States and other anti-communist allies."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true",
      alt: "Slide 7",
      name: "The covenant",
      description: "The Covenant refers to a 2006 supernatural thriller film directed by Renny Harlin. The movie follows the story of four young men with extraordinary powers, known as the Sons of Ipswich  who are descendants of powerful witches. As they navigate the challenges of high school life, they must also contend with a malevolent force that threatens their existence."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true",
      alt: "Slide 8",
      name: "Arrested Development",
      description: "Arrested Development is an American television sitcom created by Mitchell Hurwitz. The show first aired in 2003 on Fox and gained a cult following for its unique blend of humor, intricate storytelling, and quirky characters."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true",
      alt: "Slide 9",
      name: "Club Cuervos",
      description: "Club de Cuervos is a Mexican comedy-drama television series created by Gaz Alazraki and Michael Lam. While it's not a movie, it follows the story of the Iglesias siblings, Chava and Isabel, who inherit a football club, the Cuervos, after the death of their father. The series explores the challenges they face as they try to manage the club and navigate their personal lives."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
      alt: "Slide 10",
      name: "Grey Anatomy",
      description: "Grey's Anatomy is a long-running American medical drama television series created by Shonda Rhimes. Premiering in 2005, it follows the lives of surgical interns, residents, and attendings as they navigate the challenges of their personal and professional lives at Seattle Grace Hospital (later renamed Grey Sloan Memorial Hospital)."
    },
    {
      src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
      alt: "Slide 11",
      name: "Step up 2",
      description: "Step Up 2: The Streets is known for its energetic and mesmerizing dance performances. From jaw-dropping street battles to emotionally charged choreography, the film showcases a variety of dance styles, including hip-hop, breakdancing, and contemporary. Whether you're a fan of dance or simply appreciate impressive visuals, the movie offers plenty of thrilling moments to enjoy."
    },
   
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
        <h2 id="home">New Releases</h2>
        <div className="box1">
          {movies.map((movie, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/moviecardNew" state={{ name: movie.name, description: movie.description }}>
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
