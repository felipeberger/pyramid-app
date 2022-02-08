import React, {useState, useEffect} from "react";
import { loginUser, checkUser } from './magic';
import { FormGroup, FormControl, Input, InputLabel, Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { handleErrors, safeCredentials } from "../utils/fetchHelper";

export default function Authenticate () {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect( () => {
      if(!localStorage.getItem('storedUserEmail')) {    
        checkUser( (metadata) => {
          if (metadata.isLoggedIn) {
              localStorage.setItem('storedUserEmail', metadata.email)
              setLoggedIn(true)
          } else {
              setLoggedIn(false)
          }
        })
      } else {
        setLoggedIn(true)
      }
    }, [])

    const createNewUserOnDatabase = async (userEmail) => {
      fetch(`/api/users/new?email=${userEmail}`, safeCredentials({
        method: 'PUT'
      }))
      .then(handleErrors)
      .then(res => {
        console.log(res)
      })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (!email) {
          setLoading(false);
          setError('Email is Invalid');
          return;
        }
        try {
          await loginUser(email)
          setLoading(false)
          setLoggedIn(true)
          await createNewUserOnDatabase(email)
          window.location = '/'
          
        } catch (error) {
          setError('Unable to log in');
          console.error(error);
        }
      };

    const handleChange = (event) => {
      setEmail(event.target.value);
    };

    const alreadyLoggedIn = () => {
      return (
        <Box
          textAlign='center'
        >
          <Typography
            variant="h4"
          >
            You are already logged in! 🎉🥳🎉
          </Typography>
        </Box>
      )
    }

    const notLoggedIn = () => {
      return (
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
            variant="outlined"
            size="large"
            sx={{my:3}}
          >
            {loggedIn? 'Logged In' : loading ? 'Loading...' : 'Log In / Sign Up' }
          </Button>
        </FormGroup>
      )
    }

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
            {loggedIn? alreadyLoggedIn() : notLoggedIn()}
          </Box>
        </Grid>
        </>
    )
}
