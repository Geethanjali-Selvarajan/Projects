import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import RestaurantIcon from '@mui/icons-material/Restaurant';
import Avatar from '@mui/material/Avatar';

export default function Login() {
 
  

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
        <Box component="form" >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
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
          />
          
         <NavLink to="/"><Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          </NavLink> 
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
        </Box>
      </Box>
   
    </Container>
    </div>
    </body>
  );
}