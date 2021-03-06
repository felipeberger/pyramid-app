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
        fetch(`/api/stories/fetch/${props.storyId}`)
            .then(handleErrors)
            .then(data => {
                setSlideData(data.story)
                setLoaded(true)
            })
    }, [])

    function createSlidesData () {

        const sizeSCQA = 'h3'
        const sizeInsight = 'h3'
        const sizeArgument = 'h4'
        const sizeExplanation = 'h5'

        function createTypographyComponent(text, variant) {
            return (<Typography variant={variant} align='justify' gutterBottom>{text}</Typography>)
        }


        const slidesData = [
            [createTypographyComponent(`Situation: ${slideData['situation'] === null ? '' : slideData['situation'] }`, sizeSCQA), createTypographyComponent(`Complication: ${slideData['complication'] === null ? '' : slideData['complication']}`,sizeSCQA), createTypographyComponent(`Question: ${slideData['question'] === null ? '' : slideData['question']}`, sizeSCQA)], 
            [createTypographyComponent(`Answer: ${slideData['answer'] === null ? '' : slideData['answer']}`, sizeSCQA) ]
        ]

        slideData['insights'].forEach( (insightAndArguments, index) => {

            if (insightAndArguments['insight'] === '' || insightAndArguments['insight'] === null ) return
            slidesData.push([createTypographyComponent(`Insight ${index + 1}: ${insightAndArguments['insight']}`, sizeInsight) ])

            insightAndArguments['arguments'].map( (argumentAndExplanation, index) => {
                if (argumentAndExplanation['argument'] === '' || argumentAndExplanation['argument'] === null) return
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
                height='73vh'
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
