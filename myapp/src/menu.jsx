import React, { useState } from 'react';
import { Button, Popover,  List, ListItem, ListItemText } from '@mui/material';

function MenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        
      <Button variant="outlined" onClick={handleClick}>
        Menu
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

export default MenuButton;
