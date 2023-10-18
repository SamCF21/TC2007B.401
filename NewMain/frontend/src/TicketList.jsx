import { Datagrid, List, TextField, Edit, EditButton, SimpleForm, TextInput, Create, SelectInput, DateInput, useRecordContext, useListContext, SimpleList, } from 'react-admin';
import { Box, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export const TicketList = (props) => (
    <List {...props}>
      <SimpleList
        primaryText={(record) => record.aula}
        secondaryText={(record) => 
            <div>
            <div>{record.coordinador}</div>
            <div>{record.categoria}</div>
          </div>}
        tertiaryText={(record) => (
          <div>
            <div>Prioridad: {record.prioridad}</div>
            <div>Estatus: {record.estatus}</div>
          </div>
        )}
        linkType="edit"
        leftAvatar={(record) => <AvatarField record={record} />}
      />
    </List>
  );
  
  
  const AvatarField = ({ record }) => {
    const imageUrl = "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg" //record.imagenUrl;
    return (
      <div>
        <img
          src={imageUrl}
          alt={record.coordinador}
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
          }}
        />
      </div>
    );
  };

// export const TicketList = () => (
//     <List>
//         <Datagrid rowClick="edit">
//             <TextField source="coordinador" label = "Coordinador" />
//             <TextField source="categoria" label = "Categoría"/>
//             <TextField source="subcategoria" label = "Subcategoría"/>
//             <TextField source="estatus" label = "Estatus"/>
//             <EditButton />
//         </Datagrid>
//     </List>
// );

export const TicketEdit = (props) => {
    const data = useRecordContext()
    console.log('d',data)
    const categorias = [
        { id: 'Servicios', name: 'Servicios' },
        { id: 'Digital', name: 'Digital' },
        { id: 'Infraestructura', name: 'Infraestructura' },
        { id: 'Recursos humanos', name: 'Recursos humanos' },
        { id: 'Beneficiarios', name: 'Beneficiarios' },
        { id: 'Mobiliario', name: 'Mobiliario' },
        { id: 'Seguridad', name: 'Seguridad' },
        { id: 'Materiales', name: 'Materiales' },
        { id: 'Fenómeno meteorológico', name: 'Fenómeno meteorológico' },
    ];
    const subcategorias_ = [
        { id: "Agua", name: "Agua", catId: "Servicios" },
        { id: "Luz", name: "Luz", catId: "Servicios" },
        { id: "Teléfono", name: "Teléfono", catId: "Servicios" },
        { id: "Basura", name: "Basura", catId: "Servicios" },
        { id: "Limpieza del Aula", name: "Limpieza del Aula", catId: "Servicios" },
        { id: "Internet, Servidores y Equipos ", name: "Internet, Servidores y Equipos" },
        { id: "Software", name: "Software", catId: "Digital" },
        { id: "Hardware", name: "Hardware", catId: "Digital" },
        { id: "Cámaras de seguridad", name: "Cámaras de seguridad", catId: "Digital" },
        { id: "Soporte técnico presencial y remoto", name: "Soporte técnico presencial y remoto", catId: "Digital" },
        { id: "Paredes", name: "Paredes", catId: "Infraestructura" },
        { id: "Techo", name: "Techo", catId: "Infraestructura" },
        { id: "Ventanas", name: "Ventanas", catId: "Infraestructura" },
        { id: "Puertas", name: "Puertas", catId: "Infraestructura" },
        { id: "Aulas en general", name: "Aulas en general", catId: "Infraestructura" },
        { id: "Permisos", name: "Permisos", catId: "Recursos humanos" },
        { id: "Asistencias", name: "Asistencias", catId: "Recursos humanos" },
        { id: "Salud", name: "Salud", catId: "Recursos humanos" },
        { id: "Trámites", name: "Trámites", catId: "Recursos humanos" },
        { id: "Honorarios", name: "Honorarios", catId: "Recursos humanos" },
        { id: "Asistencias", name: "Asistencias", catId: "Beneficiarios" },
        { id: "Documentación", name: "Documentación", catId: "Beneficiarios" },
        { id: "Apoyo académico", name: "Apoyo académico", catId: "Beneficiarios" },
        { id: "Salud", name: "Salud", catId: "Beneficiarios" },
        { id: "Seguridad, bulling", name: "Seguridad, bulling", catId: "Beneficiarios" },
        { id: "Sillas, butacas", name: "Sillas, butacas" },
        { id: "Escritorios", name: "Escritorios", catId: "Mobiliario" },
        { id: "Pizarrones", name: "Pizarrones", catId: "Mobiliario" },
        { id: "Cafetería", name: "Cafetería", catId: "Mobiliario" },
        { id: "Estantes, archiveros", name: "Estantes, archiveros", catId: "Mobiliario" },
        { id: "Delincuencia", name: "Delincuencia", catId: "Seguridad" },
        { id: "Robos", name: "Robos", catId: "Seguridad" },
        { id: "Vanadalismo", name: "Vanadalismo", catId: "Seguridad" },
        { id: "Imagen institucional", name: "Imagen institucional", catId: "Seguridad" },
        { id: "Educativos", name: "Educativos", catId: "Materiales" },
        { id: "Papelería", name: "Papelería", catId: "Materiales" },
        { id: "Limpieza", name: "Limpieza", catId: "Materiales" },
        { id: "Inundaciones", name: "Inundaciones", catId: "Fenómeno meteorológico" },
        { id: "Incendios", name: "Incendios", catId: "Fenómeno meteorológico" },
        { id: "Sismos", name: "Sismos", catId: "Fenómeno meteorológico" },

    ];
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [subcategorias, setSubcategorias] = useState(subcategorias_);

    const handleCategoriaChange = (newValue) => {
        setCategoriaSeleccionada(newValue.id);
        const filtradas = subcategorias_.filter((subcat) => subcat.catId === newValue.id);
        setSubcategorias(filtradas);
    };

    
    return (
        <Edit {...props}>
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
                                    value={categoriaSeleccionada}
                                    source="categoria"
                                    label="Categoría"
                                    choices={categorias}
                                    fullWidth
                                    isRequired
                                    onChange={(e) => {
                                        handleCategoriaChange({ id: e.target.value }); 
                                    }}
                                    
                                />
                            </Box>
                            <Box flex={1} ml="1em">
                                 <SelectInput
                                    value='subcategoria'
                                    source="subcategoria"
                                    label="Subcategoría"
                                    choices={subcategorias}
                                    fullWidth
                                    isRequired
                                    
                                />
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
};

export const TicketCreate = (props) => {
    const categorias = [
        { id: 'Servicios', name: 'Servicios' },
        { id: 'Digital', name: 'Digital' },
        { id: 'Infraestructura', name: 'Infraestructura' },
        { id: 'Recursos humanos', name: 'Recursos humanos' },
        { id: 'Beneficiarios', name: 'Beneficiarios' },
        { id: 'Mobiliario', name: 'Mobiliario' },
        { id: 'Seguridad', name: 'Seguridad' },
        { id: 'Materiales', name: 'Materiales' },
        { id: 'Fenómeno meteorológico', name: 'Fenómeno meteorológico' },
    ];

    const subcategorias = [
        { id: "Agua", name: "Agua", catId: "Servicios" },
        { id: "Luz", name: "Luz", catId: "Servicios" },
        { id: "Teléfono", name: "Teléfono", catId: "Servicios" },
        { id: "Basura", name: "Basura", catId: "Servicios" },
        { id: "Limpieza del Aula", name: "Limpieza del Aula", catId: "Servicios" },
        { id: "Internet, Servidores y Equipos ", name: "Internet, Servidores y Equipos" },
        { id: "Software", name: "Software", catId: "Digital" },
        { id: "Hardware", name: "Hardware", catId: "Digital" },
        { id: "Cámaras de seguridad", name: "Cámaras de seguridad", catId: "Digital" },
        { id: "Soporte técnico presencial y remoto", name: "Soporte técnico presencial y remoto", catId: "Digital" },
        { id: "Paredes", name: "Paredes", catId: "Infraestructura" },
        { id: "Techo", name: "Techo", catId: "Infraestructura" },
        { id: "Ventanas", name: "Ventanas", catId: "Infraestructura" },
        { id: "Puertas", name: "Puertas", catId: "Infraestructura" },
        { id: "Aulas en general", name: "Aulas en general", catId: "Infraestructura" },
        { id: "Permisos", name: "Permisos", catId: "Recursos humanos" },
        { id: "Asistencias", name: "Asistencias", catId: "Recursos humanos" },
        { id: "Salud", name: "Salud", catId: "Recursos humanos" },
        { id: "Trámites", name: "Trámites", catId: "Recursos humanos" },
        { id: "Honorarios", name: "Honorarios", catId: "Recursos humanos" },
        { id: "Asistencias", name: "Asistencias", catId: "Beneficiarios" },
        { id: "Documentación", name: "Documentación", catId: "Beneficiarios" },
        { id: "Apoyo académico", name: "Apoyo académico", catId: "Beneficiarios" },
        { id: "Salud", name: "Salud", catId: "Beneficiarios" },
        { id: "Seguridad, bulling", name: "Seguridad, bulling", catId: "Beneficiarios" },
        { id: "Sillas, butacas", name: "Sillas, butacas" },
        { id: "Escritorios", name: "Escritorios", catId: "Mobiliario" },
        { id: "Pizarrones", name: "Pizarrones", catId: "Mobiliario" },
        { id: "Cafetería", name: "Cafetería", catId: "Mobiliario" },
        { id: "Estantes, archiveros", name: "Estantes, archiveros", catId: "Mobiliario" },
        { id: "Delincuencia", name: "Delincuencia", catId: "Seguridad" },
        { id: "Robos", name: "Robos", catId: "Seguridad" },
        { id: "Vanadalismo", name: "Vanadalismo", catId: "Seguridad" },
        { id: "Imagen institucional", name: "Imagen institucional", catId: "Seguridad" },
        { id: "Educativos", name: "Educativos", catId: "Materiales" },
        { id: "Papelería", name: "Papelería", catId: "Materiales" },
        { id: "Limpieza", name: "Limpieza", catId: "Materiales" },
        { id: "Inundaciones", name: "Inundaciones", catId: "Fenómeno meteorológico" },
        { id: "Incendios", name: "Incendios", catId: "Fenómeno meteorológico" },
        { id: "Sismos", name: "Sismos", catId: "Fenómeno meteorológico" },

    ];
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
    const[subcategoriasFiltradas, setSubcategoriasFiltradas] = useState(subcategorias);
    const record = useRecordContext();


    const handleCategoriaChange = (newValue) => {
        setCategoriaSeleccionada(newValue.id);
        const filtradas = subcategorias.filter((subcat) => subcat.catId === newValue.id);
        setSubcategoriasFiltradas(filtradas);  
    };

    useEffect(() => {
        if (record && record.categoria) {
            setCategoriaSeleccionada(record.categoria);
            const filtradas = subcategorias.filter((subcat) => subcat.catId === record.categoria);
            setSubcategoriasFiltradas(filtradas);
        }
    }, [record]);

   

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
                                    choices={categorias} 
                                    fullWidth 
                                    isRequired
                                    onChange={(e) => {
                                        handleCategoriaChange({ id: e.target.value }); 
                                    }}
                                    initialValue={record ? undefined : categoriaSeleccionada}
                                    />
                            </Box>
                            <Box flex={1} ml="1em">
                            <SelectInput 
                                source="subcategoria"  
                                label="Subcategoría" 
                                choices={subcategoriasFiltradas}
                                fullWidth
                                isRequired
                                initialValue={record ? undefined : subcategoriasFiltradas[0]}
                                />
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


