import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { handleErrors } from "../utils/fetchHelper";

class StoryPage extends React.Component {
    state = {
        storyData: {},
        loaded: false
    }

    componentDidMount() {
        fetch(`/api/stories/${this.props.storyId}`)
            .then(handleErrors)
            .then(data => {
                this.setState({
                    storyData: data.story,
                    loaded: true
                })
            })
    }

    render () {
        
        if (!this.state.loaded) return <p>loading...</p>

        console.log(this.state.storyData)

        const storyDataObjectStart = this.state.storyData

        const {                     
            situation,
            complication,
            question,
            answer
        } = storyDataObjectStart

        const textChangeHandler = (e) => {
            const storyDataKey = e.currentTarget.id
            const storyDataValue = e.currentTarget.value
            this.setState({...storyDataObjectStart, [storyDataKey]: storyDataValue })
        }
        
        const addSupportingDataButtonHandler = (e) => {
            // TODO add handler
            console.log(e.currentTarget.id)
        }

        const checkInsightExists = (insightIndex) => {
            return storyDataObjectStart.insights.hasOwnProperty(insightIndex)
        }

        const checkArgumentExists = (insightIndex, ArgumentIndex) => {
            return storyDataObjectStart.insights[insightIndex].arguments.hasOwnProperty(ArgumentIndex)
        }
        
        const insight1 = checkInsightExists(0)? storyDataObjectStart.insights[0].insight : ""
        const support11 = checkArgumentExists(0,0)? storyDataObjectStart.insights[0].arguments[0].argument : ""
        const support12 = checkArgumentExists(0,1)? storyDataObjectStart.insights[0].arguments[1].argument : ""
        const support13 = checkArgumentExists(0,2)? storyDataObjectStart.insights[0].arguments[2].argument : ""

        const insight2 = checkInsightExists(1)? storyDataObjectStart.insights[1].insight : ""
        const support21 = checkArgumentExists(1,0)? storyDataObjectStart.insights[1].arguments[0].argument : ""
        const support22 = checkArgumentExists(1,1)? storyDataObjectStart.insights[1].arguments[1].argument : ""
        const support23 = checkArgumentExists(1,2)? storyDataObjectStart.insights[1].arguments[2].argument : ""

        const insight3 = checkInsightExists(2)? storyDataObjectStart.insights[2].insight : ""
        const support31 = checkArgumentExists(2,0)? storyDataObjectStart.insights[2].arguments[0].argument : ""
        const support32 = checkArgumentExists(2,1)? storyDataObjectStart.insights[2].arguments[1].argument : ""
        const support33 = checkArgumentExists(2,2)? storyDataObjectStart.insights[2].arguments[2].argument : ""

        // style constants for height of input components
        const inputHeightForSituationComplicationQuestionAnswer = 2
        const inputHeightForInsights = 4
        const inputHeightForSupport = 4

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
                        defaultValue={situation? situation : "What is the context of the study?"}
                        onChange={textChangeHandler}
                        multiline
                        rows={inputHeightForSituationComplicationQuestionAnswer}
                    />
                    <TextField 
                        fullWidth 
                        label="Complication" 
                        id="complication"
                        margin="normal"
                        defaultValue={complication? complication : "What has changed that this study is needed?"}
                        onChange={textChangeHandler}
                        multiline
                        rows={inputHeightForSituationComplicationQuestionAnswer}    
                    />
                    <TextField 
                        fullWidth 
                        label="Question" 
                        id="question"
                        margin="normal"
                        defaultValue={question? question : "What issue are we trying to solve?"}
                        onChange={textChangeHandler}
                        multiline
                        rows={inputHeightForSituationComplicationQuestionAnswer}    
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
                        defaultValue={answer? answer : "What is your main argument?"}
                        onChange={textChangeHandler}
                        multiline
                        rows={inputHeightForSituationComplicationQuestionAnswer}    
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
                        defaultValue={insight1? insight1 : "What is your first insight?"}
                        multiline
                        rows={inputHeightForInsights} 
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
                                    id="support11"
                                    margin="normal"
                                    defaultValue={support11? support11 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                                    id="support12"
                                    margin="normal"
                                    defaultValue={support12? support12 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                                    id="support13"
                                    margin="normal"
                                    defaultValue={support13? support13 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    onClick={addSupportingDataButtonHandler}
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
                        defaultValue={insight2? insight2 : "What is your second insight?"}
                        multiline
                        rows={inputHeightForInsights}
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
                                    defaultValue={support21? support21 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                                    defaultValue={support22? support22 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                                    defaultValue={support23? support23 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                        defaultValue={insight3? insight3 : "What is your first insight?"}
                        multiline
                        rows={inputHeightForInsights}
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
                                    defaultValue={support31? support31 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                                    defaultValue={support32? support32 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
                                    defaultValue={support33? support33 : "Supporting information"}
                                    fullWidth
                                    multiline
                                    rows={inputHeightForSupport}
                                />
                                <Button 
                                    startIcon={<AddCircleOutlineIcon 
                                    sx={{height:'35px', width: '35px'}}  />} 
                                    onClick={addSupportingDataButtonHandler}
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
}

export default StoryPage