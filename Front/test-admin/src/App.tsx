// App.tsx
import * as React from 'react';
import { useState } from 'react';
import { Admin, Resource, ShowGuesser, useTheme, defaultTheme, Layout} from 'react-admin';
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { i18nProvider } from './i18nProvider';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { Button } from '@mui/material';
import { MyAppBar } from './MyAppBar';
import { lightTheme, darkTheme } from './theme';

export const App = () => {
    const [theme, setTheme] = useState(lightTheme);

    const handleToggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };  

    return (
        <Admin
            authProvider={authProvider}
            dataProvider={dataProvider}
            dashboard={Dashboard}
            i18nProvider={i18nProvider}
            theme={theme}
            darkTheme={{ palette: { mode: "dark" } }}
            
        >
        <Button
             onClick={handleToggleTheme}
            style={{ backgroundColor: 'white', color: 'black' }}
>
            {theme === lightTheme ? 'Dark' : 'Light'} Theme
        </Button>

            <Resource
                name="posts"
                options={{ label: 'Publicaciones' }}
                list={PostList}
                edit={PostEdit}
                create={PostCreate}
                icon={PostIcon}
            />
            <Resource
                name="users"
                options={{ label: 'Usuarios' }}
                list={UserList}
                show={ShowGuesser}
                recordRepresentation="name"
                icon={UserIcon}
            />
        </Admin>
    );
};
