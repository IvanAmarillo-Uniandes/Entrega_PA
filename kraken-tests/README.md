# kraken-tests

Las pruebas estan creadas para Ghost de manera local `v3.3.0` y `v3.42.5` para la instalacion siga las instrucciones siguientes instrucciones: https://ghost.org/docs/ghost-cli/#ghost-install.

### Instalcion
- Descargar e installar maquina virtual https://zenodo.org/record/4739209/files/Ubuntu20Light_copy.vdi?download=1 (Recomendado)
- Seguir las instrucciones de la siguiente documentacion https://misovirtual.virtual.uniandes.edu.co/codelabs/kraken-testing-web/index.html#0
- Si tiene ubuntu puede seguir los siguientes pasos https://docs.google.com/document/d/14USl6VeG3yg2axdOrxi55t2qsJyIZ7BZ57he17Gi0WU/edit
- Repositorio oficial Kraken https://github.com/TheSoftwareDesignLab/KrakenMobile
- Decargar el repositorio

### Configuracion
- Cambiar el valor de la URL a probar
- Cambiar el valor de las credenciales para iniciar sesion
- Cuando se cree los usuario para las puebas con `bundle exec kraken-mobile setup` ingresar 5
- Modificar el archivo de propiedades `features/web/data.json` segun sus datos

### Ejecucion
- Ejecutar `bundle exec kraken-mobile run --properties=features/web/data.json` para correr las pruebas
