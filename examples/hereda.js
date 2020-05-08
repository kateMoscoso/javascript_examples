const ALTURA_PROMEDIO = 1.80;

function heredaDe(hijo, padre){
    const fn = function () {};
    fn.prototype = padre.prototype;
    hijo.prototype = new fn();
    hijo.prototype.constructor = hijo;
} 

function Persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    Persona.prototype.saludar = function () {
        console.log(`Te saluda ${this.nombre} ${this.apellido}`);
    }
    
    Persona.prototype.soyAlto = function () {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${ this.altura >= ALTURA_PROMEDIO? 'alto' : 'bajo' }`);
    }
}

heredaDe(Desarrollador, Persona);

function Desarrollador (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    Persona.prototype.saludar = function () {
        console.log(`Te saluda ${this.nombre}${this.apellido} que es desarrollador/a`);
    }
}

var kate = new Persona('Kate', 'Moscoso', 1.61);
kate.saludar();
kate.soyAlto();

var kate = new Desarrollador('Kate', 'Moscoso');
kate.saludar();
kate.soyAlto();