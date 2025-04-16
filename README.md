# Auto-Rellenador de Formularios Google

Este script automatiza el proceso de completar formularios de Google con respuestas aleatorias pero lógicas. Soporta preguntas de opción múltiple, escalas y texto, navegando por formularios de varias páginas.

## Instrucciones de Uso

1.  **Abre el editor de Apps Script:**
    *   En tu formulario de Google, haz clic en los tres puntos verticales (⋮) en la esquina superior derecha.
    *   Selecciona "Editor de secuencia de comandos" (o "Apps Script").

2.  **Copia y pega el script:**
    *   Reemplaza el código existente en el editor con el script proporcionado.

3.  **Configura el script:**
    *   **`formUrl`**: En la segunda línea del script, reemplaza `"URL_DEL_FORMULARIO"` con la URL que usas para *editar* el formulario (ej: `https://docs.google.com/forms/d/e/XXXXXXXXXXXX/edit`).
    *   **`repeticiones`**: En la tercera línea, modifica el número `5` para indicar cuántas respuestas deseas generar automáticamente.

4.  **Ejecuta el script:**
    *   Haz clic en el botón "Ejecutar" (el icono con forma de triángulo "▶").
    *   Si es la primera vez, se te pedirá que autorices el script. Revisa los permisos y concédelos.

5.  **¡Espera!**
    *   Verás un mensaje "Se ha iniciado la ejecución" en la parte inferior del editor. **No cierres la ventana mientras el script está en funcionamiento.**
    *   Cuando el script finalice, verás el mensaje "Se ha completado la ejecución".

¡Listo! Ahora revisa las respuestas en tu formulario.
