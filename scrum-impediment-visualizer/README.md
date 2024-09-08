# Scrum Impediment Visualizer

Esta aplicación web permite visualizar impedimentos detectados de las transcripciones de Read.ai para un equipo Scrum.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)

## Configuración del proyecto

1. Clona el repositorio:
   ```
   git clone https://github.com/transformacion-digital-2024/Poc-VirtualScrum.git
   cd scrum-impediment-visualizer
   ```


2. Instala las dependencias:
   ```
   npm install
   ```


3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   REACT_APP_API_URL=https://tu-api-backend.com
   ```
   Reemplaza la URL con la dirección de tu API backend.

## Ejecución de la aplicación

Para iniciar la aplicación en modo de desarrollo:

```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Ejecución de pruebas

Para ejecutar las pruebas unitarias:

```
npm test
```

## Estructura del proyecto

```
scrum-impediment-visualizer/
├── src/
│ ├── components/
│ │ ├── ImpedimentList.js
│ │ ├── ImpedimentDetails.js
│ │ ├── ImpedimentFilter.js
│ │ └── UpdateStatusModal.js
│ ├── hooks/
│ │ └── useImpediments.js
│ ├── services/
│ │ └── api.js
│ ├── App.js
│ ├── index.js
│ └── theme.js
├── public/
├── package.json
└── README.md


```

## Funcionalidades principales

1. **Lista de impedimentos**: Visualiza todos los impedimentos detectados.
2. **Filtrado**: Permite filtrar impedimentos por proyecto y estado.
3. **Detalles del impedimento**: Muestra información detallada de cada impedimento.
4. **Actualización de estado**: Permite actualizar el estado de un impedimento.

## Uso de la aplicación

1. Al abrir la aplicación, verás la lista de impedimentos en la página principal.
2. Utiliza los filtros en la parte superior para filtrar por proyecto o estado.
3. Haz clic en "Ver detalles" para ver más información sobre un impedimento específico.
4. En la vista de detalles, puedes actualizar el estado del impedimento haciendo clic en "Actualizar Estado".

## Desarrollo

### Agregar nuevos componentes

1. Crea un nuevo archivo en la carpeta `src/components/`.
2. Implementa el componente utilizando React y Material-UI.
3. Importa y utiliza el nuevo componente donde sea necesario.

### Modificar el tema

Para cambiar el aspecto general de la aplicación, modifica el archivo `src/theme.js`.

### Agregar nuevas rutas

1. En `App.js`, agrega una nueva ruta dentro del componente `Switch`.
2. Crea el componente correspondiente para la nueva ruta.

## Solución de problemas

Si encuentras problemas con las dependencias, intenta lo siguiente:

1. Borra la carpeta `node_modules` y el archivo `package-lock.json`.
2. Ejecuta `npm install` nuevamente.
3. Si el problema persiste, considera usar `npm install --legacy-peer-deps`.

## Contribución

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función: `git checkout -b nueva-funcion`
3. Haz tus cambios y realiza commit: `git commit -m 'Agrega nueva función'`
4. Empuja a la rama: `git push origin nueva-funcion`
5. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
