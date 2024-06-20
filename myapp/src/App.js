import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import backgroundImage from './logo.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DropDownList from './components/DropDownList';
import Home from './home';
import Auctions from './components/auctions';
import Login from './Login';
import Register from './Register';
import All from './AboutUs';
import Feedback from './Feedback';
import Profile from './Profile';
import Winners from './winners';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: '9999',
              }}
            >
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/aboutus" onClick={handleClose}>
                Auctions
              </MenuItem>
              <MenuItem component={Link} to="/profile" onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/all" onClick={handleClose}>
                AboutUs
              </MenuItem>
              <MenuItem component={Link} to="/feedback" onClick={handleClose}>
                Feedback
              </MenuItem>
              <MenuItem component={Link} to="/winners" onClick={handleClose}>
                Winners
              </MenuItem>
            </Menu>
            <Typography variant="h6" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <img src={backgroundImage} style={{ marginRight: '10px', width: '110px' }} alt="Logo" />
              Online Auction
            </Typography>
            <Box>
             
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <Avatar alt="User Avatar" src="/path-to-avatar-image.jpg" />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Auctions />} />
            <Route path="/services" element={<Login />} />
            <Route path="/contact" element={<Register />} />
            <Route path="/all" element={<All />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/DropDownList" element={<DropDownList />} />
            <Route path="/winners" element={<Winners />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
