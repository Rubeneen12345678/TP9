function calcularAreaCirculo(radio) {
    const pi = Math.PI; 
    const area = pi * Math.pow(radio, 2); 
    return area;
}

// Ejemplo:
const radio = 5;
const area = calcularAreaCirculo(radio);
console.log(`El área del círculo con radio ${radio} es ${area}`);


