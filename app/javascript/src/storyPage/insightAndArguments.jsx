import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { handleErrors, safeCredentials } from "../utils/fetchHelper";

export default function InsightAndArguments (props) {

    const textChangeHandler = props.textChangeHandler
    const addSupportingDataButtonHandler = props.addSupportingDataButtonHandler
    const insightValue = props.insightValue
    const support1 = props.support1  
    const support2 = props.support2
    const support3 = props.support3
    const inputHeightForInsights = 4
    const inputHeightForSupport = 4

    return (
        <>
        <Grid 
            item                              
            align='center'
            px={1}
            width='30%' 
        >
            <ArrowUpwardIcon />

            <TextField 
                fullWidth 
                label={`Insight #${props.insightId}`}
                id={`insight${props.insightId}`}
                margin="normal"
                defaultValue={insightValue? insightValue : "What is your first insight?"}
                onChange={textChangeHandler}
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
                            label={`Support #1`} 
                            id={`support${props.insightId}1`}
                            margin="normal"
                            defaultValue={support1 ? support1 : "Supporting information"}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />
                        <Button 
                            startIcon={<AddCircleOutlineIcon 
                            sx={{height:'35px', width: '35px'}}  />} 
                            onClick={addSupportingDataButtonHandler}
                            id={`button-support-${props.insightId}1`}
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
                            id={`support${props.insightId}2`}
                            margin="normal"
                            defaultValue={support2? support2 : "Supporting information"}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />
                        <Button 
                            startIcon={<AddCircleOutlineIcon 
                            sx={{height:'35px', width: '35px'}}  />} 
                            onClick={addSupportingDataButtonHandler}
                            id={`button-support-${props.insightId}2`}
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
                            id={`support${props.insightId}3`}
                            margin="normal"
                            defaultValue={support3? support3 : "Supporting information"}
                            fullWidth
                            onChange={textChangeHandler}
                            multiline
                            rows={inputHeightForSupport}
                        />
                        <Button 
                            onClick={addSupportingDataButtonHandler}
                            startIcon={<AddCircleOutlineIcon 
                            sx={{height:'35px', width: '35px'}}  />} 
                            id={`button-support-${props.insightId}3`}
                        >
                            <Typography>Add Data</Typography>
                        </Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
        </>
    )
}
