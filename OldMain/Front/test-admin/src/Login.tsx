import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Button, TextField, Grid, Typography, Paper} from '@mui/material';
import { useInput } from 'react-admin';

const loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        login({ password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <Grid
        container
        justifyContent = "center"
        alignItems = "center"
        style = {{ height: "100vh"}}
        component = "div">

            <Grid item xs = {12} sm = {6} md = {4} lg = {3} xl = {2}>
                <Paper elevation = {4} style = {{ padding: 20}}>
                    <Typography variant = "h4" align = "center" gutterBottom>
                        Login Page
                    </Typography>
                
                    <TextField
                        fullWidth
                        label = "Email"
                        variant = "outlined"
                        margin = "normal"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label = "Password"
                        variant = "outlined"
                        margin = "normal"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        type = "password"
                    />
                    <Button
                        fullWidth
                        variant = "contained"
                        color = "primary"
                        style={{ marginTop: 16 }}
                        onClick = {handleSubmit}>
                        Login
                    </Button>
                </Paper>
             </Grid>   
        </Grid> 
    );  
};

export default loginpage;
