# Detector de Impedimentos Scrum

Este proyecto es un sistema backend para procesar transcripciones de Read.ai y detectar impedimentos para equipos Scrum.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)
- Cuentas y claves de API para:
  - Read.ai
  - OpenAI
  - Slack

## Configuración

1. Clona el repositorio:
   ```
   git clone https://github.com/transformacion-digital-2024/Poc-VirtualScrum.git
   cd scrum-impediment-detector
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   PORT=3000
   READ_AI_API_KEY=tu_clave_api_de_read_ai
   OPENAI_API_KEY=tu_clave_api_de_openai
   SLACK_BOT_TOKEN=tu_token_de_bot_de_slack
   SLACK_CHANNEL_ID=id_del_canal_de_slack
   ```
   Reemplaza los valores con tus propias claves y tokens.

## Ejecución

Para iniciar el servidor en modo de desarrollo:
npm run dev


El servidor estará disponible en `http://localhost:3000`.

## Pruebas

Para ejecutar las pruebas unitarias:
npm test



## Uso de la API

### Analizar una transcripción

Endpoint: `POST /api/analyze-transcription`

Cuerpo de la solicitud (JSON):

json
{
"transcriptionId": "id_de_la_transcripcion_de_read_ai"
}

Ejemplo de uso con curl:
```bash
curl -X POST http://localhost:3000/api/analyze-transcription \
     -H "Content-Type: application/json" \
     -d '{"transcriptionId": "123456"}'
```

Respuesta exitosa:
```json
{
  "impediments": [
    {
      "descripcion": "Problema con el servidor de producción",
      "mencionadoPor": "Ana"
    },
    {
      "descripcion": "Retraso en la entrega de diseños",
      "mencionadoPor": "Carlos"
    }
  ]
}
```

## Estructura del proyecto

- `src/`: Contiene el código fuente
  - `controllers/`: Controladores de la API
  - `services/`: Servicios para la lógica de negocio
  - `routes/`: Definición de rutas de la API
  - `middleware/`: Middleware personalizado
  - `utils/`: Utilidades como el logger
- `tests/`: Contiene las pruebas unitarias
- `config/`: Archivos de configuración (si es necesario)

## Contribución

Si deseas contribuir al proyecto, por favor crea un fork del repositorio, realiza tus cambios en una nueva rama y envía un pull request.

# Notas Genenales

Además, en la carpeta `docs` encontrarás un documento de especificación de requerimientos que contiene todos los detalles de lo que construimos en la Fase 2 y 3 del proyecto. Este documento está disponible en formato Word, e incluye tanto los diagramas en formato gráfico como en lenguaje Mermaid o PlantUML.
