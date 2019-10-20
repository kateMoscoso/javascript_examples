const especialidades = [
    "1",
    "2",
    "3"
]
class Alumno {
    constructor(nombre, edad, especialidad, companero) {
        this.nombre = nombre
        this.edad = edad
        if(especialidad && especialidades.indexOf(especialidad)>=0){
          this.especialidad = especialidad
        }
        else{
            throw new Error(`no es una especialidad correcta`);
        }
        if(companero && companero instanceof Alumno){
           this.companero = companero
        }
        else{
            throw new Error(`no es de tipo correcto`);
        }
    }

    mostrar() {
        return `${this.nombre} - ${this.edad} - ${this.especialidad} - ${this.companero.getNombre()}  `
    }
    getNombre() {
        return `${this.nombre}`
    }
    getEdad() {
        return `${this.edad}`
    }
    getEspecialidad() {
        return `${this.especialidad}`
    }
    getCompanero() {
        return this.companero
    }
    setCompanero(companero) {
        if(companero && companero instanceof Alumno){
            this.companero = companero
         }
         else{
             throw new Error(`no es de tipo correcto`);
         }
    }
    getNomberCompanero() {
        return this.companero.getNombre()
    }
}




var alumno1 = new Alumno('Elba', 48, 1)
var alumno2 = new Alumno('Pablo', 48, 3)
alumno1.setCompanero(alumno2)
alumno1.mostrar()