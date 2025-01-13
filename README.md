### Bienvenido al CAC!

Este es un sitio web para el Club de Algoritmia de CUCEI (CAC), que incluye un blog y una sección de documentación, la idea es mostrar tutoriales, tips, códigos, presentaciones de sesiones y más. El objetivo es proporcionar recursos y documentación para los miembros del club y cualquier persona interesada. Para montar este sitio utilizamos Docusaurus, si tienes alguna duda adicional que no se cubra aquí (como el cómo funciona el blog o los archivos de docs), puedes consultar: [Documentación de Docusaurus](https://docusaurus.io/docs).

### Instalación

No olvides instalar las dependencias del proyecto, usa:

```bash
npm install
```

### Iniciar el Proyecto

Para iniciar el proyecto en modo de desarrollo, puuedes usar uno de los siguientes comandos:

```bash
npm start
```

o

```bash
npx docusaurus start
```

Esto iniciará un servidor local y abrirá el sitio en su navegador predeterminado, (Realmente no sé si hay alguna diferencia real entre usar alguno de los dos comandos).

### Generador de Presentaciones

El proyecto incluye un generador de presentaciones que crea documentos en la sección de `docs` a partir de un archivo JSON de presentaciones. El archivo de presentaciones se encuentra en `src/data/presentations.json`.

#### Cómo Funciona el Generador de Presentaciones

1. **Cargar Datos**: El generador carga los datos del archivo `presentations.json`.
2. **Eliminar Archivos Existentes**: Si se elige, el generador puede eliminar los archivos existentes en la carpeta de presentaciones.
3. **Crear Carpetas y Archivos**: El generador crea carpetas y archivos para cada sección y subsección definida en el archivo JSON.
4. **Generar Documentos**: Para cada presentación, se genera un archivo `.mdx` con el contenido de la presentación.

Para ejecutar el generador de presentaciones, ejecuta el script `generateDocs.js`:

```bash
node generateDocs.js
```

El CLI preguntará si quieres eliminar las presentaciones existentes antes de generar nuevas. (**Warning** : Cuidado con seleccionar esta opción, puedes borrar tu progreso accidentalmente y también cuida de no subir que se eliminaron los archivos que no deberían eliminarse).

### Cómo detener el programa en ejecución desde la línea de comandos

A veces, usar Ctrl + C no funciona. Para detener el programa, sigue estos pasos:

1. Lista los procesos relacionados con Docusaurus:
    ```bash
    ps aux | grep docusaurus
    ```
2. Selecciona el proceso que quieres detener según su PID (el segundo valor en la lista):
    ```bash
    kill -9 <PID>
    ```

A veces es necesario detener todos los procesos relacionados.

### Integración con Jupyter Notebooks

Nota, consulta este paquete para la integración con Jupyter Notebooks, puede servir para crear la documentación o un buen blog:
https://www.npmjs.com/package/@datalayer/jupyter-docusaurus-plugin

### Ideas para futuras actualizaciones

- Añadir la sección de authors en la sección de documentación, para fomentar a las personas a contribuir, puede ayudar a que reciban reconocimiento y demás.

- Actualizar el script de generación de la sección de presentaciones, creo que sería buena idea implementar que se pueda visualizar la presentación de turno sin abrir el link, lo podemos hacer simplemente con <iframes> pero vale la pena explorar otras opciones.
