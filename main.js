import Bases from "./bases.js";
import Recorrido from "./recorrido.js";
class App{
    constructor(){
        //Botones bases
        let btnAdd = document.querySelector("#btnAdd")
        let btnDelete = document.querySelector("#btnDelete")
        let btnList = document.querySelector("#btnList")
        //Funciones
        btnAdd.addEventListener("click",this._addBase)
        //Log
        this._log = document.querySelector("#log")
        this._recorrido = new Recorrido(this._log)
    }

    _addBase = () => {
        let base = this.readBaseForm()

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
}