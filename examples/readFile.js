fs.readFile('data.tx', 'utf8', countLines)

function countLines(err, data) {
    let lines = data.split('\n'.length)
    console.log(`${lines} lines `)
}