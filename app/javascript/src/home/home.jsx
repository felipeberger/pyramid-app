import React, {useEffect, useState} from 'react';
import Layout from '../layout/layout';
import Grid from '@mui/material/Grid';
import StoryCard from '../storyCard/storyCard';
import AddNewStory from './addNewStory';
import {handleErrors} from '../utils/fetchHelper'

export default function Home () {
    const [stories, setStories] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const cardWidth = '450px';
    const minCardHeight = '300px'

    // TODO add API call to download all stories the user has created

    useEffect( ()=> {
        fetch(`/api/stories/${1}/getall`)
            .then(handleErrors)
            .then(data => {
                console.log(data.user.stories)
                setStories(data.user.stories)
                setLoaded(true)
            })
    }, [loaded])

    
    const createStoryCards = () => {
        if (!loaded) return
        if (!stories) return
        
        return (
            stories.map( story => {
                return (
                    <Grid 
                        item xs={12}
                        md={6} 
                        xl={4} 
                        align='center' 
                        key={story.storyId? story.storyId : "" }
                        px={1}
                        py={2} 
                    >
                        <StoryCard 
                            width={cardWidth}
                            title={story.answer? story.answer : "ANSWER" } 
                            firstInsight={typeof story.insights[0] === "undefined" ? "INSIGHT" : story.insights[0].insight } 
                            secondInsight={typeof story.insights[1] === "undefined" ? "INSIGHT" : story.insights[1].insight } 
                            thirdInsight={typeof story.insights[2] === "undefined" ? "INSIGHT" : story.insights[2].insight} 
                        />
                    </Grid>
                )
            })
        )
    }
    
    // TODO Add redux for state management so logged-in status and current stories are kept standardized accross all views
        
    return (
        <Layout>
            <Grid
                item
                container 
                spacing={3} 
                direction='row'
                alignContent='center' 
                justify='center'
                sx={{minHeight:'88vh'}}
                my={{sm:2, md:0}}
                >

                {loaded? createStoryCards() : console.log("false")}

                {loaded? createStoryCards() : console.log("false")}

                {loaded? createStoryCards() : console.log("false")}

                <Grid item container xs={12} md={6} xl={4} align='center' alignContent='center' justifyContent='center' px={1} py={2} sx={{minHeight: "300px"}} >
                    <AddNewStory width={cardWidth}/>
                </Grid>
            </Grid>
        </Layout>
    )
}


