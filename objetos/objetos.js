var sacha = {
    nombre: 'Pepito',
    apellido: 'Perez',
    edad: 28
}

var dario = {
    nombre: 'Marco',
    apellido: 'Polo',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
    // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
    // imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad() {
    // Hola, me llamo Sacha y tengo 28 años
    // Hola, me llamo Darío y tengo 27 años
}