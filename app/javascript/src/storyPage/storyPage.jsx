import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function StoryPage () {

    // redux selector functions
    const retrieveUserId = state => state.userId
    const retrieveActiveStory = state => state.activeStory
    
    // redux subscriptions (global state)
    const globalUserId = useSelector(retrieveUserId).userId
    const globalActiveStory = useSelector(retrieveActiveStory)

    const textChangeHandler = (e) => {
        console.log(e.currentTarget.value)
        switch (e.currentTarget.id) {
            case situation:
                setSituation(e.currentTarget.value)                   
                break;
            case complication:
                setComplication(e.currentTarget.value)                   
                break;
            case question:
                setQuestion(e.currentTarget.value)                   
                break;
            case answer:
                setAnswer(e.currentTarget.value)                   
                break;
            case insight1:
                setInsight1(e.currentTarget.value)                   
                break;
            case insight2:
                setInsight2(e.currentTarget.value)                   
                break;
            case insight3:
                setInsight3(e.currentTarget.value)                   
                break;

            case support11:
                setSuport11(e.currentTarget.value)                   
                break;
            case support12:
                setSupport12(e.currentTarget.value)                   
                break;
            case support1:
                setSupport13(e.currentTarget.value)                   
                break;

            default:
                break;
        }
    }

    const supportingButtonHandler = (e) => {
        // add handler
        console.log(e.currentTarget.id)
    }

    return (
        <>
        <Grid
            container 
            item
            spacing={0} 
            direction='column'
            alignContent='center' 
            justify='center'
        >
            <Grid
                item
                width='70%'
                py={2}
                className="situationComplicationQuestion"
            >
                <TextField 
                    fullWidth 
                    label="Situation" 
                    id="situation"
                    margin="normal"
                    defaultValue="What is the context of the study?"
                    onChange={textChangeHandler}
                />
                <TextField 
                    fullWidth 
                    label="Complication" 
                    id="complication"
                    margin="normal"
                    defaultValue="What has changed that this study is needed?"    
                />
                <TextField 
                    fullWidth 
                    label="Question" 
                    id="question"
                    margin="normal"
                    defaultValue="What issue are we trying to solve?"    
                />
            </Grid>

            <Grid                
                item
                width='70%'
                py={2}
                className="answer"
            >
                <TextField 
                    fullWidth 
                    label="Answer" 
                    id="answer"
                    margin="normal"
                    defaultValue="What is your main argument?"    
                />
            </Grid>

        </Grid>
        
        {/* Insights and suporting information */}
        <Grid
            container
            item 
            spacing={0} 
            direction='row'
            alignItems='flex-start'
            justifyContent='center'
        >
            {/* Insight #1 */}
            <Grid 
                item                              
                align='center'
                px={1}
                width='30%' 
            >
                <ArrowUpwardIcon />

                <TextField 
                    fullWidth 
                    label="Insight #1" 
                    id="insight1"
                    margin="normal"
                    defaultValue="What is your first insight?" 
                />

                <ArrowUpwardIcon />

                {/* Supporting information */}
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
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #1" 
                                id="support-11"
                                margin="normal"
                                defaultValue="Supporting information"
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-11"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>

                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #2" 
                                id="support-12"
                                margin="normal"
                                defaultValue="Supporting information" 
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-12"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>
        
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #3" 
                                id="support-13"
                                margin="normal"
                                defaultValue="Supporting information" 
                                fullWidth
                            />
                            <Button 
                                onClick={supportingButtonHandler}
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                id="button-support-13"
                                component="span"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* Insight #2 */}
            <Grid 
                item                          
                align='center'
                px={1} 
                width='30%' 
            >

                <ArrowUpwardIcon />

                <TextField
                    fullWidth   
                    label="Insight #2" 
                    id="insight2"
                    margin="normal"
                    defaultValue="What is your second insight?"    
                />

                <ArrowUpwardIcon />

                {/* Supporting information */}
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
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #1" 
                                id="support21"
                                margin="normal"
                                defaultValue="Supporting information"
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-21"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>

                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #2" 
                                id="support22"
                                margin="normal"
                                defaultValue="Supporting information" 
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-22"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>
        
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #3" 
                                id="support23"
                                margin="normal"
                                defaultValue="Supporting information" 
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-23"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* Insight #3 */}
            <Grid 
                item                          
                align='center'
                px={1} 
                width='30%' 
            >

                <ArrowUpwardIcon />

                <TextField  
                    fullWidth
                    label="Insight #3" 
                    id="insight3"
                    margin="normal"
                    defaultValue="What is your third insight?"    
                />

                <ArrowUpwardIcon />

                {/* Supporting information */}
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
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #1" 
                                id="support31"
                                margin="normal"
                                defaultValue="Supporting information"
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-31"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>

                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #2" 
                                id="support32"
                                margin="normal"
                                defaultValue="Supporting information" 
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-32"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>
        
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <TextField 
                                label="Support #3" 
                                id="support33"
                                margin="normal"
                                defaultValue="Supporting information" 
                                fullWidth
                            />
                            <Button 
                                startIcon={<AddCircleOutlineIcon 
                                sx={{height:'35px', width: '35px'}}  />} 
                                onClick={supportingButtonHandler}
                                id="button-support-33"
                            >
                                <Typography>Add Data</Typography>
                            </Button>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}