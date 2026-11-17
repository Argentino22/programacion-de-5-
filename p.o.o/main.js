//Clases-> Son plantillas genericas representativas de algo tangible o intangible
//Sintaxix ->class NombreClase (Singular,Primer letra Mayusculas)
class Animal {
    //Constructor -> incializador o invocar las propiedades de la clase
    constructor(cant_patas, tipo_pelaje, altura) {//Parametros ->recibem um valor
        this.cant_patas = cant_patas;
        this.tipo_pelaje = tipo_pelaje;
        this.altura = altura;
        //this->clave=valor
    }
    emitirSonido() {
        `El animal ${this.nombre} hace el siguiente sonido : ${this.sonido}`
    }
    get pelajeMayusculas() {
        return this.tipo_pelaje.toUppercase();
    }
    set cambiarPatas(cant_patas) {
        if (cant_patas < 0) {
            console.log("Envia una cantidad de Patas real");
        } else {
            this.cant_patas = cant_patas;
        }
    }
}
//Instancia de Animal
//Nombre variable = new (nueva instancia) + clase (Animal) + (Valores)
let conejo = new Animal(4, "Pelo corto", "Pequeño");
let perro = new Animal(4, "Pelo largo", "Grande");
let arana = new Animal(8, "Pelo corto", "Pequeño");
//Accseso a Propiedades 
console.log("El Perro tiene =" + perro.tipo_pelaje)

//Acceso a Propiedaes
console.log("La araña tiene" + arana["cant_patas"] + "patas");
console.log("El conejo tiene" + conejo["cant_patas"] + "patas");

 conejo.cant_patas=10;
 console.log("El conejo tiene"+ conejo.cant_patas+"Patas");