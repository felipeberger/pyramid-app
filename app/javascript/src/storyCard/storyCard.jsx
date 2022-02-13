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
import Tooltip from '@mui/material/Tooltip';
import { handleErrors, safeCredentials } from "../utils/fetchHelper";

export default function StoryCard (props) {
    const storyId = props.storyId;
    const listitemMinWidth = '5px';
    const listTypographyVariant = 'body1';

    const editButtonHandler = () => {
        window.location = `/story/${storyId}`
    }

    const deleteButtonHandler = () => {
        fetch(`/api/stories/delete/${props.storyId}`, safeCredentials({
            method: 'DELETE'
        }))
            .then(handleErrors)
            .then(res => {
                props.updateHome(props.storyId)
            })
    }

    return (
        <Card sx={{maxWidth: props.width}}>
            <CardHeader title={props.title} titleTypographyProps={{variant: 'h5'}} />
            <Box 
                display='flex' 
                maxWidth={props.width}
                flexDirection='column'
                justifyContent='space-between'
            >
                <Box
                    justifyContent='flex-start'
                >
                    <CardContent sx={{py:0, px: 1}} >
                        <List disablePadding>

                            <ListItem disablePadding>
                                <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography variant={listTypographyVariant} noWrap>
                                        Situation: {props.situation}
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant={listTypographyVariant} noWrap>
                                        Complication: {props.complication}
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant={listTypographyVariant} noWrap>
                                        Question: {props.question}
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography variant={listTypographyVariant} noWrap>
                                        Answer: {props.answer}
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                        </List>
                    </CardContent>
                </Box>
                <Box
                    display='flex'
                    justifyContent='flex-end'
                >
                    <Tooltip title="Edit">
                        <IconButton aria-label="edit" onClick={editButtonHandler}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteButtonHandler}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Card>

    )
}