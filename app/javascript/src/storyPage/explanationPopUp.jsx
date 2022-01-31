import React, {useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ExplanationPopUp (props) {

    return (
        <> 
        <Dialog open={props.open} onClose={props.onClose} >
            <DialogTitle>Please add explanation for the following argument:</DialogTitle>
            <DialogContent>
                <DialogContentText pb={1}>
                    {props.argument}
                </DialogContentText>
                <TextField 
                    fullWidth
                    autoFocus 
                    label="Explanation" 
                    id={props.explanationId}
                    margin="normal"
                    defaultValue={props.explanation? props.explanation : ''}
                    onChange={props.textChangeHandler}
                    multiline
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}