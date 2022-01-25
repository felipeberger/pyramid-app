import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { handleErrors, safeCredentials } from "../utils/fetchHelper";
import InsightAndArguments from "./insightAndArguments";

class StoryPage extends React.Component {
    state = {
        storyData: {},
        storyId: null,
        loaded: false
    }

    componentDidMount() {
        fetch(`/api/stories/${this.props.storyId}`)
            .then(handleErrors)
            .then(data => {
                this.setState({
                    storyData: data.story,
                    storyId: this.props.storyId,
                    loaded: true
                })
            })
    }

    render () {
        
        if (!this.state.loaded) return <p>loading...</p>

        const storyDataObjectStart = this.state.storyData
        const {                     
            situation,
            complication,
            question,
            answer
        } = storyDataObjectStart
        
        const inputHeightForSituationComplicationQuestionAnswer = 2
        
        const checkInsightExists = (insightIndex) => {
            return storyDataObjectStart.insights.hasOwnProperty(insightIndex)
        }

        const checkArgumentExists = (insightIndex, ArgumentIndex) => {
            if (!checkInsightExists(insightIndex)) return false

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


        const textChangeHandler = (e) => {
            const textFieldId = e.currentTarget.id
            const textFieldValue = e.currentTarget.value

            if (textFieldId.includes('insight')) {
                const insightUpdatedTextfieldId = parseInt(textFieldId.replace('insight', ''))
                const insightUpdatedStateIndex = insightUpdatedTextfieldId - 1
                
                this.setState(prevState => ({
                    storyData: {...prevState.storyData, 
                        insights: {...prevState.storyData.insights, [insightUpdatedStateIndex]: {...prevState.storyData.insights[insightUpdatedStateIndex], 
                            insight: textFieldValue} }}
                }))
                return
            } 

            if (textFieldId.includes('support')) {
                const argumentAndIndex = textFieldId.replace('support', '')
                const argumentUpdatedBelongsToWhichInsightIndex = parseInt(argumentAndIndex.charAt(0)) -1
                const argumentUpdatedStateIndex = parseInt(argumentAndIndex.charAt(1)) -1

                let argumentsCopy = [...this.state.storyData.insights[argumentUpdatedBelongsToWhichInsightIndex].arguments]
                let updatedArgument = {...this.state.storyData.insights[argumentUpdatedBelongsToWhichInsightIndex].arguments[argumentUpdatedStateIndex]}
                updatedArgument.argument = textFieldValue
                argumentsCopy[argumentUpdatedStateIndex] = updatedArgument

                this.setState(prevState => ({
                    storyData: {...prevState.storyData, 
                        insights: {...prevState.storyData.insights, [argumentUpdatedBelongsToWhichInsightIndex]: {...prevState.storyData.insights[argumentUpdatedBelongsToWhichInsightIndex], arguments: argumentsCopy } }}
                }))
                return
            }
            
            this.setState(prevState => ({
                storyData: {...prevState.storyData, [textFieldId]: textFieldValue }
            }))
            
        }
        
        const addSupportingDataButtonHandler = (e) => {
            // TODO add handler
            console.log(e.currentTarget.id)
        }

        const saveStory = (e) => {
            fetch(`/api/stories/saveStory/${this.state.storyId}`, safeCredentials({
                method: 'PUT',
                body: JSON.stringify(this.state.storyData)
            }))
                .then(handleErrors)
                .then(res => {
                    console.log(res.success)
                })

        } 

        const renderInsightsAndArguments = () => {
            let insightsAndArguments = []

            for (let i = 1; i <= 3; i++) {
                insightsAndArguments.push(
                    <InsightAndArguments key={i} insightId={i} textChangeHandler={textChangeHandler} addSupportingDataButtonHandler={addSupportingDataButtonHandler} insightValue={window[`insight${i}`]} support1={window[`support${i}1`]} support2={window[`support${i}2`]} support3={window[`support${i}3`]} />
                )
            }

            return insightsAndArguments
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
                <Button onClick={saveStory}>
                    Save
                </Button>
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
            </>
        )
    }
}

export default StoryPage