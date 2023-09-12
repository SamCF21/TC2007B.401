import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Button } from '@mui/material';
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
        <form>
            <h1>Login Page!</h1>
            <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit} type="submit"> Login </Button>
        </form>
    );
};

export default loginpage;
