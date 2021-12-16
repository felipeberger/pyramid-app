import React, {useEffect, useState} from 'react';
import Layout from '../layout/layout';
import Grid from '@mui/material/Grid';
import StoryCard from '../storyCard/storyCard';
import AddNewStory from './addNewStory';
import {handleErrors} from '../utils/fetchHelper'

export default function Home () {
    const [stories, setStories] = useState(null);
    const [loaded, setLoaded] = useState(false)

    // TODO add API call to download all stories the user has created

    useEffect( ()=> {
        fetch('/api/stories/getall')
            .then(handleErrors)
            .then(data => {
                let temp = [data.stories]
                // console.log(temp)
                setStories(temp)
                setLoaded(true)
            })
    }, [loaded])

    
    const createStoryCards = () => {
        if (!loaded) return
        
        return (
            stories.map( story => {
                return (
                    <Grid 
                        item xs={12}
                        md={6} 
                        xl={4} 
                        align='center' 
                        key={story.id}
                        px={1}
                        py={2} 
                    >
                        <StoryCard 
                            width={cardWidth}
                            title={story.answer} 
                            firstInsight={story.insights[0].insight} 
                            secondInsight={story.insights[1].insight} 
                            thirdInsight={story.insights[2].insight} 
                        />
                    </Grid>
                )
            })
        )
    }

    // TODO map fetched stories within the grid
    
    // Add redux for state management so logged-in status and current stories are kept standardized accross all views
    
    const cardWidth = '450px';
    
    return (
        <Layout>
            <Grid
                item
                container 
                spacing={3} 
                direction='row'
                alignItems='center' 
                justify='center'
                sx={{minHeight:'92vh'}}
                my={{sm:2, md:0}}
                 
                >

                {loaded? createStoryCards() : console.log("false")}

                {loaded? createStoryCards() : console.log("false")}

                {loaded? createStoryCards() : console.log("false")}

                {loaded? createStoryCards() : console.log("false")}

                {loaded? createStoryCards() : console.log("false")}

                <Grid item xs={12} md={6} xl={4} align='center' >
                    <AddNewStory width={cardWidth}/>
                </Grid>
            </Grid>
        </Layout>
    )
}


