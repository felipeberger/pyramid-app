import React from 'react';
import Navbar from './navbar';
import Container from '@mui/material/Container';
import Footer from './footer';
import Box from '@mui/material/Box';

const Layout = (props) => (
    <>
    <Navbar>
        <h1>navbar</h1>
    </Navbar>
    <Container maxwidth="xl" disableGutters>
        {props.children}
    </Container>
    <Footer>
        <h1>footer</h1>
    </Footer>
    </>
)

export default Layout;