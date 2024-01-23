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

export default function CustomAppBar() {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
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
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            {/* Menu Items */}
            <MenuItem onClick={handleMenuClose}>Chest</MenuItem>
            <MenuItem onClick={handleMenuClose}>Back</MenuItem>
            <MenuItem onClick={handleMenuClose}>Legs</MenuItem>
            <MenuItem onClick={handleMenuClose}>Arms / Shoulders</MenuItem>
            <MenuItem onClick={handleMenuClose}>Core / Cardio</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

