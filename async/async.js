function handleError(err) {
    console.log(`Request failed: ${err}`)
}

async function getLinks() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list')
        const breeds = await response.json()
        //const responseHomeworld = await fetch(luke.homeworld)
        //luke.homeworld = await responseHomeworld.json()
       // console.log(`${luke.name} nació en ${luke.homeworld.name}`)
       processBreeds(breeds);
    } catch (err) {
        handleError(err)
    }
}
function processBreeds(...breeds){
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)

}