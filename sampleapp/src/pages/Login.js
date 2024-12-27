import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from 'react';
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthStore} from "../store/useAuthStore"

export default function Login() {

  const[showPassword,setShowPassword] = useState(false);
  const[formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);

  };
  

  return (
    <body className="loginpg">
      <div>
    <Container component="main" maxWidth="xs" >
    
       <Box
        sx={{  
          boxShadow:15,
          
          px:4,
          py:4,
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent:"left",
          backgroundColor:" white",

        }}
      ><Avatar sx={{ m: 1, bgcolor: "darkslategrey" }}>
      <RestaurantIcon />
    </Avatar>
        <Typography component="h1" variant="h5">
        Restaurant Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            
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
            value={formData.password}
             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoggingIn}
          >
             {isLoggingIn ? (
                <>
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
          </Button>
        
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        
        </form>
      </Box>
   
    </Container>
    </div>
    </body>
  );
}