import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import StoryCard from '../storyCard/storyCard';
import AddNewStory from './addNewStory';
import { handleErrors } from '../utils/fetchHelper';

export default function Home () {
    const [loaded, setLoaded] = useState(false);
    const [allStories, setAllStories] = useState([])

    // TODO update user ID being passed to fetch (should be drawn from another API call to get logged in user ID)
    useEffect( ()=> {
        fetch(`/api/stories/${1}/getall`)
            .then(handleErrors)
            .then(data => {
                setAllStories(data.user.stories)
                setLoaded(true)
            })
    }, [])

    // constants used for UI dimensions
    const cardWidth = '450px';
    const cardHeight = '400px';
    
    const createStoryCards = () => {
        if (!loaded) return
        if (!allStories) return
        console.log(allStories)
        
        return (
            allStories.map( (story, index) => {
                return (
                    <Grid 
                        item 
                        xs={12}
                        md={6} 
                        xl={4} 
                        align='center' 
                        key={story.storyId}
                        px={1}
                        py={2} 
                    >
                        {/* checking array has own property answer obtained from https://stackoverflow.com/questions/13107855/how-to-check-if-an-array-index-exists-or-not-in-javascript
                        Did not use the most upvoted answer but the one that suggests using object inheritance as an array in JS is just an object under the hood */}
                         <StoryCard 
                            width={cardWidth}
                            height={cardHeight}
                            answer={story.answer? story.answer : "ANSWER" } 
                            firstInsight={story.insights.hasOwnProperty(0) ? story.insights[0].insight : "INSIGHT"  } 
                            secondInsight={story.insights.hasOwnProperty(1) ? story.insights[1].insight : "INSIGHT" } 
                            thirdInsight={story.insights.hasOwnProperty(2) ? story.insights[2].insight : "INSIGHT"}
                            storyId={story.storyId}
                        />
                    </Grid>
                )
            })
        )
    }
        
    return (
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

            {loaded? createStoryCards() : ""}

            {loaded? createStoryCards() : ""}

            {loaded? createStoryCards() : ""}

            <Grid item container xs={12} md={6} xl={4} align='center' alignContent='center' justifyContent='center' px={1} py={2} sx={{minHeight: "300px"}} >
                <AddNewStory width={cardWidth}/>
            </Grid>
        </Grid>
    )
}


