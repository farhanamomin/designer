import React from 'react'

    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
   import Carousel from './compoents/Carousel'
   import Division from './compoents/Division';
   import { MenuItem, Tooltip } from '@mui/material';
import Footer from './compoents/Footer';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
   

function Appbar() {
  return (
    <div>
    
    
      
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Designer Jewellery
              </Typography>
            
     
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>
     <MenuItem></MenuItem>

      <input type="text" placeholder="Search.." style={{
        width: 300 
      }}  name="search"  />
      <SearchIcon></SearchIcon>
             
     
   
             
            </Toolbar>
           
            
          </AppBar>
         
        
        </Box>
        
        
        <Carousel/>
        <Division/>
        <Footer/>
        
    </div>
    
  )
}

export default Appbar