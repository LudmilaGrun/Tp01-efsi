//Ejercicio 1
function formatearNombre(nombre){


let respuesta1 = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();


document.getElementById("Ejercicio1").innerHTML = respuesta1;


}






//Ejercicio 2
function contarLetras(texto){


let respuesta2 = texto.length;


document.getElementById("Ejercicio2").innerHTML = respuesta2;


}


//Ejercicio 3
function maximo(a, b, c) {
  let mayor = a;




  if (b > mayor) {
    mayor = b;
  }




  if (c > mayor) {
    mayor = c;
  }


  document.getElementById("Ejercicio3").innerHTML = mayor;


}


//Ejercicio 4
function validarPassword(password){


let respuesta4;


if(password.length >= 6){
respuesta4 = "Password válido";
}else{
respuesta4 = "Password invalido";
}


document.getElementById("Ejercicio4").innerHTML = respuesta4;


}


//Ejercicio 5
function sumarArray(numeros) {
  numeros = numeros.split(",").map(Number);


  let suma = 0;


  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }


  document.getElementById("Ejercicio5").innerHTML = suma;
}


//Ejercicio 6
function numeroMayorDeUnArray(numeros) {
   numeros = numeros.split(",").map(Number);


  let mayor = numeros[0];


  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }


  document.getElementById("Ejercicio6").innerHTML = mayor;
}


//Ejercicio 7
function filtrarPares(numeros) {
  let pares = [];


  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }


  document.getElementById("Ejercicio7").innerHTML = pares;
}


//Ejercicio 8
function descripcionUsuario() {
  let nombre = document.getElementById("nombre8").value;
  let edad = document.getElementById("edad8").value;
  let resultado = nombre + " tiene " + edad + " años";


  document.getElementById("Ejercicio8").innerHTML = resultado;
}


//Ejercicio 9
function activarUsuario() {
    let nombre = document.getElementById("nombre9").value;
    let edad = document.getElementById("edad9").value;


    let usuario = {
        nombre: nombre,
        edad: edad,
        activo: true
    };


    document.getElementById("Ejercicio9").textContent =
        "Usuario activo: " + usuario.activo;
}


//Ejercicio 10
function precioTotal() {
  const productos = [
    {nombre:"Mouse", precio:10},
    {nombre:"Teclado", precio:25},
    {nombre:"Monitor", precio:200}
  ];


  let total = 0;


  for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio;
  }


  document.getElementById("Ejercicio10").innerHTML = total;
}


//Ejercicio 11
function obtenerNombres() {
  const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
  ];


  let nombres = usuarios.map(u => u.nombre);


  document.getElementById("Ejercicio11").innerHTML = nombres;
}


//Ejercicio 12
function usuariosMayores() {
    const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
  ];


  let mayores = usuarios.filter(u => u.edad >= 18);


  let texto = "";


  for (let i = 0; i < mayores.length; i++) {
    texto += mayores[i].nombre + " (" + mayores[i].edad + " años)<br>";
  }


  document.getElementById("Ejercicio12").innerHTML = texto;
}


//Ejercicio 13
function sumaEdades() {
  const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
  ];


  let total = usuarios.reduce((acc, u) => acc + u.edad, 0);


  document.getElementById("Ejercicio13").innerHTML = total;
}


//Ejercicio 14
function ejercicio14() {
  const producto = {
    nombre: "Notebook",
    precio: 1000
  };


  const { nombre, precio } = producto;


  document.getElementById("Ejercicio14").innerHTML =
    nombre + " cuesta $" + precio;
}




//Ejercicio 15
function ejercicio15() {
   const producto = {
        nombre: "Notebook",
        precio: 1000
    };
    const nuevoProducto = {
        ...producto,
        stock: 5
    };


    document.getElementById("Ejercicio15").textContent =
        nuevoProducto.nombre + " cuesta $" + nuevoProducto.precio + " y tiene stock: " + nuevoProducto.stock;
}


//Ejercicio 16
function buscarProducto(productos, nombre) {
     return productos.find(function(producto) {
        return producto.nombre == nombre;
    });
}


//Ejercicio 17
function productosCaros() {
    let datos = texto.split(",");
    let productos = [];


    for (let i = 0; i < datos.length; i += 2) {


        productos.push({
            nombre: datos[i + 1],
            precio: Number(datos[i])
        });
    }


    let caros = productos.filter(function(producto) {  
        return producto.precio > 50;
    });


    if (caros.length > 0) {


        let resultado = caros.map(function(p) {
            return p.nombre + " ($" + p.precio + ")";
        });


        document.getElementById("Ejercicio17").textContent =
            "Productos caros: " + resultado.join(", ");
    } else {
        document.getElementById("Ejercicio17").textContent =
            "No hay productos caros";
    }
}


//Ejercicio 18
function promedio(numeros) {
 numeros = numeros.split(",").map(Number);


  let suma = 0;


  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }


  let resultado = suma / numeros.length;


  document.getElementById("Ejercicio18").innerHTML = resultado;
}











