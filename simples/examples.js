const oneDay = 1000 * 60 * 60 * 24;

let daysBetweenDates = (date1, date2) => {
    const diference = Math.abs(date1 - date2);
    return Math.floor(diference / oneDay);
}
const today = newDate();
const bornDate = newDate(2000, 3 , 8);
console.log(daysBetweenDates(today, bornDate));

function divisionEntera(dividendo, divisor) {
	if (dividendo < divisor) {
		return 0;
	} else {
		return  1 + divisionEntera(dividendo - divisor, divisor);
	}
};
divisionEntera(53, 4);

const factorial = (numero) => {
    console.log(`Inicio  ${newDate().getTime()}`)
    if (numero === 1) {
        return numero
    }
    if (!this.cache) {
        this.cache = {}
    }
    if (this.cache[numero]) {
        console.log('Fin Cache', newDate().getTime())
        return this.cache[numero]
    }
    this.cache[numero] = numero * factorial(numero - 1)
    console.log(`Fin ${newDate().getTime()} `)
    return this.cache[numero]
}

function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('Güey')
const saludoColombiano = crearSaludo('Parce')

saludoArgentino('Kate')
saludoMexicano('Kate')
saludoColombiano('Kate')

const kate = {
    nombre: 'Kate',
    apellido: 'Moscoso',
    edad: 29
  }
  const cumpleaños = persona => persona.edad++
  const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
  })

  const kate = {
    nombre : 'Kate',
    apellido : 'Moscoso',
    edad : 29
}

const  lis= {
    nombre : 'Lissete',
    apellido : 'Moscoso',
    edad : 31
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// const saludarAKate = saludar.bind(kate);
// const saludarALis = saludar.bind(liss);

// setTimeout(saludar.bind(lis, 'Hola che'), 1000);

// saludar.call(lis, 'Hola che');

saludar.apply(lis, ['Hola che'])