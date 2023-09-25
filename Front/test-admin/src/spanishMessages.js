const spanishMessages = {
    ra: {
        action: {
            add_filter: 'Agregar filtro',
            add: 'Agregar',
            back: 'Retroceder',
            bulk_actions: '1 elemento seleccionado |||| %{smart_count} elementos seleccionados',
            cancel: 'Cancelar',
            clear_array_input: 'Borrar lista',
            clear_input_value: 'Borrar valor',
            clone: 'Clonar',
            confirm: 'Confirmar',
            create: 'Crear',
            create_item: 'Crear %{item}',
            delete: 'Eliminar',
            edit: 'Editar',
            export: 'Exportar',
            list: 'Lista',
            refresh: 'Volver a cargar',
            remove_filter: 'Quitar este filtro',
            remove_all_filters: 'Quitar todos los filtros',
            remove: 'Quitar',
            save: 'Guardar',
            search: 'Buscar',
            select_all: 'Seleccionar todo',
            select_row: 'Seleccionar esta fila',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Deshacer',
            unselect: 'Deseleccionar',
            expand: 'Expandir',
            close: 'Cerrar',
            open_menu: 'Abrir menú',
            close_menu: 'Cerrar menú',
            update: 'Actualizar',
            move_up: 'Mover arriba',
            move_down: 'Mover abajo',
            open: 'Abrir',
            toggle_theme: 'Cambiar Tema',
            select_columns: 'Columnas',
            update_application: 'Volver a cargar aplicación',
        },
        boolean: {
            true: 'Sí',
            false: 'No',
            null: ' ',
        },
        page: {
            create: 'Crear %{name}',
            dashboard: 'Tablero',
            edit: '%{name} %{recordRepresentation}',
            error: 'Something went wrong',
            list: '%{name}',
            loading: 'Cargando',
            not_found: 'No Encontrado',
            show: '%{name} %{recordRepresentation}',
            empty: 'No %{name} existe aún.',
            invite: 'Quisieras añadir uno?',
        },
        input: {
            file: {
                upload_several:
                    'Arrastra archivos para cargarlos, o haz click para seleccionar uno.',
                upload_single: 'Arrastra un archivo para cargarlo, o haz click para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Arrastra imágenes para cargarlas, o haz click para seleccionar una.',
                upload_single:
                    'Arrastra una imagen para cargarla, o haz click para seleccionarla.',
            },
            references: {
                all_missing: 'No es posible encontrar datos de referencia.',
                many_missing:
                    'Al menos una de las referencias asociadas ya no parece estar disponible.',
                single_missing:
                    'La reference asociada ya no parece estar disponible.',
            },
            password: {
                toggle_visible: 'Ocultar contraseña',
                toggle_hidden: 'Guardar contraseña',
            },
        },
        message: {
            about: 'Acerca de',
            are_you_sure: 'Estás seguro/a?',
            auth_error:
                'Ocurrió un error al validar el token de autenticación.',
            bulk_delete_content:
                'Estás seguro/a de que quieres eliminar %{name}? |||| Estás seguro/a de que quieres eliminar %{smart_count} elementos?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name}',
            bulk_update_content:
                'Estás seguro/a de que quieres cargar %{name}? |||| Estás seguro/a de que quieres cargar %{smart_count} elementos?',
            bulk_update_title:
                'Actualizar %{name} |||| Actualizar %{smart_count} %{name}',
            clear_array_input: 'Estás seguro/a de que quieres borrar toda la lista?',
            delete_content: 'Estás seguro/a de que quieres borrar este elemento?',
            delete_title: 'Borrar %{name} #%{id}',
            details: 'Detalles',
            error:
                "Ocurrió un error de cliente y la acción no pudo ser completada.",

            invalid_form: 'El formulario no es válida. Por favor revisa si hay errores',
            loading: 'La página está cargando, un momento por favor.',
            no: 'No',
            not_found:
                'Puede que hayas escrito la URL incorrectamente, o que hayas entrado a un enlace inexistente.',
            yes: 'Sí',
            unsaved_changes:
                "Algunos de tus cambios no fueron guardados. Estás seguro/a de que quieres ignorarlos?",
        },
        navigation: {
            no_results: 'No se encontraron resultados',
            no_more_results:
                'El número de página %{page} está fuera del límite. Intenta con la página anterior.',
            page_out_of_boundaries: 'Número de página %{page} fuera del límite',
            page_out_from_end: 'No se puede ir más allá de la última página',
            page_out_from_begin: 'No se puede ir antes de la página 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} de más de %{offsetEnd}',
            current_page: 'Página %{page}',
            page: 'Ir a la página %{page}',
            first: 'Ir a la primera página',
            last: 'Ir a la última página',
            next: 'Ir a la siguiente página',
            previous: 'Ir a la página anterior',
            page_rows_per_page: 'Filas por página:',
            skip_nav: 'Saltar a contenido',
        },
        sort: {
            sort_by: 'Ordenar por %{field} %{order}',
            ASC: 'ascendiente',
            DESC: 'descendiente',
        },
        auth: {
            auth_check_error: 'Por favor inicia sesión para continuar',
            user_menu: 'Perfil',
            username: 'Nombre de usuario',
            password: 'Contraseña',
            sign_in: 'Iniciar sesión',
            sign_in_error: 'Autenticación falló, por favor intenta de nuevo',
            logout: 'Cerrar sesión',
        },
        notification: {
            updated: 'Elemento actualizado |||| %{smart_count} elementos actualizados',
            created: 'Elemento creado',
            deleted: 'Elemento eliminado |||| %{smart_count} elementos eliminados',
            bad_item: 'Elemento incorrecto',
            item_doesnt_exist: 'Elemento no existe',
            http_error: 'Error de comunicación de servidor',
            data_provider_error:
                'Error de provedor de datos. Checa la consola para más detalles.',
            i18n_error:
                'No se pueden cargar las traducciones para el lenguaje especificado',
            canceled: 'Acción cancelada',
            logged_out: 'Tu sesión ha teminado, por favor conéctate de nuevo.',
            not_authorized: "No estás autorizado para acceder a este recurso.",
            application_update_available: 'Una nueva versión está disponible.',
        },
        validation: {
            required: 'Requerido',
            minLength: 'Debe tener %{min} caracteres como mínimo',
            maxLength: 'Debe tener %{max} caracteres o menos',
            minValue: 'Debe tener al menos %{min}',
            maxValue: 'Debe tener %{max} o menos',
            number: 'Debe ser un número',
            email: 'Debe ser una dirección de correo electrónico válida',
            oneOf: 'Debe ser uno/a de: %{options}',
            regex: 'Debe conformarse al formato (regexp): %{pattern}',
            unique: 'Debe ser único/a',
        },
        saved_queries: {
            label: 'Búsquedas guardadas',
            query_name: 'Nombre de la búsqueda',
            new_label: 'Guardar búsqueda actual...',
            new_dialog_title: 'Guardar búsqueda actual como',
            remove_label: 'Borrar búsqueda guardada',
            remove_label_with_name: 'Borrar búsqueda "%{name}"',
            remove_dialog_title: 'Borrar búsqueda guardada?',
            remove_message:
                'Estás seguro/a de que quieres borrar ese elemento de tu lista de búsquedas guardadas?',
            help: 'Filtrar la lista y guardar esta búsqueda para después',
        },
        configurable: {
            customize: 'Personalizar',
            configureMode: 'Configurar esta página',
            inspector: {
                title: 'Inspector',
                content: 'Pasar el cursos sobre los elementos UI de la applicación para configurarlos',
                reset: 'Restablecer Ajustes',
                hideAll: 'Ocultar Todo',
                showAll: 'Mostrar Todo',
            },
            Datagrid: {
                title: 'Cuadrícula de datos',
                unlabeled: 'Columna sin nombre #%{column}',
            },
            SimpleForm: {
                title: 'Formulario',
                unlabeled: 'Entrada sin nombre #%{input}',
            },
            SimpleList: {
                title: 'Lista',
                primaryText: 'Texto primario',
                secondaryText: 'Texto secundario',
                tertiaryText: 'Texto terciario',
            },
        },
    },
};

export default spanishMessages;
