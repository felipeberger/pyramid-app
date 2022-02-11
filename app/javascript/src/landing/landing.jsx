import React, {useEffect, useState} from 'react';
import {Grid, Box, Typography, Button} from '@mui/material';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import CustomTheme from '../theme/theme';
import LandingImage from './landingImage.png'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export default function Landing () {

    return (
        <>
            <CustomTheme>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    <Box
                        backgroundColor='#064635'
                        height='67vh'
                        width='100%'
                        position='absolute'
                        marginTop='-10px'
                    >
                    </Box>
                    <Box 
                        width='100%'
                        zIndex={5}
                        pb={1}
                    >
                        <Navbar />
                    </Box>
                    <Grid
                        container
                        zIndex={5}
                        height='50vh'
                        alignItems='center'
                        direction='row'
                        maxWidth='xl'
                        >
                        <Grid item xs={0} lg={1}></Grid>
                        <Grid
                            item
                            xs={12}
                            lg={4}
                            px={{xs: 5, lg: 0}}
                        >
                            <Typography variant='h3' maxWidth='xl' color='white' pb={2}>
                                Speed up your team's construction of solid consulting storyboards
                            </Typography>
                            <Typography variant='h5' maxWidth='xl' color='white' paragraph>
                                The pyramid app saves time by helping teams structure arguments and quickly iterate over presentation storyboards  
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={0}
                            lg={7}
                            textAlign='center'
                        >
                            <Box component='div' display={{xs: 'none', lg: 'block'}}>
                                <img src={LandingImage} height='60%' width='60%' />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        zIndex={10}
                        pb={2}
                    >
                        <Button href='/home' variant='contained' size='large' color='warning'>Start a storyboard</Button>
                    </Grid>
                    
                    <Grid
                        item
                        zIndex={5}
                        pt={5}
                        my={2}
                        textAlign='center'
                    >
                        <Typography
                            variant='h4'
                            color='primary'
                        >
                            What is the pyramid principle?
                        </Typography>
                        <Typography
                            variant='body1'
                            color='primary'
                            py={2}
                            maxWidth='md'
                        >
                            The pyramid principle is a problem solving and writing framework developed by Barbara Minto, an ex-Mackenzie consultant. The framework's main argument is that "ideas in writing should always form a pyramid under a single thought". All supporting insights and arguments should directly support that single though.
                        </Typography>
                        <Button href='/explanation' color='primary' variant='contained' size='large'>See in-depth explanation</Button>
                    </Grid>
                    
                    <Grid
                        item
                        zIndex={5}
                        mt={3}
                        textAlign='center'
                        maxWidth='lg'
                    >
                        <Typography
                            variant='h4'
                            color='primary'
                        >
                            How can the Pyramid App help you?
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        direction='row'
                        alignItems='center'
                        maxWidth='lg'
                        pt={5}
                    >
                        <Grid
                            item
                            xs={12}
                            md={4}
                            textAlign='center'
                            px={{xs:2, lg:1}}
                        >
                            <FilterAltIcon sx={{fontSize: '3rem'}} color='primary' />
                            <Typography variant='h5' color='primary' py={1}>
                                Filter
                            </Typography>
                            <Typography variant='body1' color='primary'>
                                Arguments and insights need to fit into a set structure, guiding the writer a concise and well structured flow of information
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            textAlign='center'
                            px={{xs:2, lg:1}}
                        >
                            <AccountTreeIcon sx={{fontSize: '3rem'}} color='primary' />
                            <Typography variant='h5' color='primary' py={1}>
                                Test
                            </Typography>
                            <Typography variant='body1' color='primary'>
                                A mock slideshow let's the writer test the flow and logical cohesion of the presentations' insights and arguments 
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            textAlign='center'
                            px={{xs:2, lg:1}}
                        >
                            <SlideshowIcon sx={{fontSize: '3rem'}} color='primary' />
                            <Typography variant='h5' color='primary' py={1}>
                                Refine
                            </Typography>
                            <Typography variant='body1' color='primary'>
                                Easy to modify background information, insights, and arguments helps writers to refine their presentation's flow  
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box
                        width='100%'
                        mt={5}
                    >
                        <Footer />
                    </Box>
                </Grid>
            </CustomTheme>
        </>
    )
}