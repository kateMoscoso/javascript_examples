class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }
    listarAmigos1() {
        const _this = this
        this.amigos.forEach(function(amigo) {
            console.log(`mi nombre es ${_this.nombre} y soy amigo e ${amigo}`)
        })
    }
    listarAmigos2() {
        this.amigos.forEach(function(amigo) {
            console.log(`mi nombre es ${this.nombre} y soy amigo e ${amigo}`)
        }.bind(this))
    }
    listarAmigos3() {
        this.amigos.forEach((amigo) =>
            console.log(`mi nombre es ${this.nombre} y soy amigo e ${amigo}`)
        )
    }
}

const sacha = new Persona("Sacha", ["Pedro", "Pepe"])
sacha.listarAmigos()