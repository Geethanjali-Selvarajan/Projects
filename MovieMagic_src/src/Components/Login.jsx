import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import React, { useState } from 'react'; // Import useRef
import { NavLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  


  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check if email and password are empty
    if (!email || !password) {
      setError("Please fill in both email and password fields.");
      return; // Prevent further execution of the function
    }

    try {
      const response = await axios.post("https://api.example.com/login", {
        email,
        password
      });
      console.log("Login successful:", response.data);
      // Redirect the user or do something else after successful login
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgb(44, 40, 40)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            boxShadow: 15,
            px: 4,
            py: 4,
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "white", color: "black" }}>
            <LiveTvOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Movie Magic
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Clear error message
              }}
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Clear error message
              }}
             
            />
            {error && <Typography variant="body2" color="error">{error}</Typography>}
            <NavLink to='/'>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </NavLink>
            <Grid container>
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
