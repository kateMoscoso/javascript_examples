var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}
const MAYORIA_DE_EDAD = 18

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}
function cumpleanios(persona){
    return { ...persona, edad: persona.edad+1}
}
const esMayorDeEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad`)	
	}else{
		console.log(`${persona.nombre} es menor de edad`)
	}
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
    // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })