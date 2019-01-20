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
const META = 2;
var dias = 0;
while (persona_1.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(persona_1)
    }
    if (realizaDeporte()) {
        adelgazar(persona_1)
    }
    dias += 1
}

var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

if (contador === 1) {
    console.log(`Fui a ver si llovía ${contador} vez`)
} else {
    console.log(`Fui a ver si llovía ${contador} veces`)
}

var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('Intente aislarse del mundo y sentarse en soledad a reflexionar sobre ciertas cuestiones de su vida que últimamente no lo dejan progresar de la manera que anhela.')
        break
    case 'piscis':
        console.log('Sepa que de ahora en más, su futuro solo dependerá de usted solo. Entienda que ya está capacitado para tomar sus propias decisiones y realizar los planes deseados.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Dentro su cabeza le surgirán ideas extraordinarias, sobre todo si se dedica a actividades creativas donde pueda ponerlas en práctica.')
        break
    case 'aries':
        console.log('Deje de preocuparse más de lo necesario, ya que podría sufrir una crisis de estrés. Ese problema que lo tiene inquieto, se resolverá de la manera menos esperada.')
        break
    case 'tauro':
        console.log('Se sentirá agobiado por sus responsabilidades, déjese ayudar por la gente que lo quiere. Procure aceptar los consejos y recapacitar sobre los errores cometidos.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Sepa que en pocos días recuperará su armonía mental. De esta forma, podrá llevar a cabo todos los proyectos que tiene en mente con claridad y constancia.')
        break
    case 'leo':
        console.log('Intente hacer lo posible para superar los miedos que lo agobian cada vez que debe tomar una decisión importante en su vida. Relájese.')
        break
    case 'virgo':
        console.log('Esté atento a los asuntos familiares que tiene pendientes hace días. Sepa que la Luna en su signo le permitirá lograr todo lo que se proponga en el día.')
        break
    case 'libra':
        console.log('Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy.')
        break
    case 'escorpio':
        console.log('Aprenda que todo cambio en la vida siempre es muy constructivo. Momento óptimo para hacer un alto en su vida y ver desde otro punto de vista las cosas.')
        break
    case 'sagitario':
        console.log('Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás.')
        break
    case 'capricornio':
        console.log('Si pretende sentirse más feliz, use aquello que ha aprendido a lo largo de su vida. Pronto mejorarán las condiciones actuales que lo agobian a diario.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}

console.log(`Al final del año ${persona_1.nombre} pesa ${persona_1.peso.toFixed(1)}kg`)