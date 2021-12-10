import React from 'react';
import Navbar from './navbar';
import Container from '@mui/material/Container';
import Footer from './footer';
import CustomTheme from '../theme/theme';

const Layout = (props) => (
    
    <CustomTheme >
        <Navbar />
        <Container maxwidth="xl" disableGutters>
            {props.children}
        </Container>
        <Footer />
    </CustomTheme>
    
)

export default Layout;