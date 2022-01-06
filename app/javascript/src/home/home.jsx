import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import StoryCard from '../storyCard/storyCard';
import AddNewStory from './addNewStory';
import { handleErrors } from '../utils/fetchHelper';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllStories } from '../../global_state/reducers/allStoriesSlice';

export default function Home () {
    const [loaded, setLoaded] = useState(false);

    // redux selector functions
    const retrieveUserId = state => state.userId
    const retrieveActiveStory = state => state.activeStory
    const retrieveAllStories = state => state.allStories
    
    // redux subscriptions (global state)
    const globalUserId = useSelector(retrieveUserId).userId
    const globalActiveStory = useSelector(retrieveActiveStory)
    const globalAllStories = useSelector(retrieveAllStories)

    // dispatch constant to update redux store
    const dispatch = useDispatch()

    // TODO useEffect triggers twice on load of page, fix so only loads once 
    useEffect( ()=> {
        fetch(`/api/stories/${globalUserId}/getall`)
            .then(handleErrors)
            .then(data => {
                dispatch(updateAllStories(data.user.stories))
                setLoaded(true)
            })
    }, [])

    // constants used for UI dimensions
    const cardWidth = '450px';
    const cardHeight = '400px';
    
    const createStoryCards = () => {
        if (!loaded) return
        if (!globalAllStories) return
        console.log(globalAllStories)
        
        return (
            globalAllStories[0].map( story => {
                return (
                    <Grid 
                        item 
                        xs={12}
                        md={6} 
                        xl={4} 
                        align='center' 
                        key={story.storyId? story.storyId : "" }
                        px={1}
                        py={2} 
                    >
                        {/* checking array has own property answer obtained from https://stackoverflow.com/questions/13107855/how-to-check-if-an-array-index-exists-or-not-in-javascript

                        Did not use the most upvoted answer but the one that suggests using object inheritance as an array in JS is just an object under the hood */}
                         <StoryCard 
                            width={cardWidth}
                            height={cardHeight}
                            title={story.answer? story.answer : "ANSWER" } 
                            firstInsight={story.insights.hasOwnProperty(0) ? story.insights[0].insight : "INSIGHT"  } 
                            secondInsight={story.insights.hasOwnProperty(1) ? story.insights[1].insight : "INSIGHT" } 
                            thirdInsight={story.insights.hasOwnProperty(2) ? story.insights[2].insight : "INSIGHT"} 
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


