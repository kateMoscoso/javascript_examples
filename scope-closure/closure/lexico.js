const buildCount = i => {
    let count = i
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

const myCont = buildCount(1)
myCont()