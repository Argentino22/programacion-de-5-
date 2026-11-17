//solicitar numeros al usuario hasta que ingrese un negativo.
// Mostrar la suma de total de los numeros ingresados 
function ej1() {
    let suma = 0
    let num = parseFloat(prompt("ingrese un numero(negativo para finalizar):"));
    while (num >= 0) {
        suma += num;
        num = parseFloat(prompt("ingrese otro numero(negativo para finalizar):"))
    }
    alert("la suma total es:" + suma);
}
function ej12() {
    let suma = 0
    let num;
    do {
        num = parseFloat(prompt("ingrese un numero(negativo para finalizar):"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese otro numero(negativo para finalizar):"))
        }
        if (num >= 0) {
            suma += num;
        }
    } while (num >= 0);
    alert("la suma total es:" + suma);
}

//pedir 10 numeros e indicar cuantos son positivos,negativos y ceros usando for
function ej2() {
    let num;
    let cont0 = 0;
    let contp = 0;
    let contn = 0;
    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`ingrese el numeros ${i}`));
        while (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero:N°" + i));
        }
        if (num > 0) {
            contp++;
        } else {
            if (num < 0) {
                contn++;
            } else {
                cont0++;
            }

        }
    }
    console.log(`Positivo: ${contp},Negativo:${contn},Ceros:${cont0}`);
}
function ej2() {
    let num;
    let cont0 = 0;
    let contp = 0;
    let contn = 0;
    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`ingrese el numeros ${i}`));
        if (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            i-- //resta la vuela y se vuelve a repetir
        } else
            if (num > 0) {
                contp++;
            } else {
                if (num < 0) {
                    contn++;
                } else {
                    cont0++;
                }

            }
    }
    console.log(`Positivo: ${contp},Negativo:${contn},Ceros:${cont0}`);
}
//ingresar numeros hasta que el usuario escriba 0.!== significa distinto de y condicion
//calcular el promedio de los numeros positivos.Utilizando while
function ej3() {
    let num = parseFloat(prompt("ingrese un numero(ingrese 0 para finalizar)"));
    let contp = 0;
    let suma = 0;
    while (num !== 0) {
        if (num > 0) {
            suma += num;//suma=suma+num;
            contp++;
        }
        num = parseFloat(prompt("ingrese un numero(ingrese 0 para finalizar):"));
    }
    if (contp > 0) {
        alert("Promedio de positivos:" + (suma / contp).toFixed(2));
    } else {
        alert("No ingreso numeros positivos");
    }

}
function ej3() {
    let num = parseFloat(prompt("ingrese un numero(ingrese 0 para finalizar)"));
    let contp = 0;
    let suma = 0;
    while (num !== 0) {
        while (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero(ingrese 0 para finalizar)"));
        }
        if (num > 0) {
            suma += num;//suma=suma+num;
            contp++;
        }
        num = parseFloat(prompt("ingrese un numero(ingrese 0 para finalizar):"));
    }
}
//solicitar 5 edades e indicar cuantos son mayores de edad.
//si la edad es mayor a 65,contandolo en un grupo especial.usar for
function ej4() {
    let mde = 0
    let señ = 0
    for (let i = 1; i <= 5; i++) {
        num = parseInt(prompt(`ingrese el numeros ${i}`));
        if (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            i-- //resta la vuela y se vuelve a repetir
        } if (num >= 18) {
            mde++;
        } if (num >= 65) {
            señ++
        }

    } alert(`Mayores de edad: ${mde},Mayores a 65:${señ}`);

}
//mostrar los numeros del 1 al 50.
// indicar ademas cuantos son multiplos de 3 y cuantos de 5.Usar for
function ej5() {
    let con3 = 0
    let con5 = 0
    for (let i = 1; i <= 50; i++) {
        console.log("numeros:" + i);
        if (i % 3 === 0) {
            con3++
        }
        if (i % 5 === 0) {
            con5++
        }
    }
    console.log(`Multiplos de 3: ${con3},Multiplos de 5:${con5}`)
}
//ingresar numeros hasta que el numero supere 100.
// Contar cuantos numeros se ingresaron y acumular su suma. Usar do while
function ej6() {

    let cont = 0;
    let suma = 0;
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un numero mayor 100 para finalizar)"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero(ingrese un numero mayor 100 para finalizar)"));
        }
        if (num <= 100) {
            cont++;
            suma += cont;
        }
    }
    while (num <= 100);
    console.log(`La suma es: ${suma},Se ingresaron:${cont}`)
}
//Pedir 10 numeros e informar el mayor y el menor.Usar for
function ej7() {
    let mayor;
    let menor;
    let num;
    for (let i = 1; i <= 10; i++) {
        num = parseFloat(prompt("Ingrese el $(i)° numero:"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese el $(i)° numero:"));
        }
        if (i === 1) {
            mayor = num;
            menor = num;
        } else {
            if (num > mayor) {
                mayor = num;
            } else {
                if (num < menor) {
                    menor = num;
                }
            }
        }
    }
    alert(`Mayor:${mayor},Menor:${menor}`);
}
//Solicitar numeros hasta ingresar un numero negativo.
//Informar cuantos numeros pares e inpares se ingresaron.Usar while
function ej8() {
    let num = parseFloat(prompt("ingrese un numero(ingrese numero negativo para finalizar)"));
    let contp = 0;
    let contI = 0;
    while (num >= 0) {
        if (num % 2 === 0) {
            contp++;
        } else {
            contI++;
        }
        num = parseFloat(prompt("ingrese un numero(ingrese numero negativo para finalizar)"));
    }
    alert(`Par:${contp},Impar:${contI}`)
}
//ingresar 15 notas de alumnos.Calcular el promedio general y la cantidad de aprobados(nota>=7) y desaprobados.Usar for
function ej9() {
    let nota;
    let aprobados = 0;
    let suma = 0;
    let desaprobados = 0;
    for (let i = 1; i <= 15; i++) {
        nota = parseFloat(prompt(`ingrese notas(0 a 10) ${i}`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota invalida.Ingrese un numero entre 0 a 10");
            i--;
        }else {
            suma += nota;
        } if (nota >= 7) {
            aprobados++;
        } else {
            desaprobados++;
        }

    }
    let promedio=suma/15
alert(`Promedio:${promedio.toFixed(2)},Aprobados:${aprobados},Desaprobados:${desaprobados}`);
}
//Simular un sistema de facturacion.Ingresar precios de productos hasta que se ingrese 0
//Calcular el total a pagar.Si el total supera 10.000, aplicar un 10% de descuento.Usar do...while
function ej10(){
    let cont = 0;
    let suma = 0;
    let desc;
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un cero para finalizar)"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero(ingrese un cero  para finalizar)"));
        }
        if (num >= 0) {
            cont++;
            suma += cont;
        }
    }
    while (num !== 0);
    if( suma >10000){
        desc= suma *0.10;
    }
    console.log(`La suma es: ${suma},El total a pagar es:${desc}`);
}
ej10()

