const Posicion = function(x, y){
    this.x = x;
    this.y = y;

    this.decrementarX = function(){
        return new Posicion( this.x - 1, this.y );
    }

    this.decrementarY = function(){
        return new Posicion( this.x, this.y - 1 );
    }

    this.incrementarX = function(){
        return new Posicion( this.x + 1, this.y );
    }

    this.incrementarY = function(){
        return new Posicion( this.x, this.y + 1 );
    }

    this.XMayorIgual = function(valor){
        return this.x >= valor;
    }

    this.YMayorIgual = function(valor){
        return this.y >= valor;
    }

    this.XMenorIgual = function(valor){
        return this.x <= valor;
    }

    this.YMenorIgual = function(valor){
        return this.y <= valor;
    }

    this.XEntre = function(extremoInferior, extremoSuperior){
        return (this.XMayorIgual(extremoInferior) && this.XMenorIgual(extremoSuperior));
    }

    this.YEntre = function(extremoInferior, extremoSuperior){
        return (this.YMayorIgual(extremoInferior) && this.YMenorIgual(extremoSuperior));
    }
}

module.exports = Posicion;