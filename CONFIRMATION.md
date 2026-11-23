# Confirmación SMS — AI Photo Lab

El popup aparece encima de la landing real, tanto después de introducir el teléfono como al abrir directamente confirmation.html (DE) o confirmation-fr.html (FR). Las páginas de confirmación incluyen el mismo contenido, imágenes, vídeo y enlaces de la landing, sin iframe ni fondo vacío. La cruz/Escape deja la landing visible; recargar la URL con #landing mantiene el popup cerrado.

El idioma viene de la landing. No hay selector dentro del popup. Su contenido identifica AI Photo Lab y la suscripción, muestra la instrucción y el precio semanal inmediatamente debajo con la misma tipografía, un botón para abrir el SMS y un bloque secundario de cobro por mensaje/frecuencia, costes del operador, baja y ayuda.

La palabra clave y el número corto usan --sms-size (24–34 px según pantalla) y peso 700. Por petición explícita posterior, el precio semanal usa 14 px y peso 400; esta decisión visual difiere de la igualdad tipográfica solicitada en el correo. Swisscom: 995 sin cuerpo prellenado; START ABO se escribe manualmente. Salt/Sunrise: 995 con OK. Los dos modos de Salt se conservan mediante billing=1x15 o billing=3x5.

Revisión de fuentes: el correo de Suzana exige el paso web previo al editor, el precio debajo con igual tamaño/peso y las diferencias de prellenado por operador. PSMS Flow Switzerland.pdf, páginas 4–6, detalla además el SMS gratuito de solicitud de confirmación, sus datos y el plazo de 60 minutos desde su envío. Esta interfaz no sustituye ese SMS. El bloque de ayuda del popup aporta contexto; el PDF no exige copiar literalmente toda la solicitud SMS dentro del modal.

La plataforma PSMS debe conectar la solicitud gratuita, el plazo real, la recepción/verificación del SMS, la activación y la facturación. No se simula un contador ni una activación. Los datos introducidos no se almacenan ni transmiten por estos archivos estáticos. El proveedor debe validar que acepta la presentación modal del paso web.

Nota separada del correo: para Mind+ de pago único, Suzana propone la palabra MIND; START ABO está reservado para confirmar suscripciones Swisscom. No se modifican aquí los archivos de Mind+.

Actualización visual: se usa el logo original en el popup. La palabra clave (OK / START ABO) y 995 se muestran en azul #65c4ff. El precio conserva el mismo tamaño y peso que esos elementos.

Diseño actualizado según la referencia visual: tarjeta con degradado translúcido, logo centrado, título discreto, instrucción grande en dos líneas, palabra clave/número en azul #209cff y botón ancho. El precio semanal se ha ajustado posteriormente a 14 px y peso 400, conforme a la última petición de diseño. La composición funciona sobre la landing completa, sin selector dentro del popup.
