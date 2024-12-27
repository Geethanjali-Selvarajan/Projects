import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';

import toast from "react-hot-toast"
import { useAuthStore } from '../store/useAuthStore';

const theme = createTheme();

export default function Registration() {
 
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();


  const validateForm = () => { 
    if(!formData.fullName.trim()) return toast.error("Full name is required");
    if(!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;

  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if(success === true) signup(formData);

  }


  return (
    <body className="signuppg">
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <div className="box">
        <Box
          sx={{
            boxShadow:15,
            
            px:4,
            py:4,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent:"left",
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "darkslategrey" }}>
          <RestaurantIcon />
        </Avatar>
         
          <Typography component="h1" variant="h5">
            Get Started
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Full Name"
                  required
                 fullWidth
                  id="Full Name"
                  label="Full Name"
                  autoFocus
                  value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
               
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
                  value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
             
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Conform Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            
            </Grid>
           {/* <NavLink to="/"> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isSigningUp}
            >
            {isSigningUp ? (
                <>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
            {/* </NavLink> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
         
          </form>
        </Box>
       </div>
      </Container>
    </ThemeProvider>
    </body>
  );
}