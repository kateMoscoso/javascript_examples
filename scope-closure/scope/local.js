const sayHi = () => {
    const hWorld = 'hello world'

    console.log(hWorld)
}
sayHi()
console.log(hWorld) //no E

var scope = 'hola'

const scopeFunction = () => {
    var scope = 'hola  local'
    const fn = () =>{
        return scope
    }
    console.log(fn())
}
scopeFunction()

