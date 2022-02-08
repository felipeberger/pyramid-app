import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoopIcon from '@mui/icons-material/Loop';
import { Typography } from "@mui/material";
import { handleErrors, safeCredentials } from "../utils/fetchHelper";
import InsightAndArguments from "./insightAndArguments";
import Button from '@mui/material/Button';

class StoryPage extends React.Component {
    state = {
        storyData: {},
        loaded: false,
        uploading: false
    }

    componentDidMount() {
        fetch(`/api/stories/fetch/${this.props.storyId}`)
            .then(handleErrors)
            .then(data => {
                this.setState({
                    storyData: data.story,
                    loaded: true,
                    dataSaved: true
                })
            })
    }

    render () {
        
        if (!this.state.loaded) return <p>loading...</p>

        const storyId = this.props.storyId

        const inputHeightForSituationComplicationQuestionAnswer = 2
        
        const storyDataObjectStart = this.state.storyData

        const {                     
            situation,
            complication,
            question,
            answer
        } = storyDataObjectStart

        const insightsAndArguments = {
            insight1 : storyDataObjectStart.insights[0].insight,
            support11 : storyDataObjectStart.insights[0].arguments[0].argument,
            explanation11 : storyDataObjectStart.insights[0].arguments[0].explanation,
            support12 : storyDataObjectStart.insights[0].arguments[1].argument,
            explanation12 : storyDataObjectStart.insights[0].arguments[1].explanation,
            support13 : storyDataObjectStart.insights[0].arguments[2].argument,
            explanation13 : storyDataObjectStart.insights[0].arguments[2].explanation,

            insight2 : storyDataObjectStart.insights[1].insight,
            support21 : storyDataObjectStart.insights[1].arguments[0].argument,
            explanation21 : storyDataObjectStart.insights[1].arguments[0].explanation,
            support22 : storyDataObjectStart.insights[1].arguments[1].argument,
            explanation22 : storyDataObjectStart.insights[1].arguments[1].explanation,
            support23 : storyDataObjectStart.insights[1].arguments[2].argument,
            explanation23 : storyDataObjectStart.insights[1].arguments[2].explanation,

            insight3 : storyDataObjectStart.insights[2].insight,
            support31 : storyDataObjectStart.insights[2].arguments[0].argument,
            explanation31 : storyDataObjectStart.insights[2].arguments[0].explanation,
            support32 : storyDataObjectStart.insights[2].arguments[1].argument,
            explanation32 : storyDataObjectStart.insights[2].arguments[1].explanation,
            support33 : storyDataObjectStart.insights[2].arguments[2].argument,
            explanation33 : storyDataObjectStart.insights[2].arguments[2].explanation
        }

        let typingTimeout

        const textChangeHandler = (e) => {

            clearTimeout(typingTimeout)
            const textFieldId = e.currentTarget.id
            const textFieldValue = e.currentTarget.value

            typingTimeout = setTimeout(()=>{

                if (textFieldId.includes('insight')) {
                    const insightUpdatedTextfieldId = parseInt(textFieldId.replace('insight', ''))
                    const insightUpdatedStateIndex = insightUpdatedTextfieldId - 1
                    let insightsCopy = [...this.state.storyData.insights]
                    let updatedInsight = {...this.state.storyData.insights[insightUpdatedStateIndex]}
                    updatedInsight.insight = textFieldValue
                    insightsCopy[insightUpdatedStateIndex] = updatedInsight
                    
                    this.setState(prevState => ({
                        storyData: {...prevState.storyData, 
                            insights: [...insightsCopy] }
                    }))
                    saveStory()
                    return
                } 
    
                if (textFieldId.includes('support') || textFieldId.includes('explanation') ) {
                    const argumentAndIndex = textFieldId.includes('support') ? textFieldId.replace('support', '') : textFieldId.replace('explanation', '')
                    const argumentUpdatedBelongsToWhichInsightIndex = parseInt(argumentAndIndex.charAt(0)) -1
                    const argumentUpdatedStateIndex = parseInt(argumentAndIndex.charAt(1)) -1
    
                    let argumentsCopy = [...this.state.storyData.insights[argumentUpdatedBelongsToWhichInsightIndex].arguments]
                    let updatedArgument = {...this.state.storyData.insights[argumentUpdatedBelongsToWhichInsightIndex].arguments[argumentUpdatedStateIndex]}
                    textFieldId.includes('support') ? updatedArgument.argument = textFieldValue : updatedArgument.explanation = textFieldValue
                    argumentsCopy[argumentUpdatedStateIndex] = updatedArgument
                    let insightAndArgumentsCopy = [...this.state.storyData.insights]
                    insightAndArgumentsCopy[argumentUpdatedBelongsToWhichInsightIndex].arguments = [...argumentsCopy]
    
                    this.setState(prevState => ({
                        storyData: {...prevState.storyData, 
                            insights: [...insightAndArgumentsCopy ]}
                    }))
                    saveStory()

                    return
                }
                
                this.setState(prevState => ({
                    storyData: {...prevState.storyData, [textFieldId]: textFieldValue }
                }))
                saveStory()

            }, 500)

        }

        const slideshowButtonHandler = () => {
            window.location = `/story/${storyId}/slideshow`
        }

        const saveStory = () => {
            this.setState({
                uploading: true
            })

            fetch(`/api/stories/saveStory/${this.props.storyId}`, safeCredentials({
                method: 'PUT',
                body: JSON.stringify(this.state.storyData)
            }))
                .then(handleErrors)
                .then(res => {
                    console.log(res.success)
                    this.setState({
                        uploading: false
                    })
                })
        } 

        const renderInsightsAndArguments = () => {
            let insightsAndArgumentComponents = []

            for (let i = 1; i <= 3; i++) {
                insightsAndArgumentComponents.push(
                    <InsightAndArguments key={i} insightId={i} textChangeHandler={textChangeHandler} insightValue={insightsAndArguments[`insight${i}`]} support1={insightsAndArguments[`support${i}1`]} support2={insightsAndArguments[`support${i}2`]} support3={insightsAndArguments[`support${i}3`]} explanation1={insightsAndArguments[`explanation${i}1`]} explanation2={insightsAndArguments[`explanation${i}2`]} explanation3={insightsAndArguments[`explanation${i}3`]} />
                )
            }

            return insightsAndArgumentComponents
        }

        return (
            <>
            {this.state.uploading === true &&
                <Grid
                    container                    
                    sx={{zIndex: 'tooltip', position: 'absolute', py: 2}}
                    display='flex'
                    alignItems='center'
                    flexWrap='wrap'
                >
                    <LoopIcon sx={{color: 'green', height:'30px', width: '30px'}} />
                    <Typography sx={{color: 'green'}}>Saving</Typography>
                </Grid>
            }

            <Grid
                container
                justifyContent='center'
                pt={2}
            >
                <Button variant="outlined" onClick={slideshowButtonHandler}>See Story Slideshow</Button>
            </Grid>

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
            
            <Grid
                container
                item 
                spacing={0} 
                direction='row'
                alignItems='flex-start'
                justifyContent='center'
            >
                {renderInsightsAndArguments()}
            </ Grid>


            <Grid
                container
                justifyContent='center'
                py={2}
            >
                <Button variant="outlined" onClick={slideshowButtonHandler}>See Story Slideshow</Button>
            </Grid>
            </>            
        )
    }
}

export default StoryPage