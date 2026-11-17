##Programcion 1

##Descripcion
Taller de Programacion 1  -  5to Com B

##Temas Trabajados
-SELECTIVAS
-REPETITIVAS
-ARREGLOS -> SIMPLES Y COMPUESTOS
-P.O.O ->CLASES,SUBCLASES,OBJETOS Y PILARES
-D.O.M. 

##
-SELECTIVAS=CONDICIONALES:
Permiten tomar decisiones según una condición.
```bash
let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
```
##
-REPETITIVAS:
Permiten repetir un código varias veces.
```bash
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
##
-ARREGLOS:
Variables que permiten guardar varios datos en un solo lugar.
```bash
let alumnos = ["Juan", "Pedro", "Lucas"];

console.log(alumnos[0]);
```
##
-P.O.O:
Forma de programar organizando el código mediante objetos que tienen características y acciones.
```bash
let auto = {
    marca: "Toyota",
    color: "Rojo",

    arrancar: function() {
        console.log("El auto arrancó");
    }
};
```
console.log(auto.marca);
auto.arrancar();
##
-D.O.M
Forma de representar una página HTML para que JavaScript pueda modificar su contenido, colores y elementos.
```bash
<h1 id="titulo">Hola</h1>

<script>
document.getElementById("titulo").innerHTML = "Bienvenidos";
</script>
``` 