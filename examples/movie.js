const starWars7 = 'Star wars';
const pgStarWars = 13

const name1 = 'Santi'
const age1 = 26

const name2 = 'Alex'
const age = 12



function canWatchStarWars7(name, age, isWithAdult = false) {
    if (age >= pgStarWars7) {
        alert(`${name} puede pasar a ver ${starWars7}`)
    } else if (isWithAdult) {
        alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañada/o por un adulto`)
    } else {
        alert(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} años y necesita tener ${pgStarWars7}`)
    }
}

canWatchStarWars7(name1, age1)
canWatchStarWars7(name2, age2, true)