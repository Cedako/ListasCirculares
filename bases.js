export default class Bases{
    constructor(nombre){
        this.siguiente = null
        this.anterior = null
        this._nombre = nombre
    }

    getName(){
        return this.nombre
    }
}