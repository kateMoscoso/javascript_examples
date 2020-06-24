const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`Money ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

const moneyBox_2 = () => {
    var saveCoins = 0
    const countCoins = coins => {
        saveCoins += coins
        console.log(`Money $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox_2();
myMoneyBox(5)
myMoneyBox(10)