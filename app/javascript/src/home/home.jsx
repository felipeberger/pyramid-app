import React from 'react';
import Layout from '../layout/layout';
import Grid from '@mui/material/Grid';
import StoryCard from '../storyCard/storyCard';
import AddNewStory from './addNewStory';

export default function Home () {

    const cardWidth = '300px';

    return (
        <Layout>
            <Grid
                item
                container 
                spacing={1} 
                direction="row"
                alignItems="center" 
                justify="center"
                sx={{minHeight: '88vh'}} 
            >
                <Grid item xs={12} sm={6} md={4} align='center'  >
                    <StoryCard 
                        width={cardWidth}
                        title={"big idea must be completed"} 
                        firstInsight={"This is my first insight"} 
                        secondInsight={"A chicken in every pot"} 
                        thirdInsight={"A car in every garage"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align='center' >
                    <StoryCard 
                        width={cardWidth}
                        title={"big idea must be completed"} 
                        firstInsight={"This is my first insight"} 
                        secondInsight={"A chicken in every pot"} 
                        thirdInsight={"A car in every garage"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align='center' >
                    <StoryCard 
                        width={cardWidth}
                        title={"big idea must be completed"} 
                        firstInsight={"This is my first insight"} 
                        secondInsight={"A chicken in every pot"} 
                        thirdInsight={"A car in every garage"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align='center' >
                    <StoryCard 
                        width={cardWidth}
                        title={"big idea must be completed"} 
                        firstInsight={"This is my first insight"} 
                        secondInsight={"A chicken in every pot"} 
                        thirdInsight={"A car in every garage"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align='center' >
                    <StoryCard 
                        width={cardWidth}
                        title={"big idea must be completed"} 
                        firstInsight={"This is my first insight"} 
                        secondInsight={"A chicken in every pot"} 
                        thirdInsight={"A car in every garage"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align='center' >
                    <AddNewStory width={cardWidth}/>
                </Grid>
            </Grid>
        </Layout>
    )
}


