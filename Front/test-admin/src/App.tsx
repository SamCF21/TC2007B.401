import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { i18nProvider } from './i18nProvider';
//export const App = () => (
  //<Admin dataProvider={dataProvider}>
   //<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    //<Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
  //</Admin>
//);

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} i18nProvider={i18nProvider} >
        <Resource 
            name="posts"
            options = {{ label: 'Publicaciones'}}
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
        />
        <Resource
            name="users"
            options = {{ label: 'Usuarios'}}
            list={UserList}
            show={ShowGuesser}
            recordRepresentation="name"
            icon={UserIcon}
        />
    </Admin>
);