function enviarRespuestasAutomaticas() {
  const formUrl = 'https://docs.google.com/forms/d/XXXXXXXXXXXX/edit'; // Reemplaza con la URL del formulario de Google
  const repeticiones = 3; // Número de respuestas automáticas que se enviarán al formulario
  const pausaEntreRespuestas = 3000; // Tiempo en milisegundos entre cada respuesta
  
  const form = FormApp.openByUrl(formUrl);

  for (let i = 0; i < repeticiones; i++) {
    let response = form.createResponse(); // Crea una nueva respuesta al formulario
    let items = form.getItems(); // Obtiene todos los elementos (preguntas) del formulario

    for (let j = 0; j < items.length; j++) {
      let item = items[j];

      switch (item.getType()) {
        case FormApp.ItemType.MULTIPLE_CHOICE:
          // Para preguntas de opción múltiple, selecciona una opción al azar
          const choices = item.asMultipleChoiceItem().getChoices();
          const randomChoice = choices[Math.floor(Math.random() * choices.length)];
          response.withItemResponse(item.asMultipleChoiceItem().createResponse(randomChoice.getValue()));
          break;

        case FormApp.ItemType.SCALE:
          // Para preguntas de escala lineal, selecciona un valor al azar dentro del rango
          const scale = item.asScaleItem();
          const randomValue = Math.floor(Math.random() * (scale.getUpperBound() - scale.getLowerBound() + 1)) + scale.getLowerBound();
          response.withItemResponse(scale.createResponse(randomValue.toString()));
          break;

        case FormApp.ItemType.TEXT:
          // Para preguntas de texto, genera un texto predefinido
          const randomText = 'Text';
          response.withItemResponse(item.asTextItem().createResponse(randomText));
          break;

        case FormApp.ItemType.CHECKBOX:
          // Para preguntas de casillas de verificación, selecciona algunas opciones al azar
          const checkChoices = item.asCheckboxItem().getChoices();
          const selectedChecks = checkChoices.filter(() => Math.random() < 0.5);
          const checkValues = selectedChecks.map(choice => choice.getValue());
          response.withItemResponse(item.asCheckboxItem().createResponse(checkValues));
          break;

        case FormApp.ItemType.LIST:
          // Para preguntas de lista desplegable, selecciona una opción al azar
          const listChoices = item.asListItem().getChoices();
          const randomListChoice = listChoices[Math.floor(Math.random() * listChoices.length)];
          response.withItemResponse(item.asListItem().createResponse(randomListChoice.getValue()));
          break;

        case FormApp.ItemType.GRID:
          // Para preguntas de cuadrícula, selecciona una columna al azar para cada fila
          const grid = item.asGridItem();
          const rows = grid.getRows();
          const columns = grid.getColumns();
          const gridResponses = [];

          for (let r = 0; r < rows.length; r++) {
            const randomColIndex = Math.floor(Math.random() * columns.length);
            gridResponses.push(columns[randomColIndex]); // Una columna por fila
          }

          response.withItemResponse(grid.createResponse(gridResponses));
          break;

        case FormApp.ItemType.CHECKBOX_GRID:
          // Para preguntas de cuadrícula de casillas de verificación, selecciona algunas columnas al azar para cada fila
          const checkboxGrid = item.asCheckboxGridItem();
          const cbRows = checkboxGrid.getRows();
          const cbCols = checkboxGrid.getColumns();

          const checkboxGridAnswers = [];

          for (let r = 0; r < cbRows.length; r++) {
            const selectedCols = cbCols.filter(() => Math.random() < 0.5);
            checkboxGridAnswers.push(selectedCols.map(col => col.toString()));
          }

          response.withItemResponse(checkboxGrid.createResponse(checkboxGridAnswers));
          break;

        case FormApp.ItemType.DATE:
          // Para preguntas de fecha, genera una fecha al azar
          let randomDate = new Date(new Date().getTime() * Math.random());
          response.withItemResponse(item.asDateItem().createResponse(randomDate));
          break;

        case FormApp.ItemType.TIME:
          // Para preguntas de hora, genera una hora al azar
          let randomTime = new Date(new Date().getTime() * Math.random());
          let hours = randomTime.getHours();
          let minutes = randomTime.getMinutes();
          response.withItemResponse(item.asTimeItem().createResponse(hours, minutes));
          break;

        default:
          Logger.log('Tipo de pregunta no soportado: ' + item.getType());
          break;
      }
    }

    response.submit(); // Envía la respuesta al formulario
    Logger.log('Respuesta ' + (i + 1) + ' enviada.'); // Registra en el log que la respuesta ha sido enviada
    Utilities.sleep(pausaEntreRespuestas); // Espera antes de enviar la siguiente respuesta
  }

  Logger.log('Todas las respuestas han sido enviadas.'); // Notifica que todas las respuestas han sido enviadas
}
