const Zona = function(extremosX, extremosY){
    this.limitesX = extremosX; // PARA DEFINIR MEJOR POR CORDENADAS
    this.limitesY = extremosY;

    this.estaDentro = function(posicion){
        return (posicion.XEntre(this.limitesX[0], this.limitesX[1]) &&
        posicion.YEntre(this.limitesY[0], this.limitesY[1]));
    }
}

module.exports = Zona;
/*
ACA VAN MIS DUDAS Y OBSERVACIONES
Paso arrays con las cordenadas porque me parece una mejor opcion para determinar mi margen,
por lo menos por ahora que estoy en la parte basica y no realice un buen refactor, que dicho
sea de paso, el refactor que voy a meter va a ser para no romper encapsulamiento, para ello
tendré que modificar quizas codigo de posicion, y si hace falta, tambien refactorizar que no
se guarde los limites en arrays.
*/