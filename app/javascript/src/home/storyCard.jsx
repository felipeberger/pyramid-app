import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


export default function StoryCard (props) {

    const storyID = props.storyID;

    const editButtonHandler = () => {
        // call url dynamically created with info for the storyID
        console.log("edit")
    }

    const deleteButtonHandler = () => {
        // call API that deleted the story based on the storyID
        console.log("delete")
    }

    return (
        <Card sx={{width: '275px', bgcolor: 'teal', mx:1, my:1}} xs={{maxWidth: '100%'}}>
            <CardHeader title={props.title} />
            <CardContent sx={{pt:0, pb:0}}>
                <List disablePadding>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{minWidth:'5px'}}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography variant="body1">
                                {props.firstInsight}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{minWidth:'5px'}}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">
                                {props.secondInsight}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{minWidth:'5px'}}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">
                                {props.thirdInsight}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
                <Box className={'card_buttons'} sx={{ justifyContent: 'flex-end' }}>
                    <IconButton aria-label="edit" onClick={editButtonHandler}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={deleteButtonHandler}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}