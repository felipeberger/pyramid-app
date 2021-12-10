import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const themeOptions = createTheme ({
    palette: {
        type: 'light',
        primary: {
          main: '#064635',
        },
        secondary: {
          main: '#f50000',
        },
        error: {
          main: '#ffc286',
        },
        success: {
          main: '#4c53af',
        },
        text: {
          primary: '#121212',
          secondary: 'rgba(18,18,18,0.7)',
        },
        background: {
          default: '#fafafa',
          paper: '#f1f1f1',
        },
      },
  });


export default function CustomTheme (props) {

    return (
        <ThemeProvider theme={themeOptions}>
            {props.children}
        </ThemeProvider>
    )
}