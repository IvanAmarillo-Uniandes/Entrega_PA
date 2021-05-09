# Entrega_PA
Repositorio para la entrega de pruebas automatizadas utilizando Cypress y Kraken.

El detalle de la instalacion, configurcion se encentra en la carpeta que coressponde a cada herramienta.

# Funcionalidades
| Id           | Nombre Funcionalidad                                              | Resumen                                                                                                      | Encargado |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| [F1](F1) | Gestionar Posts | Revisar el gestor de publicaciones y la actualización de estas |@ginettrosales| 
| [F2](F2) | Gestionar Pages | Revisar el gestor de páginas y la actualización de estas |@IvanAmarillo-Uniandes | 
| [F3](F3) | Gestionar Staff | Revisar el gestor de usuarios y la actualización de estos |@mgaitans| 
| [F4](F4) | Gestionar Tags | Revisar el gestor de tags y la actualización de estos |@CarlosPintoVacacela | 
| [F5](F5) | Gestor de Log In | Revisar el proceso de log in y autenticación para acceder al aplicativo | Todos |

# Escenarios de pruebas

## F1

| ID           | Nombre                                              | Pasos                                                                                                      | Resultado esperado |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| E01 | Crear nuevo post y publicar | 1. Iniciar sesion como administrador  | El post se debe agregar en la lista de Post y el estado debe ser Published |
|     |                             | 2. Ir a la lista de Posts | |
|     |                             | 3. Crear nuevo post  | | 
|     |                             | 4. Agregar titulo del post | | 
|     |                             | 5. Seleccionar post con estado de "Draft" | | 
|     |                             | 6. Publicar Post | | 
| E02 | Editar titulo del Post | 1. Iniciar sesion como administrador | El titulo de la pagina debe ser actualizado con exito|
|     |                             | 2. Ir a la lista de Posts | |
|     |                             | 3. Seleccionar un Post  | | 
|     |                             | 4. Agregar el nuevo titulo| |  
|     |                             | 5. Publicar Post | | 
| E03 | Cambiar el estado del Post a unpublished | 1. Iniciar sesion como administrador | El estado del post se debe actualizar a "unpublished" |
|     |                             | 2. Ir a la lista de Posts | |
|     |                             | 3. Seleccionar un Post con estado "Published" | | 
|     |                             | 4. Cambiar estado a "unpublished" | |  
| E04 | Eliminar post | 1. Iniciar sesion como administrador | El Post debe ser eliminado con exito|
|     |                             | 2. Ir a la lista de Posts | |
|     |                             | 3. Seleccionar un Post  | | 
|     |                             | 5. Abrir configuraciones | | 
|     |                             | 4. Seleccionar "Delete post" | |
