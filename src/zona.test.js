const Posicion = require("../src/posicion");
const Zona = require("../src/zona");

const arrX = [0, 100];
const arrY = [0, 100];

test("Una posicion esta dentro de zona", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(10, 10);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta fuera de zona (offset en X por izquierda)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(-10, 10);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en X por derecha)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(110, 10);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en Y por izquierda)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(10, -10);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en Y por derecha)", () => {
    // Setup
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(10, 110);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en ambas izq/abajo)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(-10, -10);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en ambas der/abajo)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(110, -10);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en ambas izq/arriba)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(-10, 110);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta fuera de zona (offset en ambas der/arriba)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(110, 110);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(false);
});

test("Una posicion esta en borde de zona (lado izquierdo)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(0, 30);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (lado derecho)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(30, 100);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (lado abajo)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(30, 0);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (lado arriba)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(30, 100);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (esquina izq/abajo)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(0, 0);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (esquina izq/arriba)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(0, 100);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (esquina der/abajo)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(100, 0);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});

test("Una posicion esta en borde de zona (esquina der/arriba)", () => {
    // Setup
    
    
    const zona = new Zona(arrX, arrY);
    const posicion = new Posicion(100, 100);

    // Exercise
    const resultado = zona.estaDentro(posicion);

    // Assert
    expect(resultado).toBe(true);
});