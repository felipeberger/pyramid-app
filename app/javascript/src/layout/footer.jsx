import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () => {

    return (

        <Box sx={{width: '100%' }} id="footer" disableGutters >
            <BottomNavigation showLabels >
                <BottomNavigationAction
                    label='Github' 
                    icon={<GitHubIcon sx={{height: '30px', width:'30px'}} />} 
                    href="https://github.com/felipeberger" 
                    target="_blank" />
                <BottomNavigationAction 
                    label='LinkedIn' 
                    icon={<LinkedInIcon sx={{height: '30px', width:'30px'}} />} 
                    href="https://www.linkedin.com/in/felipe-berger" 
                    target="_blank" />
                <BottomNavigationAction 
                    label='Email' 
                    icon={<EmailIcon sx={{height: '30px', width:'30px'}} />} href="mailto:felipecberger@gmail.com" target="_blank" />
            </BottomNavigation>
        </Box>
    )
}

export default Footer