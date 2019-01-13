var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => !esAlta({ altura })

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})


var personas = [sacha, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

var personasAltas = personas.filter(esAlta)
    // var personasAltas = personas.filter(function (persona) {
    //   return persona.altura > 1.8
    // })

var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(pasarAlturaACms)

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)

console.log(personasCms)

console.log(personasAltas)
console.log(personasBajas)