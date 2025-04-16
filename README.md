# Auto-Rellenador de Formularios Google

Este script de Google Apps Script automatiza el proceso de completar formularios de Google con respuestas aleatorias. Es ideal para pruebas de carga, generación de datos de ejemplo o simplemente para rellenar rápidamente un formulario con datos básicos.

## Funcionalidades

- **Soporte para múltiples tipos de preguntas:** Incluye preguntas de opción múltiple, escala lineal, casillas de verificación (checkbox), lista desplegable, cuadrícula y cuadrícula de casillas de verificación. También soporta preguntas de fecha y hora.
- **Generación aleatoria de respuestas:** El script selecciona opciones al azar (dentro de las opciones disponibles para cada tipo de pregunta) o genera valores aleatorios dentro de rangos definidos (como en las escalas lineales).
- **Configuración sencilla:** La URL del formulario y el número de respuestas a generar se configuran directamente en el script.
- **Pausas configurables:** Permite establecer un tiempo de espera entre el envío de respuestas para evitar sobrecargar el formulario o ser detectado como spam.

## Limitaciones

- **Campos de texto:** El script **no genera texto realista ni relevante** para los campos de texto. Simplemente inserta la palabra `"Text"` como respuesta en todos los campos de texto. Si necesitas respuestas de texto más elaboradas, deberás modificar el script manualmente.
- **Respuestas no contextuales:** Las respuestas generadas son aleatorias y no tienen relación entre sí. No simulan el comportamiento de un usuario real que reflexiona sobre sus respuestas.
- **Tipos de preguntas no soportados:** Algunos tipos de preguntas avanzadas (como subida de archivos) no están soportados y serán ignorados por el script.
- **Validación:** El script no realiza validaciones de las respuestas. Si el formulario requiere respuestas en formatos específicos (ej: correo electrónico válido), el script no lo garantiza.
- **Formularios complejos:** Formularios con lógica condicional (ej: "ir a la página X si se responde Y") pueden no funcionar correctamente, ya que el script no evalúa estas condiciones.
- **Dependencia de Google Apps Script:** Requiere acceso a Google Apps Script y permisos para acceder y modificar el formulario.

## Instrucciones de Uso

1.  **Abre el editor de Apps Script:**
    *   En tu formulario de Google, haz clic en los tres puntos verticales (⋮) en la esquina superior derecha.
    *   Selecciona "Editor de secuencia de comandos" (o "Apps Script").

2.  **Copia y pega el script:**
    *   Reemplaza el código existente en el editor con el script proporcionado.

3.  **Configura el script:**
    *   **`formUrl`:** En la segunda línea del script, reemplaza `'https://docs.google.com/forms/d/XXXXXXXXXXXX/edit'` con la URL que usas para *editar* el formulario.
    *   **`repeticiones`:** En la tercera línea, modifica el número `3` para indicar cuántas respuestas deseas generar automáticamente.

    **Ejemplo:**
    ```
    const formUrl = 'https://docs.google.com/forms/d/tu-formulario/edit';
    const repeticiones = 10;
    ```

4.  **Ejecuta el script:**
    *   Haz clic en el botón "Ejecutar" (el icono con forma de triángulo "▶").
    *   Si es la primera vez, Google te pedirá que autorices el script. Haz clic en "Revisar permisos", selecciona tu cuenta y acepta los permisos solicitados.

5.  **¡Espera!**
    *   Verás un mensaje "Se ha iniciado la ejecución" en la parte inferior del editor. **No cierres la ventana mientras el script está en funcionamiento.**
    *   Cuando el script finalice, verás el mensaje "Se ha completado la ejecución".

¡Listo! Ahora revisa las respuestas en tu formulario.

## Personalización Avanzada

- **Modificar el tiempo de espera:** **`pausaEntreRespuestas`:** En la cuarta línea del script, reemplaza `'3000'` con los milisegundos de espera que quieras `ej: 10000 -> 10 segundos`.
- **Adaptar las respuestas:** Puedes modificar la lógica dentro del `switch` para generar respuestas más complejas o específicas para cada tipo de pregunta.