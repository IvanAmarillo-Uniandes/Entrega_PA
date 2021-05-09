# Entrega_PA
Repositorio para la entrega de pruebas automatizadas utilizando Cypress y Kraken.

El detalle de la instalacion, configurcion se encentra en la carpeta que coressponde a cada herramienta.

# Funcionalidades
| Id           | Nombre Funcionalidad                                              | Resumen                                                                                                      | Encargado |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| [F1](../../wiki/F1) | Gestionar Posts | Revisar el gestor de publicaciones y la actualización de estas |@ginettrosales| 
| [F2](../../wiki/../../wiki/F2) | Gestionar Pages | Revisar el gestor de páginas y la actualización de estas |@IvanAmarillo-Uniandes | 
| [F3](../../wiki/F3) | Gestionar Staff | Revisar el gestor de usuarios y la actualización de estos |@mgaitans| 
| [F4](../../wiki/F4) | Gestionar Tags | Revisar el gestor de tags y la actualización de estos |@CarlosPintoVacacela | 
| [F5](../../wiki/F5) | Gestor de Log In | Revisar el proceso de log in y autenticación para acceder al aplicativo | Todos |

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

##  F3 Funcionalidad Gestionar Staff 

| ID| Nombre | Pasos | Resultado esperado |
| - |  -     |  -    | - |
|E01|**Invite people**| **1.** Ingresar al panel de Staff. <br> **2.** Seleccionar en el menú el link de Staff. <br> **3.** Hacer click en el botón Invite people. <br> **4.** Ingresar datos de Email Address. <br> **5.** Seleccionar el Role. <br> **6.** Darc click en el botón  Send invitation now.| El usuario es registrado y se puede ver en el listado de Staff users.  |
|E02|**Tets elimina los datos del primer usuarias invitadas**  |**1.** Al ver el listado de Staff users.<br>**2.** Hacer click en el link REVOKE.<br>**3.** El usuarias invitadas se elimina de la lista. | Se eliminan el registro del usuario seleccionado y desaparece del listado de Staff users. |
|E03|**Tets reenviar acceso de registro al usuario invitado** |**1.** Al ver el listado de Staff users. <br>**2.** Hacer click en el link RESEND. (Invitation sent: an hour ago, expires in 7 days)  <br>**3.** El usuarias invitadas se recibe de nuevo los datos de acceso.  | Se evidencia el mesaje de envio de correo al usuario reenviado.|
|E04|**Tets accede a los datos del usuario registrado**|**1.** Al ver el listado de ACTIVE USERS. <br>**2.** Hacer click en el sobre el.  <br>**3.** El usuario accede a esta opción se puede ver la información de: foto de perfil, Full Name, Slug, Email,  Location, Website, etc. | Al seleccionar el usuario del listado de de ACTIVE USERS, lo direcciona a la ventana donde se puede ver la información del usuario seleccionado. |



## F5 - Funcionalidad Gestor de LogIn

| ID| Nombre | Pasos | Resultado esperado |
| - |  -     |  -    | - |
|E01|**Ingresar credenciales incorrectas**| **1.** Ingresar a la pagina de logueo. <br> **2.** Se ingresa usuario, para este este el correo (incorrecto). <br> **3.** Se ingresa password, para este caso clave de acceso (incorresta). <br> **4.** Hacer click en el botón Ingresar. <br>| El Sistema le informa al usuario que sus credenciales de acceso son incorrectos, sin permitir el acceso.  |
|E02|**Debe iniciar sesión correctamente**  |**1.** Ingresar a la pagina de logueo. <br> **2.** Se ingresa usuario, para este este el correo. <br> **3.** Se ingresa password, para este caso clave de acceso. <br> **4.** Hacer click en el botón Ingresar. <br>| El Sistema le informa al usuario que sus credenciales de acceso son correctas, y le permite el acceso.  |
