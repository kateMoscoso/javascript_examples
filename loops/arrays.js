function suma(...numeros) {
    /*let acum = 0;
    for (let i = 0; i < numeros.length; i++) {
        acum += numeros[i];
    }*/
    return numeros.reduce(function(acum, numero) {
        acum += numero
        return acum
    }, 0)
}

function doblesOld1(...numeros) {
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2)
    }
    return resultado
}

function paresOld(...numeros) {
    const resultado = []
    const length = numeros.length
    for (let i = 0; i < length; i++) {
        const numero = numero[i]
        if (numero % 2 == 0) {
            resultado.push(numero)
        }
    }
    return resultado
}
suma(4, 8, 12, 8954, 7, 9)

const dobles = (...numeros) => numeros.map(numero => numero * 2)

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

dobles(4, 8, 12, 8954, 7, 9)
pares(4, 8, 12, 8954, 7, 9)