import React, {useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Argument (props) {

    const dummyData = {argument:'Wages for most common jobs have not increased in line with inflation, while the price for used cars has tracked inflation over the same time period',explanation: 'Used cars used to be the accessible option for workers in lower wage positions, but the cost of purchase is now out of reach for many workers who might have considered buying one in the past', insight:1,data:{'title': 'Cost of used car as proportion of average monthly wages', 'rows': [['Year', '2010', '2011', '2012', '2013'],['wages','2000','2000','2050','2050'], ['purchase cost', '4000', '4300', '4500', '5000']] }}

    return (
        <>
        <Grid
            container
            item
            direction='column'
            alignContent='center' 
            justify='center'
        >
            <Grid
                item
                width='90%'
                py={2}
            >
                <TextField 
                    fullWidth 
                    label="Argument" 
                    id="argument"
                    margin="normal"
                    defaultValue={dummyData.argument}
                    // onChange={textChangeHandler}
                    multiline
                    // rows={inputHeightForSituationComplicationQuestionAnswer}
                />

                <TextField 
                    fullWidth 
                    label="Explanation" 
                    id="explanation"
                    margin="normal"
                    defaultValue={dummyData.explanation}
                    // onChange={textChangeHandler}
                    multiline
                    // rows={inputHeightForSituationComplicationQuestionAnswer}
                />
            </Grid>
        </Grid>
        </>
    )
}