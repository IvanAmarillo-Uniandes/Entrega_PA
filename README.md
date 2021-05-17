# Entrega_PA
Repositorio para la entrega de pruebas automatizadas utilizando Cypress y Kraken.

El detalle de la instalacion, configurcion se encentra en la carpeta que coressponde a cada herramienta.

* [Instrucciones para la ejecución](../../wiki/Instrucciones-para-la-ejecución)

# Funcionalidades
| Id           | Nombre Funcionalidad                                              | Resumen                                                                                                      | Encargado |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| [F1](../../wiki/F1) | Gestionar Posts | Revisar el gestor de publicaciones y la actualización de estas |@ginettrosales| 
| [F2](../../wiki/F2) | Gestionar Pages | Revisar el gestor de páginas y la actualización de estas |@IvanAmarillo-Uniandes | 
| [F3](../../wiki/F3) | Gestionar Staff | Revisar el gestor de usuarios y la actualización de estos |@mgaitans| 
| [F4](../../wiki/F4) | Gestionar Tags | Revisar el gestor de tags y la actualización de estos |@CarlosPintoVacacela | 
| [F5](../../wiki/F5) | Gestor de Log In | Revisar el proceso de log in y autenticación para acceder al aplicativo | Todos |

# Escenarios de pruebas

## F1 - Gestionar Posts 

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

## F2 - Gestionar Pages

| ID           | Nombre                                              | Pasos                                                                                                      | Resultado esperado |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| E01 | Crear nuevo Page como Draft | 1. Iniciar sesión como administrador  | El Page se debe agregar en la lista de Pages y el estado debe ser Draft |
|     |                             | 2. Ir a la lista de Pages | |
|     |                             | 3. Crear nuevo Page | | 
|     |                             | 4. Agregar titulo del Page | | 
|     |                             | 5. Salir del editor de Page a ventana de Pages | |
| E02 | Editar titulo del Page existente | 1. Iniciar sesión como administrador | El titulo del Page debe mostrarse actualizado con éxito|
|     |                             | 2. Ir a la lista de Pages | |
|     |                             | 3. Seleccionar el Page existente  | | 
|     |                             | 4. Cambiar el título del Page| |  
|     |                             | 5. Salir del editor del Page a ventana de Pages | | 
| E03 | Publicar el Page existente | 1. Iniciar sesión como administrador | El estado del Page debe mostrar  "Published" |
|     |                             | 2. Ir a la lista de Pages | |
|     |                             | 3. Seleccionar un Page en estado "Draft" | | 
|     |                             | 4. Ingresar a menú de estado | |
|     |                             | 5. Click en botón para publicar Page | |
|     |                             | 6. Salir del editor del Page a ventana de Pages | |
| E04 | Agregar Tag a Page existente | 1. Iniciar sesión como administrador | El estado del Page debe mostrar el Tag ingresado |
|     |                             | 2. Ir a la lista de Pages | |
|     |                             | 3. Seleccionar el Page existente | | 
|     |                             | 4. Ingresar a menú de settings | |
|     |                             | 5. Agregar nuevo Tag en campo respectivo | |
|     |                             | 6. Salir del editor del Page a ventana de Pages | |  
| E05 | Eliminar Page | 1. Iniciar sesión como administrador | El Page debe ser eliminado con éxito|
|     |                             | 2. Ir a la lista de Page | |
|     |                             | 3. Seleccionar el Page existente | | 
|     |                             | 5. Ingresar al menú de settings | | 
|     |                             | 4. Seleccionar "Delete" para borrar el Page | |
|     |                             | 5. Salir del editor del Page a ventana de Pages | | 

##  F3 - Funcionalidad Gestionar Staff 

| ID| Nombre | Pasos | Resultado esperado |
| - |  -     |  -    | - |
|E01|**Invite people**| **1.** Ingresar al panel de Staff. <br> **2.** Seleccionar en el menú el link de Staff. <br> **3.** Hacer click en el botón Invite people. <br> **4.** Ingresar datos de Email Address. <br> **5.** Seleccionar el Role. <br> **6.** Darc click en el botón  Send invitation now.| El usuario es registrado y se puede ver en el listado de Staff users.  |
|E02|**Tets elimina los datos del primer usuarias invitadas**  |**1.** Al ver el listado de Staff users.<br>**2.** Hacer click en el link REVOKE.<br>**3.** El usuarias invitadas se elimina de la lista. | Se eliminan el registro del usuario seleccionado y desaparece del listado de Staff users. |
|E03|**Tets reenviar acceso de registro al usuario invitado** |**1.** Al ver el listado de Staff users. <br>**2.** Hacer click en el link RESEND. (Invitation sent: an hour ago, expires in 7 days)  <br>**3.** El usuarias invitadas se recibe de nuevo los datos de acceso.  | Se evidencia el mesaje de envio de correo al usuario reenviado.|
|E04|**Tets accede a los datos del usuario registrado**|**1.** Al ver el listado de ACTIVE USERS. <br>**2.** Hacer click en el sobre el.  <br>**3.** El usuario accede a esta opción se puede ver la información de: foto de perfil, Full Name, Slug, Email,  Location, Website, etc. | Al seleccionar el usuario del listado de de ACTIVE USERS, lo direcciona a la ventana donde se puede ver la información del usuario seleccionado. |

## F4 - Gestionar Tags

| ID           | Nombre                                              | Pasos                                                                                                      | Resultado esperado |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| E01 | Editar un tag publico | 1. Iniciar sesion como administrador  | El tag se debe actualizar con los datos ingresados y mostrar el botón Saved en color verde |
|     |                             | 2. Ir a la sección de Tags | |
|     |                             | 3. Seleccionar un tag  | | 
|     |                             | 4. Cambiar los campos del tag | | 
|     |                             | 5. Seleccionar Guardar | | 
| E02 | Editar un tag interno | 1. Iniciar sesion como administrador | El tag se debe actualizar con los datos ingresados y mostrar el botón Saved en color verde |
|     |                             | 2. Ir a la sección de tags | |
|     |                             | 3. Seleccionar la sección de Tags Internos  | | 
|     |                             | 4. Seleccionar un tag  | | 
|     |                             | 5. Cambiar los campos del tag | | 
|     |                             | 6. Seleccionar Guardar | | 
| E03 | Eliminar un tag publico | 1. Iniciar sesion como administrador | El tag se debe eliminar y desaparecer de la lista de tags |
|     |                             | 2. Ir a la sección de tags | |
|     |                             | 3. Seleccionar un tag | | 
|     |                             | 4. Presionar elbotón Eliminar | |  
|     |                             | 5. Confirmar eliminar | |  
| E04 | Ingresar demasiados caracteres en descripción de tag | 1. Iniciar sesion como administrador | Debe aparecer un mensaje con el error y no actualizarce la información|
|     |                             | 2. Ir a la sección de Tags | |
|     |                             | 3. Seleccionar un tag  | | 
|     |                             | 4. Ingresar mas de 500 caractere en la descripción | | 
|     |                             | 5. Seleccionar Guardar | | 

## F5 - Funcionalidad Gestor de LogIn

| ID| Nombre | Pasos | Resultado esperado |
| - |  -     |  -    | - |
|E01|**Ingresar credenciales incorrectas**| **1.** Ingresar a la pagina de logueo. <br> **2.** Se ingresa usuario, para este este el correo (incorrecto). <br> **3.** Se ingresa password, para este caso clave de acceso (incorresta). <br> **4.** Hacer click en el botón Ingresar. <br>| El Sistema le informa al usuario que sus credenciales de acceso son incorrectos, sin permitir el acceso.  |
|E02|**Debe iniciar sesión correctamente**  |**1.** Ingresar a la pagina de logueo. <br> **2.** Se ingresa usuario, para este este el correo. <br> **3.** Se ingresa password, para este caso clave de acceso. <br> **4.** Hacer click en el botón Ingresar. <br>| El Sistema le informa al usuario que sus credenciales de acceso son correctas, y le permite el acceso.  |
|E03|**Ingresar solo usuario**  |**1.** Ingresar a la pagina de logueo. <br> **2.** Se ingresa usuario, para este este el correo. <br>  **3.** Hacer click en el botón Ingresar. <br>| El Sistema le informa al usuario que debe completar todos los campos.  |
----
#Funcionalidades a comparar `Resembler.js`
- Login - E01 Ingresar credenciales incorrectas
- Post - E01 Crear post y publicar
- Pages - E01 Crear nuevo page como draf
- Staff - E01 Crear una invitacion
- Tags - E01 Editar un tag publico




