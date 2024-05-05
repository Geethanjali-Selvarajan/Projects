import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";



const theme = createTheme();

export default function Registration() {
 

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
          <Box
            component="form"
            noValidate
            
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
           <NavLink to="/"><Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            </NavLink>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       </div>
      </Container>
    </ThemeProvider>
    </body>
  );
}