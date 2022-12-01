const users = {
    usuario1:{
        country: 'MX',
        edad: 15
    },
    usuario2:{
        country: 'CO',
        edad: 35
    }
}

console.log(users.usuario1.country) 
console.log(users.usuario1.salary) // undefined

console.log(users.usuario1)
console.log(users.developer) // undefined

//solucion
console.log(users?.developer?.country)