function ej1() {
    const n = [4, 8, 15, 16, 23, 42];
    n.forEach((num) => {
        console.log(num)
    });
}
function ej2() {
    const numeros = [3, 12, 7, 25, 5, 18, 9, 30];
    const mayores = numeros.filter((edad) => edad > 10);
    console.log(mayores);
}
function ej3() {
    const nums = [2, 5, 10, 3, 8, 6];
    const triples = nums.map((n) => n * 3);
    console.log(triples);
}
function ej4() {
    const numeros2 = [14, 7, -3, 22, -8, 5, -1];
    const resultado = numeros2.find((n) => n < 0);
    console.log(resultado);
}
function ej5() {
    const nm = [12, 45, 67, 8, 91, 33, 55];
    const primero = nm.findIndex((p) => p > 50);
    console.log(primero)
}
function ej6() {
    const frutas = ["manzana", "banana", "naranja", "uva"];
    frutas.push("kiwi");
    console.log(frutas);
}
function ej7() {
    const color = ["rojo", "azul", "verde", "amarillo", "blanco"];
    const elin = color.splice(0, 2);
    console.log(elin);
    console.log(color);
}
function ej8() {
    const letras = ["a", "e", "i", "o", "u"];
    console.log(letras.length);
}
function ej9() {
    const numeros = [1, 4, 7, 8, 3, 12, 5, 6, 11, 10];
    const par = numeros.filter((pares) => pares % 2 === 0);
    const multi = par.map((pares) => pares * 2)
    console.log(par, multi);
}
function ej10() {
    const temp = [18, 25, 31, 12, 28, 35, 20]
    const C = temp.filter((n) => n > 25)
    const resultado = C.map((n) => n + "°C")
    console.log(resultado)
}
function ej11() {
    const n = [5, 9, 14, 22, 3, 18, 27]
    const eliminar = n.splice(n.findIndex((n) => n % 7 === 0), 1);
    console.log("Tu arreglo quedo:" + n);
    console.log("El numero eliminado fue:" + eliminar)
}
function ej12() {
    const n = [2, 7, 10, 15, 4, 9, 12]
    const par = n.filter((pares) => pares % 2 === 0);
    const cu = par.map((pares) => pares * pares);
    console.log("Numeros pares al cuadrado:" + cu);
}
function ej13() {
    const comida = ["pan", "leche", "huevos"]
    comida.push("queso", "jamon");
    comida.splice(1, 1);
    console.log(comida);
}
//1
const nombres = ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach((nombre) => {
    console.log("Hola", nombre)
});
//2
function ej14() {
    let total = 0
    const n = [1200, 850, 430, 2100];
    n.forEach(num => total += num);
    console.log("Total de compra:"+total)
};
//4 y 6
function ej16() {
    const estudiantes = [
        { id: 1, nombre: "Lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 5 },
        { id: 4, nombre: "Jeremías", nota: 9 }
    ]
    const nombres = estudiantes.map((n) => n.nombre)
    const id = estudiantes.find((i) => i.id == 3);//==mismo valor tres mismo valor y mismo tipo
    const id2 = estudiantes.find((i) => i.id == 10);
    console.log(nombres);
    console.log(id);
    console.log(id2 ? `se encontro el valor de id 10:${id2.nombre}` : `no se encontro el id 10`)
}
//5
function ej17() {
    const productos = ["Ana", "Luis", "Marta", "Pedro", "Sofia", "Juan"]
    const m4 = productos.filter((p) => p.length > 4);
    console.log(m4);
}
//arreglo compuesto ej7
function ej15() {
    const productos = [
        { nombre: "Mouse", stock: 5 },
        { nombre: "Teclado", stock: 0 },
        { nombre: "Monitor", stock: 2 },
        { nombre: "Webcam", stock: 0 },
    ]
    const disponible = productos.filter((n) => n.stock > 0).map(n=>n.nombre);
    console.log("Los productos disponibles son:"+disponible);
}
//8
function agregarproducto(producto) {
    const carrito = ["pan", "mayonesa", "ketchup"]
    if (carrito.includes(producto)) {
        console.log(`El producto ${producto}ya existe en el carrito,no se va a agregar.`);
    } else {
        carrito.push(producto);
        console.log(`El producto ${producto} fue agregado con exito.`);
    }
}
agregarproducto("huevos");
agregarproducto("mayonesa");

//3
function ej18() {
    const precio = [1000, 2500, 800, 1500]
    const iva = precio.map(precio => Math.round(precio * 1.21));
    console.log("Los precios con iva:" + iva);
}

//ej9
function ej19() {
    const estudiantes = [
        { id: 1, nombre: "Lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 5 },
        { id: 4, nombre: "Jeremías", nota: 9 }
    ]
    const notas = estudiantes.filter((nota) => nota.nota >= 6).map((nota) => nota.nombre + " " + nota.nota);
    notas.forEach((nota) => {
        console.log("Nombre:", nota)
    });
}

//10
function ej20() {
    const grandes = ["River", "Boca", "Velez", "Independiente"];
    grandes.push("Estuuuudiooo");
    console.log("Los 5 grandes:" + grandes);
    grandes.splice(2, 2);
    console.log("Los 3 grandes:" + grandes);

    // METODOS BUSQUEDA
    //filter:filtra segun una condicion un valor
    //forEach:recorre un arreglo y puede accionar segun el parametros
  //find:devuelve el primer elemento que cumple la condicion.sino devuelve undefind

    //METODOS DE MOFICICACION
    //splice:reemplaza,elimina o modifica el arreglo
    //map:crear nuevos arreglos sin modificar el original
}
//obtener los libres que esten disponible y que entren en fantasia
//agregar libro que este disponible y sea genero clasico
function ej21() {
    const libros = [
        { titulo: "El Hobbit", disponible: true, generos: ["fantasia", "aventura"] },
        { titulo: "Dracula", disponible: false, generos: ["terror", "clasico"] },
        { titulo: "Harry Potter", disponible: true, generos: ["fantasia", "juvenil"] },
        { titulo: "It", disponible: true, generos: ["terror"] },
        { titulo: "Eragon", disponible: false, generos: ["fantasia", "aventura"] },
    ]
    libros.push({ titulo: "Troya", disponible: true, generos: ["clasico"] },);
    console.log(libros);
    
}