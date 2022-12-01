const string = 'Hello';

//rellenar al inicion con padStart
'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"
console.log(string.padStart(10, 'hi'))
console.log(string.padStart(6, '_'))

//rellenar al final con padEnd
console.log(string.padEnd(6, '_'))
'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"