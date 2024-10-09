const Rover = require("../src/rover");
const Posicion = require("../src/posicion");
const Zona = require("../src/zona");

const arrX = [0, 100];
const arrY = [0, 100];
const zona = new Zona(arrX, arrY);

describe("Respuesta a las secuencias de movimientos", () => {
    test("Rover se mueve hacia adelante una sola vez", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "W";
        const posicionEsperada = new Posicion(50, 51);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });
    
    test("Rover se mueve hacia atras una sola vez", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "S";
        const posicionEsperada = new Posicion(50, 49);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });
    
    test("Rover se mueve hacia la derecha una sola vez", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "D";
        const posicionEsperada = new Posicion(51, 50);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });
    
    test("Rover se mueve hacia la izquierda una sola vez", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "A";
        const posicionEsperada = new Posicion(49, 50);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada)); // ASI SE ESCRIBEN PA COMPARAR OBJETOS
    });

    test("Rover responde a una secuencia de movimientos", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "AWA";
        const posicionEsperada = new Posicion(48, 51);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("Rover responde a varias secuencias de movimientos, una a la vez", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden1 = "AWDSASDWSD";// (51, 49)
        const orden2 = "ASWSAWASW";// (48, 49)
        const posicionEsperada = new Posicion(48, 49);
        
        // Exercise
        rover.moverse(orden1);
        const resultado = rover.moverse(orden2);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("Rover responde a una secuencia de movimientos que vuelve al estado original", ()=>{
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "AWDS";
        const posicionEsperada = new Posicion(50, 50);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    // test("Rover no acepta secuencias mayores a 10 comandos", ()=>{
    //     // Setup
    //     const rover = new Rover(50, 50, zona);
    //     const orden = "AWDSASDWSDASWDSAWASDW";
    //     const error = new Error("Se excede el tamaño maximo de la secuencia (10)");
        
    //     // Exercise
    //     // ESTE ES EL UNICO CASO DONDE DIRECTAMENTE EL EXERCICE SE HACE DIRECTAMENTE EN EL ASSERT
    
    //     // Assert
    //     expect(() => rover.moverse(orden)).toThrow(error); // ASI SE ESCRIBEN LOS DEL TIPO ERROR
    // });

    // test("Rover no acepta comandos distintos a A, S, W, D", ()=>{
    //     // Setup
    //     const rover = new Rover(50, 50, zona);
    //     const orden = "ADWSDCSD";
    //     const error = new Error("Comando desconocido");
        
    //     // Exercise
    //     // ESTE ES EL UNICO CASO DONDE DIRECTAMENTE EL EXERCICE SE HACE DIRECTAMENTE EN EL ASSERT
    
    //     // Assert
    //     expect(() => rover.moverse(orden)).toThrow(error); // ASI SE ESCRIBEN LOS DEL TIPO ERROR
    // });
});

describe("Manejo del Rover con respecto a la zona limitada", () => {
    test("Rover se mueve dentro del mapa", () => {
        // Setup
        const rover = new Rover(50, 50, zona);
        const orden = "AWAAAAAA";
        const posicionEsperada = new Posicion(43, 51);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("Rover se mueve sobre borde", () => {
        // Setup
        const rover = new Rover(1, 50, zona);
        const orden = "AWWW";
        const posicionEsperada = new Posicion(0, 53);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("Rover se saldría del mapa, así que se queda en origen", () => {
        // Setup
        // Setup
        const rover = new Rover(2, 50, zona);
        const orden = "AAAAAA";
        const posicionEsperada = new Posicion(2, 50);
        
        // Exercise
        const resultado = rover.moverse(orden);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });

    test("Rover se saldría del mapa, así que se queda en su punto anterior a la secuencia", () => {
        // Setup
        // Setup
        const rover = new Rover(10, 50, zona);
        const orden1 = "AWDSASDWSD";// (51, 49)
        const orden2 = "ASWSAWASW";// (8, 49)
        const orden3 = "AAAAAAAAAA";// (-2, 49) --> (8, 49)
        const posicionEsperada = new Posicion(8, 49);
        
        // Exercise
        rover.moverse(orden1);
        rover.moverse(orden2);
        const resultado = rover.moverse(orden3);
    
        // Assert
        expect(JSON.stringify(resultado)).toEqual(JSON.stringify(posicionEsperada));
    });
});
