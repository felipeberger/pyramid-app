import React from 'react';
import Layout from '../layout/layout';
import StoryCard from './storyCard';
import Grid from '@mui/material/Grid';

// const headerHeightPixels = 58;
// const footerHeightPixels = 58;
// const calcViewportHeight = window.innerHeight - headerHeightPixels - footerHeightPixels ;

const Home = () => (
    <Layout>
        <Grid 
            container 
            spacing={0} 
            align="center"
            direction="row"
            sx={{minHeight: '88vh'}} 
        >
            <Grid item xs={12} sm={6} md={4} xl={3} >
                <StoryCard 
                    title={"big idea must be completed"} 
                    firstInsight={"This is my first insight"} 
                    secondInsight={"A chicken in every pot"} 
                    thirdInsight={"A car in every garage"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3} >
                <StoryCard 
                    title={"big idea must be completed"} 
                    firstInsight={"This is my first insight"} 
                    secondInsight={"A chicken in every pot"} 
                    thirdInsight={"A car in every garage"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3} >
                <StoryCard 
                    title={"big idea must be completed"} 
                    firstInsight={"This is my first insight"} 
                    secondInsight={"A chicken in every pot"} 
                    thirdInsight={"A car in every garage"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3} >
                <StoryCard 
                    title={"big idea must be completed"} 
                    firstInsight={"This is my first insight"} 
                    secondInsight={"A chicken in every pot"} 
                    thirdInsight={"A car in every garage"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3} >
                <StoryCard 
                    title={"big idea must be completed"} 
                    firstInsight={"This is my first insight"} 
                    secondInsight={"A chicken in every pot"} 
                    thirdInsight={"A car in every garage"} />
            </Grid>
        </Grid>
    </Layout>
)

export default Home

