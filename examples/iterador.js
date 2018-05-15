// Los iteradores nos permitirán hacer listas infinitas de elementos haciéndolos distintos a los arreglos (arrays) los cuales tienen un numero finito de elementos definidos
// Para los iteradores podemos obtener lo siguiente:
// next() - iterará los datos
// value - nos devolverá el valor del dato
// done - será un indicador para cuando la lista se haya terminado
// Con iteradores es muy sencillo realizar un for y obtener los datos.
//for (let value of fibo) {
//    console.log(value)
//}

function fibonacci() {
    let a = 0,
        b = 1
    return {
        next: function() {
            let f = a
            a = b
            b = f + a
            return { value: f, done: false }
        }
    }
}
const fibo = fibonacci()
fibo.next().value()

const fibo2 = {}
fibo2[Symbol.iterator] = fibonacci

let i = 0
for (let value of fibo) {
    console.log(value)
    i++
    if (i > 20) break
}