import React, {useState, useEffect} from 'react';
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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { logoutUser, checkUser } from '../authenticate/magic';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)    
    const [loggedIn, setLoggedIn] = useState('')
  
    useEffect( () => {
        if(!localStorage.getItem('storedUserEmail')) {    
          checkUser( (metadata) => {
            if (metadata.isLoggedIn) {
                localStorage.setItem('storedUserEmail', metadata.email)
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
          })
        } else {
          setLoggedIn(true)
        }
      }, [])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleUserLogOut = async () => {
        localStorage.removeItem('storedUserEmail')
        setLoggedIn(false)
        await logoutUser()
        window.location = '/home'
    }
    
    const loggedInMenuLinks = [{title:'Storyboards', link: '/home'}, {title:'Explanation', link: '/explanation'}, {title:'Log-out',link:'/'}]

    const loggedOutMenuLinks = [{title:'Storyboards', link: '/home'}, {title:'Explanation', link: '/explanation'}, {title:'Log-in',link:'/authenticate'}] 

    const menuLinks = loggedIn? loggedInMenuLinks : loggedOutMenuLinks 

    const createMenuLinks = (minimizedMenuBool) => {

        return menuLinks.map( (menuLink) => {
            if (minimizedMenuBool) {
                return menuLink.title === 'Log-out'? 
                    <MenuItem key={menuLink.title}>
                        <Button underline="hover" color="inherit" onClick={handleUserLogOut}><Typography variant={minimizedMenuBool? 'string' : 'h6'}>{menuLink.title}</Typography></Button>
                    </MenuItem>
                    :
                    <MenuItem key={menuLink.title}>
                        <Button underline="hover" color="inherit" href={menuLink.link} key={menuLink.title}><Typography variant={minimizedMenuBool? 'string' : 'h6'}>{menuLink.title}</Typography></Button>    
                    </MenuItem>
            }

            if (!minimizedMenuBool) {
                return menuLink.title === 'Log-out'? 
                    <Button underline="hover" color="inherit" key={menuLink.title} onClick={handleUserLogOut}><Typography variant={minimizedMenuBool? 'string' : 'h6'}>{menuLink.title}</Typography></Button>
                    :
                    <Button underline="hover" color="inherit" href={menuLink.link} key={menuLink.title}><Typography variant={minimizedMenuBool? 'string' : 'h6'}>{menuLink.title}</Typography></Button>
            }

        })
    }

    return (
        <AppBar position="static" >
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Box sx={{flexGrow:0, width:'100%'}}>
                        <IconButton href='/home'>
                            <DetailsIcon sx={{width:'50px', height:'50px', color:'white'}}/>
                        </IconButton>

                    </Box>
                    <Box 
                        sx={{ flexGrow: 0, 
                            display: { xs: 'flex', lg: 'none' }, 
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
                            {createMenuLinks(true)}
                        </Menu>
                    </Box>
                    <Box 
                        sx={{ flexGrow: 0, 
                            display: { xs: 'none', lg: 'flex' }, 
                            flexDirection: 'row-reverse',
                            width:'100%' }}
                    >
                        <Breadcrumbs aria-label="breadcrumb" color="white" >
                            {createMenuLinks(false)}
                        </Breadcrumbs>                        
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;