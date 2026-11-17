//Practica 1 :Abstraccion
class Celular {
    #pin
    #intentos
    #bloqueado
    constructor(marca, modelo, bateria, pin) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
        this.#pin = pin;
        this.#intentos = 0;
        this.#bloqueado = false
    }
    cargar(minutos) {
        if (this.bateria === 100) {
            console.log("La Bateria ya esta completa");
            return
        }
        for (let i = 0; i < minutos; i++) {
            this.bateria++;
            if (this.bateria === 100) {
                console.log("Bateria Completa")
                break;
            }
        }
        console.log(`Bateria : ${this.bateria}%`)
    }
    usar(minutos) {
        for (let i = 0; i < minutos; i++) {
            this.bateria--
            if (this.bateria === 0) {
                console.log("Se apago : sin bateria")
            }

        }
        console.log(`Bateria : ${this.bateria}%`)
    }
    //Compara pin original con pin ingresado
    // === -> comparar valor y tipo (string,number)
    //return this.#pin === pin;
    desbloquear(pin) {
        if (this.#pin === pin) {
            console.log("Contraseña Existosa")
        } else {
            for (let i = 0; this.#intentos < 3; i++) {
        
                console.log("Pin Incorrecto")
                if (this.#intentos === 3) {
                    console.error("Celular  Bloqueado")
                }
            }

        }
    }

cambiarPin(pinNuevo, pin){
    if (this.desbloquear(pin)) {
        this.#pin = pinNuevo
        console.log("Cambio de Contraseña existoso")
    } else {
        console.log("Contraseña Incorrecta")
    }
}
}
let celular1 = new Celular("Motorola", "Edge", 50, 1234)
let celular2 = new Celular("Iphone", "18", 20, 4321)

//Practica 2 Encapsulamiento :

//celular1.#pin pone que no puede acceder  a la propiedad  porque es un identificador privado

class Smartphone extends Celular{
    constructor(marca, modelo, pin ,sistema,bateria){
        super(marca,pin,modelo,bateria);//propiedades heredadas
        //llama al método constructor del padre y obtenemos acceso a las propiedades y métodos 
        this.sistema=sistema;
        this.apps = [];
    }
    instalarApp(nombre){
     this.apps.push(nombre);
     console.log("La aplicacion agregada es: "+ nombre);
    }
    desinstalarApp(nombre){
        this.apps.findIndex(a=>a === nombre)
        if(this.apps.includes(nombre)){

        }
    }
    listarApps(){
         if (this.apps.length === 0) {
        console.log("No hay apps instaladas.");
    } else {
        this.apps.forEach((app, i) => {
            console.log((i + 1) + ". " + app);
        });
    }
    }
}

let smart1 = new Smartphone("Samsung", "Galaxy",50,"1234","Android")