try {
    hello ();
} catch (error) {
    console.log(error);
}

//ahora no necesita argumentos el catch - el error es personalizado
try {
    anotherFn();
} catch {
    console.log("esto es un error")
}