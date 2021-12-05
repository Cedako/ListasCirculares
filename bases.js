export default class Bases{
    constructor(nombre){
        this._nombre = nombre
        this.siguiente = null
        this.anterior = null
    }

    getName(){
        return this._nombre
    }
}