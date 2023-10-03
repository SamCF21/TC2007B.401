import { FC } from 'react';
import { AppBar, ToggleThemeButton } from 'react-admin';

export const MyAppBar: FC = () => (
    <AppBar toolbar={<ToggleThemeButton />} />
);
