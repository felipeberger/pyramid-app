import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { handleErrors } from '../utils/fetchHelper';

export default function Slideshow (props) {
    const [slideData, setSlideData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect( ()=> {
        fetch(`/api/stories/${props.storyId}`)
            .then(handleErrors)
            .then(data => {
                setSlideData(data.story)
                setLoaded(true)
            })
    }, [])

    function createSlidesData () {

        function createTypographyComponent(text, variant) {
            return (<Typography variant={variant} align='justify' gutterBottom>{text}</Typography>)
        }

        const sizeSCQA = 'h2'
        const sizeInsight = 'h2'
        const sizeArgument = 'h3'
        const sizeExplanation = 'h4'

        const slidesData = [
            [createTypographyComponent(`Situation: ${slideData['situation']}`, sizeSCQA), createTypographyComponent(`Complication: ${slideData['complication']}`,sizeSCQA), createTypographyComponent(`Question: ${slideData['question']}`, sizeSCQA)], 
            [createTypographyComponent(`Answer: ${slideData['answer']}`, sizeSCQA) ]
        ]

        slideData['insights'].forEach( (insightAndArguments, index) => {

            if (insightAndArguments['insight'] === '') return
            slidesData.push([createTypographyComponent(`Insight ${index + 1}: ${insightAndArguments['insight']}`, sizeInsight) ])

            insightAndArguments['arguments'].map( (argumentAndExplanation, index) => {
                if (argumentAndExplanation['argument'] === '') return
                slidesData.push ([createTypographyComponent(`Argument ${index + 1}: ${argumentAndExplanation['argument']}`, sizeArgument), createTypographyComponent(`Explanation: ${argumentAndExplanation['explanation']}`, sizeExplanation)])
            })
        })

        return slidesData
    }

    function createSlideDeck () {
        if (!loaded) return
        return createSlidesData().map( (slideData, index) => {
            return <Slide key={index} data={slideData} />
        })
    }

    return (
        <>
        <Grid
            container
            direction='column'
            sx={{minHeight:'88vh'}}
        >
            <Grid
                item
                my={5}
                mx={1}
            >
                <Carousel
                    navButtonsAlwaysVisible
                    animation='slide'
                    autoPlay={false}
                >
                    {slideData? createSlideDeck(): <p>Loading...</p> }
                </Carousel>
            </Grid>
        </Grid>
        </>
    )
}

function Slide(props)
{
    return (
        <Paper>
            <Grid
                container
                direction='column'
                height='78vh'
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    textAlign='center'
                    alignContent='center'
                    width='80%'
                >
                    {props.data.map( (slide, index) => {
                        return (
                            <Box 
                                key={index} 
                                mx={5}
                            >
                                {slide}
                            </Box>
                        )
                    })}
                </Grid>
            </Grid>
        </Paper>
    )
}
