# cypress-test

### Instalcion
- Descargar repositorio
- Ir al directorio raiz de cypress `cd cypress-test`
- Instalar dependiencias `npm install`

### Configuracion
- Cambiar el valor de `baseUrl` en el `cypress.json` a la URL de la instacia de Ghost a probar
- Cambiar el valor de `email` y `pass` en el archivo `cypress.jon` con las credeciales que corresponden al usuario administrador correspondiente

### Ejecucion
- Correr `cypress open` seleccionar la carteta donde se encuentran las pruebas
- Ejecutar el archivo `.spec.js` que se quiere ejecutar
