import React, {useState} from 'react';
import { AppBar } from '@mui/material';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DetailsIcon from '@mui/icons-material/Details';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const menuLinks = ['Stories', 'Settings', 'Log-out']

    return (
        <AppBar position="static">
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Box sx={{fleGrow:0, width:'100%'}}>
                        <IconButton href='/'>
                            <DetailsIcon sx={{width:'50px', height:'50px', color:'white'}}/>
                        </IconButton>

                    </Box>
                    <Box 
                        sx={{ flexGrow: 0, 
                            display: { xs: 'flex', md: 'none' }, 
                            flexDirection: 'row-reverse',
                            width:'100%' }}
                    >
                        <IconButton onClick={handleOpenNavMenu}>
                            <MenuOpenIcon sx={{color:'white', width:'40px', height:'40px'}} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-minimized"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {menuLinks.map( (menuLink) => (
                                <MenuItem key={menuLink}>
                                    {menuLink}
                                </MenuItem>    
                            ))}
                        </Menu>
                    </Box>
                    <Box 
                        sx={{ flexGrow: 0, 
                            display: { xs: 'none', md: 'flex' }, 
                            flexDirection: 'row-reverse',
                            width:'100%' }}
                    >
                        <Breadcrumbs aria-label="breadcrumb" color="white" >
                            {menuLinks.map( (menuLink) => (
                                <Link underline="hover" color="inherit" href="/" key={menuLink}><h3>{menuLink}</h3></Link>    
                            ))}
                        </Breadcrumbs>                        
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;