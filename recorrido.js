export default class Recorrido{
    constructor(log){
        this.inicio = null
        this.ultimo = null
        this._log = log
    }

    crearTarjeta(base, hora, minutos){

    }

    addBase(base){
        if(this.inicio == null){
            this.inicio = base
            this.ultimo = base
            this.inicio.anterior = this.ultimo
            this.ultimo.siguiente = this.inicio
        } else {
            let aux = this.ultimo
            this.ultimo = base
            aux.siguiente = this.ultimo
            this.ultimo.anterior = aux
            this.inicio.anterior = this.ultimo
            this.ultimo.siguiente = this.inicio
        }
        this._log.textContent = `${base.getName()}`
        console.log(this.inicio)
    }

    deleteBase(base){
        if(this.inicio = base){
            let aux = this.inicio
            
        }

        
        this._log.textContent = `${base.getName()}`
    }
}