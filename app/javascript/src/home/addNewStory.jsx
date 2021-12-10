import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function AddNewStory (props) {

    const addNewStoryHandler = () => {
        // open URL for new sotry creation
    }

    return (
        <Box sx={{width:props.width}}>
            <IconButton aria-label='Add New Story' onClick={addNewStoryHandler} sx={{backgroundColor:'transparent !important'}}>
                <AddCircleIcon sx={{width:'40%', height:'40%'}} />
            </IconButton>
            <Typography
                variant='h6'
                sx={{fontWeight:'bold', textAlign: 'center'}}
            >
                Create New Story
            </Typography>
        </Box>
    )
}