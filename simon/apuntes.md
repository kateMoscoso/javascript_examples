# Inicializando el juego
Con el teclado virtual que hicimos capturaremos el evento *keydown* llamada a través de la función document.addEventListener(‘keydown’)
Cada tecla de nuestro teclado físico tiene un código asignado, con la función anterior obtendremos el keyCode de cada tecla para después asociarlo a nuestro teclado virtual con la propiedad data-key de la etiqueta div.
La función docment.querySelector(’[data-key]="${keyCode}"’) nos devolverá las etiquetas que poseen la propiedad data-key. Por lo tanto crearemos una función propia llamada getElementByKeycode que reciba el keycode asignado para que filtre y nos devuelva la etiqueta que tenga la propiedad data-key con ese keycode.
A continuación haremos una función que trabajará sobre los estilos css y mostrará activa, presionada o fallada la tecla presionada de nuestro teclado virtual.
Y podemos llamarla así:
activate(65);
activate(65, { success: true});
activate(65, { fail: true});
Con esto la tecla presionada adoptará el estilo css especificado.
Para añadir un toque genial a nuestro teclado pondremos un Time Out para desactivar la tecla y regresarla a su estilo inicial, esto nos dará un efecto de keyDown y keyUp.
Por último haremos dos funciones más que se enfocarán en la lógica de nuestro juego. Nos ayuden a definir aleatoriamente las teclas que el usuario debe presionar tras saber su nivel recuerda que esto debe suceder cada vez que se inicie un nuevo juego.