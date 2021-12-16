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
import Grid from '@mui/material/Grid';

export default function StoryCard (props) {

    const storyID = props.storyID;
    const listitemMinWidth = '5px';
    const listTypographyVariant = 'body1';

    const editButtonHandler = () => {
        // call url dynamically created with info for the storyID
    }

    const deleteButtonHandler = () => {
        // call API that deleted the story based on the storyID
    }

    return (
        <Card sx={{width: props.width}} >
            <CardHeader title={props.title} />

            <CardContent sx={{py:0}} >
                <List disablePadding>

                    <ListItem disablePadding>
                        <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography variant={listTypographyVariant}>
                                {props.firstInsight}
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant={listTypographyVariant}>
                                {props.secondInsight}
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemIcon sx={{minWidth:listitemMinWidth}}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant={listTypographyVariant}>
                                {props.thirdInsight}
                            </Typography>
                        </ListItemText>
                    </ListItem>

                </List>
            </CardContent>

            <Grid item container alignItems='flex-end' justify='flex-end' direction='column' >
                <Box sx={{py:1, pr:1}} >
                    <IconButton aria-label="edit" onClick={editButtonHandler}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={deleteButtonHandler}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Grid>

        </Card>
    )
}