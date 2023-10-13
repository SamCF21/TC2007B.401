import { Datagrid, List, TextField, Edit, EditButton, SimpleForm, TextInput, Create, SelectInput, DateInput} from 'react-admin';
import { Box, Grid, Typography } from '@mui/material';


export const TicketList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="coordinador" label = "Coordinador" />
            <TextField source="categoria" label = "Categoría"/>
            <TextField source="subcategoria" label = "Subcategoría"/>
            <TextField source="estatus" label = "Estatus"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const TicketEdit = () => (
    <Edit>
        <SimpleForm>
            <Grid container width="100%" spacing={2}>
                <Grid item xs={8}>
                    <Box display="flex">
                        <Box flex={1}>
                            <TextInput source="id" label="ID" disabled/>
                        </Box>
                    </Box>
                    <Box display = "flex">
                        <Box flex={1} mr="1em">
                            <TextInput source="coordinador" label="Coordinador" fullWidth disabled/>
                        </Box> 
                        <Box flex={1} ml="1em">
                            <TextInput source="aula" label="Aula" fullWidth disabled/>
                        </Box>
                    </Box>
                    <Box mt="0.5em" />
                    <Box display="flex">
                        <Box flex={1} mr="1em">
                            <DateInput source="fecha" label="Fecha" disabled/>
                        </Box> 
                    </Box>
                    <Box display="flex">
                        <Box flex={1} mr="1em">
                            <SelectInput 
                                source="categoria" 
                                label="Categoría" 
                                choices = {[
                                    { id: 'Servicios', name: 'Servicios' },
                                    { id: 'Digital', name: 'Digital' },
                                    { id: 'Infraestructura', name: 'Infraestructura' },
                                    { id: 'Recursos humanos', name: 'Recursos humanos' },
                                    { id: 'Beneficiarios', name: 'Beneficiarios' },
                                    { id: 'Mobiliario', name: 'Mobiliario' },
                                    { id: 'Seguridad', name: 'Seguridad' },
                                    { id: 'Materiales', name: 'Materiales' },
                                    { id: 'Fenómeno meteorológico', name: 'Fenómeno meteorológico' },
                                ]}
                                fullWidth 
                                isRequired/>
                        </Box>
                        <Box flex={1} ml="1em">
                            <SelectInput 
                                source="subcategoria"  
                                label="Subcategoría" 
                                choices = {[
                                    { id: 'Agua', name: 'Agua' },
                                    { id: 'Luz', name: 'Luz' },
                                ]}
                                fullWidth 
                                isRequired/>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box flex={1} mr="1em" >
                            <SelectInput
                                source="estatus"
                                label="Estatus"
                                choices={[
                                    { id: 'Nuevo', name: 'Nuevo' },
                                    { id: 'Abierto', name: 'Abierto' },
                                    { id: 'Pendiente', name: 'Pendiente' },
                                    { id: 'En espera', name: 'En espera' },
                                    { id: 'Resuelto', name: 'Resuelto' }
                                ]}
                                fullWidth
                                isRequired/>
                        </Box>
                        <Box flex={1} ml="1em">
                            <SelectInput
                                source="prioridad"
                                label="Prioridad"
                                choices={[
                                    { id: 'Baja', name: 'Baja' },
                                    { id: 'Media', name: 'Media' },
                                    { id: 'Alta', name: 'Alta' },
                                    { id: 'Crítico', name: 'Crítico' }
                                ]}
                                fullWidth
                                isRequired/>
                        </Box>
                    </Box>
                    <Box mt="0.5em" />
                    <Box display="flex">
                        <Box flex={1} mr="1em">
                            <TextInput source="numIntermediarios" label="Número de Intermediarios" fullWidth />
                        </Box>
                        <Box flex={1} ml="1em">
                            <TextInput source="numOficio" label="Número de Oficio" 
                            fullWidth
                            helperText = "*En caso de que aplique."
                             />
                        </Box>
                    </Box>
                    <Box mt="0.7em" />
                    <Box display="flex">
                        <Box flex={2}>
                            <TextInput source="descripcion" label="Descripción" multiline rows={3} fullWidth />
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box flex={2}>
                            <TextInput source="comentario" label="Comentario" multiline rows={3} fullWidth />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </SimpleForm>
    </Edit>
);

export const TicketCreate = (props) => {
    const rowStyle = { display: 'flex', flexDirection: 'row' };
    const fieldStyle = { flex: 1, margin: '4px' };
  
    return (
        <Create {...props}>
            <SimpleForm>
                <Grid container width="100%" spacing={2}>
                    <Grid item xs={8}>
                        <Box display="flex">
                            <Box flex={1} mr="1em">
                                <TextInput source="coordinador" label="Coordinador" fullWidth/>
                            </Box>
                            <Box flex={1} ml="1em">
                                <TextInput source="aula" label="Aula" fullWidth/>
                            </Box>
                        </Box>
                        <Box mt="0.5em" />
                        <Box display="flex">
                            <Box flex={1} mr="1em">
                                <DateInput source="fecha" label="Fecha" isRequired/>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={1} mr="1em">
                                <SelectInput 
                                    source="categoria" 
                                    label="Categoría" 
                                    choices = {[
                                        { id: 'Servicios', name: 'Servicios' },
                                        { id: 'Digital', name: 'Digital' },
                                        { id: 'Infraestructura', name: 'Infraestructura' },
                                        { id: 'Recursos humanos', name: 'Recursos humanos' },
                                        { id: 'Beneficiarios', name: 'Beneficiarios' },
                                        { id: 'Mobiliario', name: 'Mobiliario' },
                                        { id: 'Seguridad', name: 'Seguridad' },
                                        { id: 'Materiales', name: 'Materiales' },
                                        { id: 'Fenómeno meteorológico', name: 'Fenómeno meteorológico' },
                                    ]}
                                    fullWidth 
                                    isRequired/>
                            </Box>
                            <Box flex={1} ml="1em">
                            <SelectInput 
                                source="subcategoria"  
                                label="Subcategoría" 
                                choices = {[
                                    { id: 'Agua', name: 'Agua' },
                                    { id: 'Luz', name: 'Luz' },
                                ]}
                                fullWidth
                                isRequired/>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={1} mr="1em">
                                <SelectInput
                                    source="estatus"
                                    label="Estatus"
                                    choices={[
                                        { id: 'Nuevo', name: 'Nuevo' },
                                        { id: 'Abierto', name: 'Abierto' },
                                        { id: 'Pendiente', name: 'Pendiente' },
                                        { id: 'En espera', name: 'En espera' },
                                        { id: 'Resuelto', name: 'Resuelto' }
                                    ]}
                                    fullWidth
                                    isRequired
                                />
                            </Box>
                            <Box flex={1} ml="1em">
                                <SelectInput
                                    source="prioridad"
                                    label="Prioridad"
                                    choices={[
                                        { id: 'Baja', name: 'Baja' },
                                        { id: 'Media', name: 'Media' },
                                        { id: 'Alta', name: 'Alta' },
                                        { id: 'Crítico', name: 'Crítico' }
                                    ]}
                                    fullWidth
                                    isRequired
                                />
                            </Box>
                        </Box>
                        <Box mt="0.5em" />
                        <Box display="flex">
                            <Box flex={1} mr="1em">
                                <TextInput source="numIntermediarios" label="Número de Intermediarios" fullWidth />
                            </Box>
                            <Box flex={1} ml="1em">
                                <TextInput source="numOficio" label="Número de Oficio" 
                                fullWidth 
                                helperText = "*En caso de que aplique."/>
                            </Box>
                        </Box>
                        <Box mt="0.5em" />
                        <Box display="flex">
                            <Box flex={2}>
                                <TextInput source="descripcion" label="Descripción" multiline rows={3} fullWidth isRequired/>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={2}>
                                <TextInput source="comentario" label="Comentario" multiline rows={3} fullWidth />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </SimpleForm>
        </Create>
    );
};
