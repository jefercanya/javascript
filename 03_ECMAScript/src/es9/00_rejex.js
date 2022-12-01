//declara la expresion regular
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

//ejecutar/validar sobre un string
const match = regexData.exec('2018-04-20')

console.table(match)