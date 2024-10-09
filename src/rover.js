const Posicion = require("./posicion");

// VER AL FINAL EL BLOQUE DE COMENTARIOS CON INTERROGANTES

const Rover = function(x, y, zonaHabilitada){
    this.zonaHabilitada = zonaHabilitada;
    this.posicion = new Posicion(x, y);
    this.instrucciones = [
        new ComandoW(),
        new ComandoS(),
        new ComandoD(),
        new ComandoA()//,
        // new ComandoInvalido()
    ];

    this.moverse = function(orden){

        // this.validarLargoSecuencia(orden);
        let nuevaPosicion = this.posicion;
        orden.split("").forEach(movimiento => {
            let comando = this.instrucciones.find(opcion => opcion.comandoCorrecto(movimiento));
            nuevaPosicion = comando.aplicar(nuevaPosicion);
        });
        
        this.establecerPosicion(nuevaPosicion);

        return this.posicion;
    }

    this.establecerPosicion = function(posicion){
        if(zonaHabilitada.estaDentro(posicion)){
            this.posicion = posicion;
        }
    }

    // this.secuenciaEnRango = function(secuencia){
    //     return secuencia.length <= MAX_SECUENCIA;
    // }

    // this.validarLargoSecuencia = function(secuencia){
    //     if (!this.secuenciaEnRango(secuencia)) {
    //         throw new Error("Se excede el tamaño maximo de la secuencia (10)");
    //     }
    // }
}

const ComandoW = function (){
    this.comandoCorrecto = function(comando){
        return comando === "W";
    }

    this.aplicar = function(posicion){
        return posicion.incrementarY();
    }
}

const ComandoS = function (){
    this.comandoCorrecto = function(comando){
        return comando === "S";
    }

    this.aplicar = function(posicion){
        return posicion.decrementarY();
    }
}

const ComandoD = function (){
    this.comandoCorrecto = function(comando){
        return comando === "D";
    }

    this.aplicar = function(posicion){
        return posicion.incrementarX();
    }
}

const ComandoA = function (){
    this.comandoCorrecto = function(comando){
        return comando === "A";
    }

    this.aplicar = function(posicion){
        return posicion.decrementarX();
    }
}

// const ComandoInvalido = function(){ // TENGO MIS DUDAS QUE TAN HARDCODED PUEDA SER ESTO
//     this.comandoCorrecto = function(comando){
//         let opcionesValidas = ["W","A","S","D"];
//         return (!opcionesValidas.includes(comando));
//     }

//     this.aplicar = function(){
//         throw new Error("Comando desconocido");
//     }
// }

module.exports = Rover;
/*
ACA VOY A PLANTEAR MIS DUDAS Y OBSERVACIONES MAS GENERALES
Empezando por el uso de ComandoInvalido, no se si se considera un poco hardcoding,
ya que estoy aprovechando el funcionamiento de moverse para lanzar un Error, a pesar
de que, por la sintaxis, estoy intentando igualar a mi posicion a la respuesta del
mensaje aplicar() que tiene mi objeto ComandoInvalido.

Por otra parte, hay cosas que en un principio se las modele al Rover, pero que me
doy cuenta que corresponden a otra entidad, que es la central, pues es un sinsentido
que el Rover intente interpretar si una secuencia contiene contenido erroneo, por
ejemplo un caracter, eso le corresponde a la central, además, la central deberá pasar
todo caracter a MAYUSCULAS antes de enviar una secuencia, para ello operaremos con
mensajes y propiedades del prototipo String, para poder corregirlo y simplificar la
funcionalidad del Rover.

Mi conclusion es que si algo parece ser hardcodeado y no se me ocurre alguna manera
sencilla de implementarlo en un objeto en particular, probablemente sea trabajo de
otro objeto realizar dicha funcion, como es en este caso con central de la tierra.

Tambien me surgió la duda si debemos modificar o eliminar funcionalidades y tests de
otro Suite, si terminamos delegando las mismas a otro objeto, por ejemplo la opcion
de forEach de la secuencia, que tendrá más sentido en central (en este caso no lo haré
porque la consigna claramente indica que Central le envía a Rover la secuencia), pero
sí en este caso enviaré la de comprobar extension mayor a 10 y si llegan comandos
invalidos.
*/
