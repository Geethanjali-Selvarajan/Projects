import { useState } from "react"; // Import useState
import { Navigate } from "react-router-dom"; // Import Redirect
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";

export default function Registration() {
  // Add state to track if registration is successful and should redirect
  const [redirect, setRedirect] = useState(false);

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // Assuming registration logic is successful, set redirect to true
    setRedirect(true);
  };

  // If redirect is true, redirect to the home page
  if (redirect) {
    return <Navigate to="/" />;
  }

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
        <div className="box">
          <Box
            sx={{
              boxShadow: 15,
              px: 4,
              py: 4,
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "left",
              backgroundColor: "rgba(255, 255, 255, 0.5)", 
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "white", color: "black" }}>
              <LiveTvOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color={"black"}>
              Get Started
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={!isEmailValid}
                    helperText={!isEmailValid && "Invalid email address"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    InputProps={{ minLength: 6 }} // Minimum length for password
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    InputProps={{ minLength: 8 }} // Minimum length for password
                  />
                </Grid>
              </Grid>
              <NavLink to='/login'>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button></NavLink>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink to="/">
                    {"Already have an account? Sign in"}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
    </Box>
  );
}
