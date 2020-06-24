const fruits = () => {
    var fruit = 'banana'
    console.log(fruit)
}
fruits()
console.log(fruit) //no E

const fn = () => {
    var x = 1
    var x = 2
    let y = 1
    let y = 2
}

const fruits_block = () => {
    
    if(true){
        var fruit = 'banana'
        let fruit2 = 'pear'
        const fruit3 = 'orange'
    }
    console.log(fruit)
    console.log(fruit2)
    console.log(fruit3)

}
fruits_block()

const fnSetTimeOut = () =>{
    for(let i = 0; i >10;i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
const fnvar = () =>{
    for(var i = 0; i < 10;i++){
        console.log(i)
    }
}
fnvar()

const fnSetTimeOut = () =>{
    for(var i = 0; i < 10;i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
fnSetTimeOut()

const fnSetTimeOut_let = () =>{
    for(let i = 0; i < 10;i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
fnSetTimeOut_let()