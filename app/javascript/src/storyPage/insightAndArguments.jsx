import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Typography } from "@mui/material";

export default function InsightAndArguments (props) {
    const textChangeHandler = props.textChangeHandler
    const insightValue = props.insightValue
    const support1 = props.support1
    const explanation1 = props.explanation1
    const support2 = props.support2
    const explanation2 = props.explanation2
    const support3 = props.support3
    const explanation3 = props.explanation3
    const inputHeightForInsights = 4
    const inputHeightForSupport = 2
    const inputHeightForExplanation = 3

    const CreateSupportAndExplanationGroups = (numberOfGroups) => {
        const groups = []

        for (let i = 1; i <= numberOfGroups; i++) {
            let defaultSupportValue
            let defaultExplanationValue

            switch (i) {
                case 1:
                    defaultSupportValue = support1
                    defaultExplanationValue = explanation1
                    break;
                case 2:
                    defaultSupportValue = support2
                    defaultExplanationValue = explanation2
                    break
                case 3:
                    defaultSupportValue = support3
                    defaultExplanationValue = explanation3
                    break
            
                default:
                    break;
            }

            groups.push(
                <Box key={i}>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextField 
                            label={`Support #${i}`} 
                            id={`support${props.insightId}${i}`}
                            margin="dense"
                            defaultValue={defaultSupportValue ? defaultSupportValue : ""}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />

                    </Box>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextField 
                            label={`Explanation #${i}`} 
                            id={`explanation${props.insightId}${i}`}
                            margin="dense"
                            defaultValue={defaultExplanationValue ? defaultExplanationValue : ""}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForExplanation}
                        />
                    </Box>
                    {i < numberOfGroups && <hr />}
                </Box>
            )
        }
        return groups
    }

    return (
        <>
        <Grid 
            item                              
            align='center'
            px={1}
            width='30%' 
        >
            <ArrowUpwardIcon fontSize="large" />

            <Typography variant='subtitle1' color='#7F7F7F' >
                Insights must support the answer/conclusion above
            </Typography>

            <TextField 
                fullWidth 
                label={`Insight #${props.insightId}`}
                id={`insight${props.insightId}`}
                margin="normal"
                defaultValue={insightValue? insightValue : ""}
                onChange={textChangeHandler}
                multiline
                rows={inputHeightForInsights}
            />

            <ArrowUpwardIcon fontSize="large" />

            <Grid
                container
                item
                direction='column'
            >
                <Box 
                    sx={{
                        backgroundColor: "lightGray", 
                        border: 1, 
                        padding: 1, 
                        borderRadius: 2
                    }}
                    my={2}
                >
                    <Typography variant='subtitle1' color='#7F7F7F' >
                        Data must support insight above this section
                    </Typography>

                    {CreateSupportAndExplanationGroups(3)}

                </Box>
            </Grid>
        </Grid>
        </>
    )
}
