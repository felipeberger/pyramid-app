import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import StoryCard from '../storyCard/storyCard';
import AddNewStory from './addNewStory';
import { handleErrors } from '../utils/fetchHelper';
import { Typography } from "@mui/material";

export default function Home () {
    const [loaded, setLoaded] = useState(false);
    const [allStories, setAllStories] = useState([])

    useEffect( ()=> {
        fetch(`/api/stories/getall?email=${localStorage.getItem('storedUserEmail')}`)
            .then(handleErrors)
            .then(data => {
                setAllStories(data.user.stories)
                setLoaded(true)
            })
    }, [])

    // Reloads the page when user navigates to Home using back button on browser. Answer obtained from https://stackoverflow.com/questions/9046184/reload-the-site-when-reached-via-browsers-back-button 
    if(performance.getEntriesByType("navigation")[0].type == "back_forward"){
        location.reload()
    }

    const updateHomeAfterDelete = (deletedStoryId) => {
        setAllStories( allStories.filter(story => {
            return story['storyId'] !== deletedStoryId
        }))
    }

    const cardWidth = '450px';
    
    const createStoryCards = () => {
        if (!loaded) return
        if (!allStories) return
        
        return (
            allStories.map( (story, index) => {
                return (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        xl={4}
                        align='center'
                        key={index}
                        px={1}
                        py={2}
                    >
                         <StoryCard 
                            width={cardWidth}
                            title={story.title}
                            answer={story.answer} 
                            situation={story.situation} 
                            complication={story.complication} 
                            question={story.question}
                            answer={story.answer}
                            storyId={story.storyId}
                            updateHome={updateHomeAfterDelete}
                        />
                    </Grid>
                )
            })
        )
    }

    const displayNewStoryOrLogin = () => {
        if (localStorage.getItem('storedUserEmail')) {
            return (
                <Grid 
                    item 
                    container 
                    xs={12} 
                    md={6} 
                    xl={4} 
                    align='center' 
                    alignContent='center' 
                    justifyContent='center' 
                    px={1} 
                    py={2}
                    minHeight='300px'
                >
                    <AddNewStory width={cardWidth}/>
                </Grid>
            )
        }

        return (
            <Grid
                item
                width='100%'
                textAlign='center'
            >
                <Typography
                    variant='h3'
                >
                    Please log in to create storyboards
                </Typography>
            </Grid>        
        )
    }
        
    return (
        <>
        <Grid
            item
            container 
            spacing={3} 
            direction='row'
            alignContent='center' 
            justify='center'
            minHeight='87vh'
            my={{sm:1, md:0}}
            >

            {loaded? createStoryCards() : ""}

            {displayNewStoryOrLogin()}

        </Grid>
        </>
    )
}


