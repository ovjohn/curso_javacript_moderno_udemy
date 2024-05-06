const producto = "Monitor de 20 Pulgadas";

// .replace para reemplazar 
console.log(producto);
console.log(producto.replace('Pulgadas','"'));


//Metodo para cortar 
console.log(producto.slice(0,10))//Comienza en 0 y llega hasta la 10

//Alternativa a slice
console.log(producto.substring(0,3))// Hace lo mismo "cortar"

//metodo charArt - Devuelve solo una possicon
console.log(producto.charAt(3));