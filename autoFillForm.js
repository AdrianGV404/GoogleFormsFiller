function enviarRespuestasAutomaticas() {
  const formUrl = 'URL_AQUI_ENTRE_LAS_COMILLAS'; // Reemplazar con la URL del formulario
  const repeticiones = 5; // Número de respuestas a generar

  const form = FormApp.openByUrl(formUrl);

  for (let i = 0; i < repeticiones; i++) {
    let response = form.createResponse();
    let items = form.getItems();
    let currentPage = null;

    for (let j = 0; j < items.length; j++) {
      let item = items[j];

      // Manejar navegación entre páginas
      if (item.getType() === FormApp.ItemType.PAGE_BREAK) {
        currentPage = item.asPageBreakItem();
        continue; // Ir al siguiente elemento
      }

      // Generar respuestas aleatorias según el tipo de pregunta
      switch (item.getType()) {
        case FormApp.ItemType.MULTIPLE_CHOICE:
          const choices = item.asMultipleChoiceItem().getChoices();
          const randomChoice = choices[Math.floor(Math.random() * choices.length)];
          response.withItemResponse(item.asMultipleChoiceItem().createResponse(randomChoice.getValue()));
          break;

        case FormApp.ItemType.SCALE:
          const scale = item.asScaleItem();
          const randomValue = Math.floor(Math.random() * (scale.getUpperBound() - scale.getLowerBound() + 1)) + scale.getLowerBound();
          response.withItemResponse(scale.createResponse(randomValue.toString()));
          break;

        case FormApp.ItemType.TEXT:
          // Generar una respuesta de texto aleatoria (puedes personalizar esto)
          const randomText = 'Texto aleatorio ' + Math.random();
          response.withItemResponse(item.asTextItem().createResponse(randomText));
          break;

          // Otros tipos de preguntas (CHECKBOX, etc.)
        default:
          // Puedes agregar lógica para otros tipos de preguntas aquí
          Logger.log('Tipo de pregunta no soportado: ' + item.getType());
          break;
      }
    }

    // Enviar respuesta
    response.submit();
    Utilities.sleep(3000); // Pausa para evitar sobrecarga
  }
}
