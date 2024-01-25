import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";


export default function CustomAppBar() {
  const [menuAnchorElement, setMenuAnchorElement] = React.useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>

          {/* Menu Component */}
          <Menu
            anchorEl={menuAnchorElement}
            open={Boolean(menuAnchorElement)}
            onClose={handleMenuClose}
          >
            {/* Menu Items */}
            <MenuItem component={Link} to={'/'}>Home</MenuItem>
            <MenuItem component={Link} to={'/chest'}>Chest</MenuItem>
            <MenuItem component={Link} to={'/back'}>Back</MenuItem>
            <MenuItem component={Link} to={'/legs'}>Legs</MenuItem>
            <MenuItem component={Link} to={'/arms'}>Arms</MenuItem>
            <MenuItem component={Link} to={'/shoulders'}>Shoulders</MenuItem>
            <MenuItem component={Link} to={'/core-cardio'}>Core / Cardio</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

