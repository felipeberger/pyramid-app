import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ExplanationPopUp from "./explanationPopUp";

export default function InsightAndArguments (props) {
    const [openPopup, setOpenPopup] = useState(false)
    const [argument, setArgument] = useState('')
    const [openExplanationId, setOpenExplanationId] = useState('') 
    const [openExplanation, setOpenExplanation] = useState('')

    const textChangeHandler = props.textChangeHandler
    const addSupportingDataButtonHandler = props.addSupportingDataButtonHandler
    const insightValue = props.insightValue
    const support1 = props.support1
    const support1Disabled = support1 === '' ? true : false
    const explanation1 = props.explanation1
    const support2 = props.support2
    const support2Disabled = support2 === '' ? true : false
    const explanation2 = props.explanation2
    const support3 = props.support3
    const support3Disabled = support3 === '' ? true : false
    const explanation3 = props.explanation3
    const inputHeightForInsights = 4
    const inputHeightForSupport = 4

    const handleOpenPopup = (e) => {
        
        switch (e.currentTarget.id.slice(-1)) {
            case '1':
                setArgument(support1)
                setOpenExplanation(explanation1)
                break;
            case '2':
                setArgument(support2)
                setOpenExplanation(explanation2)
                break;
            case '3':
                setArgument(support3)
                setOpenExplanation(explanation3)
                break;
            default:
                break;
        }

        setOpenExplanationId(e.currentTarget.id)
        setOpenPopup(true)

    }

    const handleClosePopup = () => {
        setOpenPopup(false)
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

            <TextField 
                fullWidth 
                label={`Insight #${props.insightId}`}
                id={`insight${props.insightId}`}
                margin="normal"
                defaultValue={insightValue? insightValue : "Insight"}
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
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextField 
                            label={`Support #1`} 
                            id={`support${props.insightId}1`}
                            margin="normal"
                            defaultValue={support1 ? support1 : ""}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />
                        <Tooltip title='Add Explanation'>
                            <IconButton
                                component={support1Disabled ? "div" : undefined}
                                onClick={handleOpenPopup}
                                id={`explanation${props.insightId}1`}
                                disabled= {support1Disabled}
                            >
                                {support1Disabled? 
                                    <AddCircleOutlineIcon 
                                        sx={{height:'35px', width: '35px'}}
                                    /> : 
                                    <AddCircleOutlineIcon 
                                        sx={{height:'35px', width: '35px', color: '#064635'}}
                                    />                                    
                                }
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextField 
                            label={`Support #2`} 
                            id={`support${props.insightId}2`}
                            margin="normal"
                            defaultValue={support2? support2 : ""}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />
                        <Tooltip title='Add Explanation'>
                            <IconButton
                                component={support2Disabled ? "div" : undefined}
                                onClick={handleOpenPopup}
                                id={`explanation${props.insightId}2`}
                                disabled= {support2Disabled}
                            >
                                {support2Disabled? 
                                    <AddCircleOutlineIcon 
                                        sx={{height:'35px', width: '35px'}}
                                    /> : 
                                    <AddCircleOutlineIcon 
                                        sx={{height:'35px', width: '35px', color: '#064635'}}
                                    />
                                }
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextField 
                            label={`Support #3`} 
                            id={`support${props.insightId}3`}
                            margin="normal"
                            defaultValue={support3? support3 : ""}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />
                        <Tooltip title='Add Explanation'>
                            <IconButton
                                component={support3Disabled ? "div" : undefined}
                                onClick={handleOpenPopup}
                                id={`explanation${props.insightId}3`}
                                disabled= {support3Disabled}
                            >
                                {support3Disabled? 
                                    <AddCircleOutlineIcon 
                                        sx={{height:'35px', width: '35px'}}
                                    /> : 
                                    <AddCircleOutlineIcon 
                                        sx={{height:'35px', width: '35px', color: '#064635'}}
                                    />
                                }
                            </IconButton>
                        </Tooltip>
                    </Box>

                </Box>
            </Grid>

            <ExplanationPopUp open={openPopup} onClose={handleClosePopup} argument={argument} textChangeHandler={props.textChangeHandler} explanationId={openExplanationId} explanation={openExplanation} />

        </Grid>
        </>
    )
}
