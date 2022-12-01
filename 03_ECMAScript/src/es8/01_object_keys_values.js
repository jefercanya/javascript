//Object.keys solo trae las KEYS del JSON, NO trae la Valores "Values"
const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario) 
// [ 'name', 'email', 'age' ]



//Object.values solo trae los valores del JSON, NO trae la llave "KEY"
const usuario1 = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario1) 
// [ 'Andres', 'andres@correo.com', 23 ]