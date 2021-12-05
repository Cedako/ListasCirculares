import Bases from "./bases.js";
import Recorrido from "./recorrido.js";
class App{
    constructor(){
        //Botones
        let btnAdd = document.querySelector("#btnAdd")
        let btnDelete = document.querySelector("#btnDelete")
        let btnList = document.querySelector("#btnList")
        let btnCard = document.querySelector("#btnCard")
        //Funciones
        btnAdd.addEventListener("click",this._addBase)
        //Log
        this._log = document.querySelector("#log")
        this._recorrido = new Recorrido(this._log)
    }

    _addBase = () => {
        let base = this.readBaseForm()
        if(base!==null){
            let added = this._recorrido.addBase(base)
        }
    }

    //Leer el formulario de las bases
    readBaseForm(){
        let inName = document.querySelector("#name")
        let name = inName.value

        if(name){
            inName.value = ""

            return new Bases(name)
        } else {
            return null
        }
    }

    readCardForm(){
        let inBase = document.querySelector("#base")
        let inStart = document.querySelector("#start")
        let inTime = document.querySelector("#time")

        let base = inBase.value
        let start = inStart.value
        let time = inTime.value

    }
}

new App()