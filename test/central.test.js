const Central = require("../src/central");
const Rover = require("../src/rover");
const Posicion = require("../src/posicion");
const Zona = require("../src/zona");

const arrX = [0, 100];
const arrY = [0, 100];
const zona = new Zona(arrX, arrY);

describe("La central se comunica con el Rover", () => {
    test("La central envía una orden al Rover (W)", () => {
        // Setup
        const rover = new Rover(50, 50, zona);
        const central = new Central(rover);
        const orden = "W";
        const posicionEsperada = new Posicion(50, 51);

        // Exercise
        const resultado = central.enviarSecuencia(orden);

        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("La central envía una orden al Rover (A)", () => { // SI CUMPLEN ESTAS DOS, ASUMO CUMPLEN TODAS LAS ORDENES
        // Setup
        const rover = new Rover(50, 50, zona);
        const central = new Central(rover);
        const orden = "A";
        const posicionEsperada = new Posicion(49, 50);

        // Exercise
        const resultado = central.enviarSecuencia(orden);

        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("La central envía una secuencia al Rover", () => {
        // Setup
        const rover = new Rover(50, 50, zona);
        const central = new Central(rover);
        const secuencia = "AWSD";
        const posicionEsperada = new Posicion(50, 50);

        // Exercise
        const resultado = central.enviarSecuencia(secuencia);

        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("La central envía como argumento del mensaje una secuencia en minusculas", () => {
        // Setup
        const rover = new Rover(50, 50, zona);
        const central = new Central(rover);
        const secuencia = "awsd";
        const posicionEsperada = new Posicion(50, 50);

        // Exercise
        const resultado = central.enviarSecuencia(secuencia);

        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });
});

describe("Manejo de errores en la secuencia, desde la central", () => {
    test("Rover no acepta secuencias mayores a 10 comandos", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const central = new Central(rover);
        const secuencia = "AWDSASDWSDASWDSAWASDW";
        const error = new Error("Se excede el tamaño maximo de la secuencia (10)");
        
        // Exercise
        // ESTE ES EL UNICO CASO DONDE DIRECTAMENTE EL EXERCICE SE HACE DIRECTAMENTE EN EL ASSERT
    
        // Assert
        expect(() => central.enviarSecuencia(secuencia)).toThrow(error); // ASI SE ESCRIBEN LOS DEL TIPO ERROR
    });

    test("Rover no acepta comandos distintos a A, S, W, D", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const central = new Central(rover);
        const secuencia = "ADWSDCSD";
        const error = new Error("Comando desconocido");
        
        // Exercise
        // ESTE ES EL UNICO CASO DONDE DIRECTAMENTE EL EXERCICE SE HACE DIRECTAMENTE EN EL ASSERT
    
        // Assert
        expect(() => central.enviarSecuencia(secuencia)).toThrow(error); // ASI SE ESCRIBEN LOS DEL TIPO ERROR
    });
});

/*
ACA PONDRE LAS DUDAS U OBSERVACIONES QUE TENGA
No debemos enviar mensajes a otro objeto que no sea Central en este test,
salvo para el Setup si asi se requiere.
*/
