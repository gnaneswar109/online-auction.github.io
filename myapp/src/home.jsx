import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Home() {
  const buttonStyle = { background: 'blue', color: 'white', borderRadius: '5px', padding: '10px 20px' }; // Custom style for the button

  return (
    <Container className="home-container">
      <div className="body-background"> {/* Apply background styles */}
        <Typography variant="h4" component="h8" style={{ marginTop: '20px' }}>
          TASTE THE SPICE OF BIDDING
        </Typography>
        

        {/* "Login" and "Sign Up" buttons with a button-like appearance */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="calc( 700px)"
        >
          <Link to="/services" style={{ textDecoration: 'none', margin: '5px' }}>
            <Button style={buttonStyle}>
              Login
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', margin: '10px' }}>
            <Button style={buttonStyle}>
              Sign Up
            </Button>
          </Link>
        </Box>
      </div>
    </Container>
  );
}

export default Home;
