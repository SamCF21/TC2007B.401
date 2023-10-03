
import { ThemeOptions } from '@mui/material/styles';
import indigo from '@mui/material/colors/indigo';
import pink from '@mui/material/colors/pink';
import red from '@mui/material/colors/red';

export const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
    },
};

export const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: indigo,
        secondary: pink,
        error: red,
    },
};
