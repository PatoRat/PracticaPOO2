// COMO SE LE PASA EL ROVER, NO HACE FALTA IMPORTAR EL MODULO

const Central = function(rover){
    this.roverConectado = rover;
    const opcionesValidas = ["W","A","S","D"];

    this.enviarSecuencia = function(secuencia){
        let secuenciaMayus = secuencia.toUpperCase();
        this.validarSecuencia(secuenciaMayus);
        
        return this.roverConectado.moverse(secuenciaMayus);
    }

    this.validarSecuencia = function(secuencia){
        if(this.largoInaceptable(secuencia)){
            throw new Error("Se excede el tamaño maximo de la secuencia (10)");
        }
        
        this.comandoInvalido(secuencia);
    }

    this.largoInaceptable = function(secuencia){
        return secuencia.length > 10;
    }

    this.comandoInvalido = function(secuencia){
        secuencia.split("").forEach(comando => {
            if(!opcionesValidas.includes(comando)){
                throw new Error("Comando desconocido");
            }
        });
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

module.exports = Central;