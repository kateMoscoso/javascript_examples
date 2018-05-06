function saludarFamilia(apellido) {
    return function saludarMiembroDeFamilia(nombre) {
        console.log(`Hola ${nombre} ${apellido}`)
    }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")

function makePrefixer(prefixer) {
    return function newWord(word) {
        console.log(`${prefixer}${word}`)
    }
}
const prefijoRe = makePrefixer("re")
const prefijoIn = makePrefixer("in")
prefijoRe("bueno")
prefijoIn("finito")