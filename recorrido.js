export default class Recorrido{
    constructor(log){
        this.inicio = null
        this.ultimo = null
        this._log = log
    }

    addBase(base){
        if(this.inicio == null){
            this.inicio = base
        }
    }
}