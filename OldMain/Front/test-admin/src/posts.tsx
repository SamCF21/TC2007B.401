import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, TextInput, Create, SelectInput} from "react-admin";
import { useRecordContext} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />
        <TextField source="title" />
        <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
            <SelectInput source="prioridad" label="Prioridad" choices={[
                { id: 'baja', name: 'Baja' },
                { id: 'media', name: 'Media' },
                { id: 'alta', name: 'Alta' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
      <Create>
        <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
          <SelectInput source="prioridad" label="Prioridad" choices={[
                { id: 'baja', name: 'Baja' },
                { id: 'media', name: 'Media' },
                { id: 'alta', name: 'Alta' },
            ]} />
        </SimpleForm>
      </Create>
    );

    const PostTitle = () => {
        const record = useRecordContext();
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
      };



