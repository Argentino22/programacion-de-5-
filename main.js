// PRÁCTICA 1 - ABSTRACCIÓN
class Celular {
    constructor(marca, modelo, pin) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 100;

        // Propiedades privadas
        this.#pin = pin;
        this.#intentos = 0;
        this.#bloqueado = false;
    }
    #pin;
    #intentos;
    #bloqueado;
    // Cargar batería
    cargar() {
        this.bateria = 100;
        console.log("El celular está cargado al 100%.");
    }
    // Usar batería
    usar(minutos) {
        for (let i = 0; i < minutos; i++) {
            this.bateria--
            if (this.bateria === 0) {
                console.log("Se apago : 0% bateria")
            }

        }
        console.log(`Bateria : ${this.bateria}`)
    }
    // Desbloquear celular
    desbloquear(pin) {
        if (this.#bloqueado) {
            console.error("El celular está bloqueado.");
            return false;
        }
        if (pin === this.#pin) {
            this.#intentos = 0;
            console.log("Celular desbloqueado.");
            return true;
        } else {
            this.#intentos++;
            console.error("PIN incorrecto.");

            if (this.#intentos >= 3) {
                this.#bloqueado = true;
                console.error("El celular se bloqueo por 3 intentos errados.");
            }
            return false;
        }
    }
    // Cambiar PIN
    cambiarPin(pinActual, pinNuevo) {
        if (this.#bloqueado) {
            console.error("El celular está bloqueado.");
            return;
        }

        if (pinActual === this.#pin) {
            this.#pin = pinNuevo;
            this.#intentos = 0;
            console.log("PIN cambiado correctamente.");
        } else {
            console.error("El PIN actual es incorrecto.");
        }
    }

    // Encender celular
    encender() {
        console.log("El celular se prendio.");
    }
}

// Crear dos celulares
let celular1 = new Celular("Samsung", "A15", 1234);
let celular2 = new Celular("Iphone", "18", 5678);

// Probar los métodos
celular1.cargar();
celular1.usar(20);

celular2.cargar();
celular2.usar(30);

// Validar minutos
celular1.usar(-5);
celular1.usar("diez");
// PRÁCTICA 3 - HERENCIA

class Smartphone extends Celular {
constructor(marca, modelo, pin, sistema) {
        super(marca, modelo, pin);

        this.sistema = sistema;
        this.apps = [];
    }

    instalarApp(nombre) {
        this.apps.push(nombre);
        console.log("Aplicación instalada: " + nombre);
    }

    desinstalarApp(nombre) {
        let posicion = this.apps.findIndex(app => app === nombre);

        if (posicion === -1) {
            console.log("La app no está instalada.");
        } else {
            this.apps.splice(posicion, 1);
            console.log("Aplicación desinstalada: " + nombre);
        }
    }

    listarApps() {
        if (this.apps.length === 0) {
            console.log("No hay aplicaciones.");
        } else {
            this.apps.forEach((app, indice) => {
                console.log((indice + 1) + ". " + app);
            });
        }
    }
    usar(minutos) {
        super.usar(minutos * 2);
    }

    // Encender según el sistema
    encender() {
        console.log("Iniciando " + this.sistema + "...");
    }
}

// Crear
let smartphone1 = new Smartphone(
    "Samsung",
    "S24",
    1234,
    "Android"
);

// Probar métodos heredados
smartphone1.cargar();
smartphone1.usar(10);
smartphone1.desbloquear(1234);

// Instalar aplicaciones
smartphone1.instalarApp("WhatsApp");
smartphone1.instalarApp("Instagram");
smartphone1.instalarApp("YouTube");

// Listar aplicaciones
smartphone1.listarApps();

// Desinstalar aplicación
smartphone1.desinstalarApp("Instagram");

// Volver a listar
smartphone1.listarApps();
class CelularBasico extends Celular {
    constructor(marca, modelo, pin) {
        super(marca, modelo, pin);
    }

    encender() {
        console.log("El celular básico se enciende.");
    }
}

// Crear objetos de las tres clases
let celular3 = new Celular("Samsung", "A15", 1234);

let smartphone2 = new Smartphone(
    "Iphone",
    "18",
    5678,
    "apple"
);
let basico1 = new CelularBasico(
    "Nokia",
    "1100",
    1111
);
// Guardarlos en un arreglo
let celulares = [celular3, smartphone2, basico1];

// Recorrer el arreglo
celulares.forEach(celular => {
    celular.encender();
});    