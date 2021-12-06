import React from 'react';
import Navbar from './navbar'
import Container from '@mui/material/Container';


const Layout = (props) => (
    <>
    <Navbar>
        <h1>navbar</h1>
    </Navbar>
    <Container maxwidth="xl">
        {props.children}
    </Container>    
    <h1>footer</h1>
    </>
)

export default Layout;