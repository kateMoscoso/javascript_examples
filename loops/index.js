var persona_1 = {
    nombre: 'Manolo',
    apellido: 'Perez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${persona_1.nombre} pesa ${persona_1.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(persona_1)
    } else if (random < 0.5) {
        adelgazar(persona_1)
    }
}

while (persona_1.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(persona_1)
    }
    if (realizaDeporte()) {
        adelgazar(persona_1)
    }
    dias += 1
}

console.log(`Al final del año ${persona_1.nombre} pesa ${persona_1.peso.toFixed(1)}kg`)