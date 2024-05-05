import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import banner from "../images/banner.webp";
import "../styles/HomeStyles.css";
import { Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// ... (imports and other code)

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = () => {
      // Add logic for handling the search query (e.g., redirect to search results page)
      console.log(`Searching for: ${searchQuery}`);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
      <Layout>
        <div className="container">
          <div className="home" style={{
            backgroundImage: `url(${banner})`,
          }}>
            <div className="headerContainer">
              <p style={{fontSize:"50px"}}>Search Location</p>
              {/* Add a TextField for search input */}
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '800px' }, // Adjust the width as needed
                  backgroundColor: "white",
                  marginTop: "5px",
                  borderRadius: '50px',
                  padding: '3px'
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Search Location"
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress} // Trigger search on Enter key
                />
              </Box>
              {/* Add a Link to the reservation page */}
              <Button>
                <Link to="/restaurant">Search</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default SearchPage;
  