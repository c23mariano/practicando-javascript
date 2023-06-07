let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");

console.log (nombre + apellido);

const saludar = (nombre) => {
console.log ("Hola " + nombre);
}

    alert ("Hola! " + nombre + " " + apellido + " ");

let edad = prompt ("Ingrese su edad")
    if (edad >= 18){
        alert("Sos mayor de edad, puedes continuar.")
    } else{
        alert("Eres menor de edad, no puedes continuar")
    }

console.log (edad);

let modelos = ["Sandero", "Kangoo", "Alaskan", "Oroch"];
console.log (modelos);

let seleccion = "";
let marca;
let modelo;
let version;
    
    while (seleccion !== "1" && seleccion !== "2") {
        seleccion = prompt("Selecciona una de las marcas a cotizar:\n1. Renault\n2. Volkswagen");
    
        switch (seleccion) {
            case "1":
                marca = "Renault";
                let seleccionar = prompt("Selecciona un modelo de interés:\n1. Sandero\n2. Kangoo\n3. Alaskan\n4. Oroch");
                switch (seleccionar) {
                    case "1":
                        modelo = "Sandero";
                        let seleccionarVersion = prompt("Selecciona una versión de interés:\n1. Life\n2. Intense");
                        switch (seleccionarVersion) {
                            case "1":
                                version = "Life"; {
                                    alert(`Ha seleccionado la marca ${marca}, el modelo ${modelo} y la versión ${version}.`);
                                    alert("Colores disponibles: Azul Cosmos, Rojo Fuego y Gris Etoile")
                                    alert("Precio contado es $5.200.0000.-")
                                    alert("Gastos de acarreo y patentamiento $278.600.-")
                                }
                                break;
                            case "2":
                                version = "Intense"; {
                                    alert(`Ha seleccionado la marca ${marca}, el modelo ${modelo} y la versión ${version}.`);
                                    alert("Colores disponibles: Blanco Glaciar, Rojo Fuego y Gris Etoile")
                                }
                                break;
                            default:
                                alert("Opción inválida. Intente nuevamente.");
                                break;
                        }
                        break;
                    case "2":
                        modelo = "Kangoo";
                        let seleccionarVersionKangoo = prompt("Selecciona una versión de interés:\n1. Confort\n2. Emotion");
                        switch (seleccionarVersionKangoo) {
                            case "1":
                                version = "Confort"; {
                                    alert(`Ha seleccionado la marca ${marca}, el modelo ${modelo} y la versión ${version}.`);
                                    alert("SOLO FUGON DISPONIBLE EN COLOR BLANCO GLACIAR!")
                                }
                                break;
                            case "2":
                                version = "Emotion"; {
                                    alert(`Ha seleccionado la marca ${marca}, el modelo ${modelo} y la versión ${version}.`);
                                    alert("SOLO 5 ASIENTOS DISPONIBLE EN COLOR GRIS ETOILE!")
                                }
                                break;
                            default:
                                alert("Opción inválida. Intente nuevamente.");
                                break;
                        }
                        break;
                    case "3":
                        modelo = "Alaskan";
                        let seleccionarVersionAlaskan = prompt("Selecciona una versión de interés:\n1. Intense\n2. Iconic");
                        switch (seleccionarVersionAlaskan) {
                            case "1":
                                version = "Intense"; {
                                    alert(`SIN STOCK DISPONIBLE`);
                                }
                                break;
                            case "2":
                                version = "Iconic"; {
                                    alert(`Ha seleccionado la marca ${marca}, el modelo ${modelo} y la versión ${version}.`);
                                    alert("Colores disponibles: Azul Cosmos y Negro Nacre")
                                }
                                break;
                            default:
                                alert("Opción inválida. Intente nuevamente.");
                                break;
                        }
                        break;
                    case "4":
                        modelo = "Oroch";
                        let seleccionarVersionOroch = prompt("Selecciona una versión de interés:\n1. Emotion\n2. Iconic");
                        switch (seleccionarVersionOroch) {
                            case "1":
                                version = "Emotion";
                                break;
                            case "2":
                                version = "Iconic";
                                break;
                            default:
                                alert("Opción inválida. Intente nuevamente.");
                                break;
                        }
                        break;
                    default:
                        alert("Opción inválida. Intente nuevamente.");
                        break;
                }
                break;
            case "2":
                marca = "Volkswagen";
                alert("Ha seleccionado Volkswagen.");
                break;
            default:
                alert("Opción inválida. Intente nuevamente.");
                break;
        }
    }
console.log (marca, modelo, version)


function Auto (marca, modelo, version, colores, precio) {
        this.marca (marca);
        this.modelo (modelo);
        this.version (version);
        this.colores (colores);
        this.precio (precio);
}
    
const auto1 = new Auto ("Renault", "Sandero", "Life", "Gris Etoile, Blanco Glaciar y Rojo Fuego", 5200000);
const auto2 = new Auto ("Renault", "Kangoo", "Confort 1.6 1Pl", "Blanco Glaciar y Gris Etoile", 6400000);
    
console.log(auto1);
console.log(auto2);