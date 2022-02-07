import React, {useState} from "react";
import { loginUser, checkUser } from './magic';
import { Typography, FormGroup, TextField, FormControl, FormLabel, Input, InputLabel, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Authenticate () {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (!email) {
          setLoading(false);
          setError('Email is Invalid');
          return;
        }
        try {
          await loginUser(email);
          setLoading(false);
          setLoggedIn(true)
          window.location = '/'
          
        } catch (error) {
          setError('Unable to log in');
          console.error(error);
        }
      };

    const handleChange = (event) => {
      setEmail(event.target.value);
    };

    return (
        <>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignContent='center'
          minHeight='87vh' 
        >
          <Box
            width='50%'
            component='form'
            onSubmit={handleSubmit}
            py={5}
          >
            <FormGroup >
                <FormControl>
                  <InputLabel>Email Address</InputLabel>
                  <Input 
                    id="emailInput" 
                    type="email" 
                    value={email}
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  type="submit"
                >
                  {loading ? 'Loading...' :  loggedIn? 'Logged In' : 'Log In / Sign Up' }
                </Button>
            </FormGroup>
          </Box>
        </Grid>
        </>
    )
}
