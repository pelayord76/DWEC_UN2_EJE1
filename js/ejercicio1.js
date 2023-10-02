var nombre = prompt("Introduce tu nombre y apellidos: ");
console.log("El nombre introducido es : " + nombre);

console.log("El tamaño del nombre y apellidos sin espacios es de: " + entrada.split(" ").join("").length);

console.log("El tamaño del nombre y apellidos sin espacios es de: " + entrada.replaceAll(" ", "").length);

console.log("Minus: " + entrada.toLowerCase());
console.log("Mayus: " + entrada.toUpperCase());

var elementosEntrada = entrada.split(" ");
console.warn(elementosEntrada);
console.log("Nombre: " + elementosEntrada[0] + "\nApellido 1: " + elementosEntrada[1] + "\nApellido 2: " + elementosEntrada[2]);

console.log("Propuesta de nombre 2: " + elementosEntrada[0].toLowerCase() + (elementosEntrada[1])[0].toLowerCase() + (elementosEntrada[2])[0].substring(0, 1).toLowerCase());

console.log("Propuesta de nombre 3: " + (elementosEntrada[0]).substr(0, 2).toLowerCase() + (elementosEntrada[1]).substr(0, 2).toLowerCase() + (elementosEntrada[2]).substr(0, 2).toLowerCase());

function creaPassword(nombre) {
    var resultado = "";
    for (let i = 0; i < nombre.length; i++) {
        resultado += nombre.charAt(i) + i;
    }
    return resultado;
}

console.log("Propuesta de contraseña" + creaPassword(elementosEntrada[0]));