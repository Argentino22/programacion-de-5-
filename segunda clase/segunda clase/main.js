function ej11() {
    let mayor = 1;
    let icont = 1;
    let num;
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un cero para finalizar)"));
        if (icont === 1) {
            mayor = num;
        } else {
            if (num > mayor) {
                mayor = num;
            }
        }
        icont++;
    } while (num > 0);
    console.log("el numero mayor es:" + mayor);
}
function ej11b() {
    let mayor;
    let primero = true;
    let num;
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un cero para finalizar)"));
        if (icont !== 0) {
            if (primero) {
                mayor = num;
                primero = false;
            }
        } else {
            if (num > mayor) {
                mayor = num;
            }
        }
        icont++;
    } while (num !== 0);
    if (!primero) {
        alert("ELl mayor numero es:" + mayor);
    } else {
        alert("No se ingresaron numeros validos");
    }
}

function ej12() {
    let num;
    let contp = 0;
    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`ingrese el numeros ${i}`));
        while (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero:N°" + i));
        }
        if (num >= 10 && num <= 50) {
            contp++;

        }
        console.log("Los numeros que estan entre 10 y 50 son:" + contp);
    }
}

function ej13() {
    let suma = 0
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un numero mayor 100 para finalizar)"));

        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero")
            num = parseFloat(prompt("ingrese un numero(ingrese numero negativo para finalizar)"));
        }
        if (num >= 0 && num % 2 === 0)
            suma += num;
    }
    while (num >= 0) {
        console.log("La suma de los pares:" + suma);
    }
}
function ej14() {
    let millon = 0
    let suma = 0;
    for (let i = 1; i <= 8; i++) {
        num = parseInt(prompt(`ingrese un sueldo ${i}`));
        if (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            i-- //resta la vuela y se vuelve a repetir
        } if (num >= 1000000) {
            millon++;
        }
        suma += num
    }
    let prom = suma / 8
    alert(`Sueldos mayores de un millon: ${millon},Promedio de sueldos:${prom.toFixed(2)}`);
}
function ej15() {
    let con3 = 0
    let con2 = 0
    let ambos = 0
    for (let i = 1; i <= 100; i++) {
        console.log("numeros:" + i);

        if (i % 2 === 0 && i % 3 === 0) {
            ambos++;
            con2++;
            con3;
        } else {
            if (i % 2 === 0) {
                con2++;
            }
            if (i % 3 === 0) {
                con3++;
            }
        }

    }
    console.log(`Multiplos de 2: ${con2},Multiplos de 3:${con3},Multiplos de ambos:${ambos}`);
}
function ej16() {
    let menor;
    let primero = true;
    let num;
    do {
        num = parseFloat(prompt("ingrese un numero(mayor a mil para finalizar)"));
        if (icont <= 1000) {
            if (primero) {
                menor = num;
                primero = false;
            }
        } else {
            if (num < menor) {
                menor = num;
            }
        }
        icont++;
    } while (num !== 0);
    if (!primero) {
        alert("EL menor numero es:" + menor);
    } else {
        alert("No se ingresaron numeros validos");
    }
}
function ej17() {
    let my30 = 0
    let mr10 = 0
    let medio = 0
    let temp
    for (let i = 1; i <= 12; i++) {
        temp = parseFloat(prompt("ingrese una temperatura:" + temp))
        if (isNaN(num));
        i--;
        if (i < 30 && i > 10) {
            medio++;
        } else {
            if (i >= 30) {
                my30++;
            }
            if (i <= 10) {
                mr10++;
            }
        }

    }
    console.log(`Temperatura media: ${medio},Temperaturas mayor a los treinta grados:${my30},Temperaturas menor a los diez grados:${mr10}`);
}
function ej18() {
    let contp = 0;
    let num
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese cero para finalizar)"));
        if (num !== 0 && num % 5 === 0)
            contp++;
    } while (num !== 0)
    console.log(`Multiplos de cinco: ${contp}`);
}
function ej19() {
    let num;
    let empate = 0;
    let contpo = 0;
    let contne = 0;
    for (let i = 1; i <= 10; i++) {
        num = parseFloat(prompt(`ingrese el numeros ${i}`));
        if (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            i-- //resta la vuela y se vuelve a repetir
        } else
            if (num > 0) {
                contpo++;
            } else {
                if (num < 0) {
                    contne++;
                }
            }
    }
    if (contpo > contne) {
        console.log(`Hay mas positivos:${contpo} a ${contne}`);
    } else {
        if (contne > contpo) {
            console.log(`hay mas negativos:${contne}a ${contpo}`);
        } else {
            console.log("Hay empate")
        }
    }
}
function ej20() {
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
    if (suma > 5000) {
        desc = suma * 0.95;
    } else {
        if (suma > 20000) {
            desc = suma * 0.85;
        }
    }
    if (desc > 0) {
        console.log("Obtuvo un descuento de:" + desc);
    }
    console.log(`La suma es: ${suma - desc}`);
}
function ej21() {
    let suma = 0
    let num;
    let cont = 0
    do {
        num = parseFloat(prompt("ingrese un numero(negativo para finalizar):"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese otro numero(negativo para finalizar):"))
        }
        if (num >= 0) {
            suma += num;
            cont++;
        }
    } while (num >= 0);
    let prom = suma / cont
    console.log(`La suma total es: ${suma},La cantidad de numeros son:${cont},El promedio de los numeros positivos son:${prom.toFixed(2)}`);
}
function ej22() {
    let num;
    let mayores = 0;
    let contp = 0;
    let conti = 0;
    for (let i = 1; i <= 12; i++) {
        num = parseFloat(prompt(`ingrese el numeros ${i}`));
        if (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            i-- //resta la vuela y se vuelve a repetir
        } else
            if (num >= 100 && num % 2 === 0) {
                contp++;
            } else
                if (num >= 100 && num % 1 === 0) {
                    conti++;
                }
        if (num >= 100) {
            mayores++;
        } else {
            if (num % 2 === 0) {
                contp++;
            }
            else
                conti++;
        }
    }
    console.log(`Par:${contp},Impar:${conti},Mayores a 100:${mayores}`);
}
function ej23() {
    let menor = 0;
    let mayor = 0;
    let primero;
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un cero para finalizar)"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero(ingrese un cero  para finalizar)"));
        }
        if (num !== 0) {
            if (primero) {
                mayor = num;
                menor = num;
                primero = false;
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

    }
    while (num !== 0);
    alert(`Mayor:${mayor},Menor:${menor}`);
}
function ej24() {
    let mde = 0
    let señ = 0
    let menor = 0
    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`ingrese el numeros ${i}`));
        if (isNaN(num)) {
            alert("Ingreso invalido.Por favor ingrese un numero");
            i-- //resta la vuela y se vuelve a repetir
        } if (num >= 18) {
            mde++;
        } if (num >= 65) {
            señ++
        } else {
            menor++;
        }
    } alert(`Mayores de edad: ${mde},Mayores a 65:${señ},Menores de edad:${menor}`);

}
function ej25() {
    let con6 = 0
    let con4 = 0
    let ambos = 0
    for (let i = 1; i <= 80; i++) {
        console.log("numeros:" + i);
        if (i % 6 === 0 && i % 4 === 0) {
            ambos++;
        } else {
            if (i % 6 === 0) {
                con6++
            }
            if (i % 4 === 0) {
                con4++
            }
        }
    }
    console.log(`Multiplos de 6: ${con6},Multiplos de 4:${con4},Multiplos de ambos:${ambos}`);
}
function ej26() {
    let cont = 0;
    let suma = 0;
    let contn = 0;
    do {
        num = parseFloat(prompt("ingrese un numero(Mayor a 500 para finalizar)"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero( Mayor 500 para finalizar)"));
        }
        if (num <= 500) {
            cont++;
            suma += num
        } else {
            (num > 0)
            contn++;
        }

    }
    while (num <= 500);
    console.log(`La suma es: ${suma},Se ingresaron:${cont},Se ingresaron:${contn}`)
}
function ej27() {
    let mayor;
    let menor;
    let num;
    let cont10 = 0;
    for (let i = 1; i <= 15; i++) {
        num = parseFloat(prompt("Ingrese el numero:"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese el numero:"));
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
        if (num === 10) {
            cont10++;
        }
    }
    alert(`Mayor:${mayor},Menor:${menor},Numero 10:${cont10}`);
}
function ej28() {
    let ambos = 0;
    let cont3 = 0;
    let cont2 = 0;
    do {
        num = parseFloat(prompt("ingrese un numero(Negativo para finalizar)"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero(Negativo para finalizar)"));
        }
        if (num >= 0) {
        } else {
            if (num % 2 === 0 && num % 3 === 0) {
                ambos++;
                cont2++;
                cont3++;
            } else {
                if (i % 2 === 0) {
                    cont2++;
                } else {
                    if (i % 3 === 0) {
                        cont3++;
                    }
                }
            }
        }
    }
    while (num >= 0)
    console.log(`Multiplos de ambos: ${ambos},Multiplos de dos: ${cont2},Multiplos de tres: ${cont3}`);
}
function ej29() {
    let nmayor;
    let nmenor;
    let cont=0;
    let apro=0;
    let desa=0;
    for (let i = 1; i <= 20; i++) {
        num = parseFloat(prompt("Ingrese el numero:"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese el numero:"));
        }
        if (i === 1) {
            nmayor = num;
            nmenor = num;
            suma+=num
            cont++;
        } else {
            if (num > mmayor) {
                mmayor = num;
            } else {
                if (num < mmenor) {
                    mmenor = num;
                }
            }
        }
        if(num>=7){
            apro++;
        }else{
            desa++;
        }
    }
    let prom=suma/cont
    alert(`La nota mayor:${mmayor},La nota menor:${mmenor},El promedio es:${prom},La cantidad de aprobados son:${apro},La cantidad de desaprobados son:${desa}`);
}
function ej30(){
 let cont = 0;
    let suma = 0;
    let desc;
    do {
        num = parseFloat(prompt("ingrese un numero(ingrese un cero para finalizar)"));
        while (isNaN(num)) {
            alert("ingreso invalido.Por favor ingrese un numero");
            num = parseFloat(prompt("ingrese un numero(ingrese un cero  para finalizar)"));
        }
        if (num > 0) {
            cont++;
            suma += cont;
        }
    }
    while (num !== 0);
    if (suma > 15000) {
        desc = suma * 0.10;
    } else {
        if (suma > 30000) {
            desc = suma * 0.20;
        }
    }
    if (desc > 0) {
        console.log("Obtuvo un descuento de:" + desc);
    }
    console.log(`La suma es: ${suma - desc},La cantidad de productos son:${cont}`);

}







