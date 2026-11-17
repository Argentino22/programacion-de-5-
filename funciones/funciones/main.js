function saludar(nombre){
    return "¡Hola,"+nombre+"!"
}
const mensaje= saludar("Federico")
console.log(mensaje);


function suma(a,b){
    return a+b;
}
console.log(suma(3,4));
console.log(suma(10,25));;



function multiplicar(a,b){
    return a*b;
}
console.log(multiplicar(6,7));

//funciones explesadas
const doblar= function(n){
    return n*2
};
console.log(doblar(5));
console.log(doblar(12));;

const cuadrado = function calcCuadrado(n){
    return n*n
};
console.log(cuadrado(5));

const describir=(nombre, edad)=>{
    let categorias;
    if(edad>=18){
categorias="adulto";
    }else{
        categorias="menor";
    }
    return `hola ${nombre},usted es: ${categorias}`;
};
console.log(describir("pepe",22));


const espar1=(n)=>{
    if(n%2===0){
        return "par"
    }return "impar"
} 
const espar2=n=>n%2===0? "es par":"es impar";
console.log(espar1(4));
console.log(espar2(3));

function presentar(nombre, profesion="estudiante"){
    return `${nombre} es ${profesion}`;
}
console.log(presentar("Federico"));
console.log(presentar("Marcos","programador"));