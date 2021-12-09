import React from 'react';
import Navbar from './navbar';
import Container from '@mui/material/Container';
import Footer from './footer';

const Layout = (props) => (
    <>
    <Navbar />
    <Container maxwidth="xl" disableGutters>
        {props.children}
    </Container>
    <Footer />
    </>
)

export default Layout;