const especialidades = [
    1,
    2,
    3
]
const nombreEspecialidades = {
    1: 'Sistemas',
    2: 'Web',
    3: 'Multiplataforma'

}
class Alumno {
    constructor(nombre, edad, especialidad, companero) {
        this.nombre = nombre
        this.edad = edad
        if(especialidad){ 
           if(especialidades.indexOf(especialidad)>=0){
             this.especialidad = especialidad
           }
           else{
               throw new Error(`no es una especialidad correcta`);
           }
        }
        if(companero){ 
           if(companero instanceof Alumno){
               this.companero = companero
           }
           else{
               throw new Error(`no es de tipo correcto`);
           }
        }
    }

    mostrar() {
        return `${this.nombre} - ${this.edad} - ${this.especialidad} - ${this.companero?this.companero.getNombre(): 'no  asignado'}  `
    }
    getNombre() {
        return `${this.nombre}`
    }
    setNombre(nombre) {
        this.nombre = nombre
    }
    getEdad() {
        return `${this.edad}`
    }
    setEdad(edad) {
        this.edad = edad
    }
    getEspecialidad() {
        return `${nombreEspecialidades[this.especialidad]}`
    }
    getCompanero() {
        return this.companero
    }
    setCompanero(companero) {
        if( companero instanceof Alumno){
            this.companero = companero
         }
         else{
             throw new Error(`no es de tipo correcto`);
         }
    }
    getNomberCompanero() {
        return this.companero? this.companero.getNombre(): 'no asignado'
    }
}




var alumno1 = new Alumno('Elba', 48, 1)
var alumno2 = new Alumno('Pablo', 48, 3)
alumno1.setCompanero(alumno2)
alumno1.mostrar()
alumno2.mostrar()
alumno2.getEspecialidad()