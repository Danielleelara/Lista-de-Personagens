import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Filter from '../Filter/Filter';
import './DenseAppBar.css'
import Capslock from './CapsLock';

function DenseAppBar({personagens, onFilterChange, onFilterSpecie}) {
  return (
    <Box sx={{ flexGrow: 1 }} className="box-container">
      <div className="app-bar-container">
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Personagens
            <Filter className="campoFilter" personagens={personagens} onFilterChange={onFilterChange} onFilterSpecie={onFilterSpecie}/>
             <Capslock/> 
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    </Box>

  );
}
export default DenseAppBar;
