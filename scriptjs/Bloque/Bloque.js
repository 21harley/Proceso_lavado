class Bloque{
    
    #ID_HTML;
    #senal;
    #time;
    #color;
    #numeroValidacion;

    constructor(senal='',time=0,ID_HTML='',color={},numeroValidacion=1){
        this.#senal=senal;
        this.#time=time
        this.#ID_HTML=ID_HTML;
        this.#color=color;
        this.#numeroValidacion=numeroValidacion;
    }
    
    cambioColor(nameColor='',nameColor1=''){
        const $html=document.getElementById(this.#ID_HTML);
        if(this.#color[nameColor]){
            $html.style.color=this.#color[nameColor1];
            $html.style.backgroundColor=this.#color[nameColor];
        }
    }
    
    generarHTML(){
        return(
            `
            <div class='bloque' >
             <div class='bloque__border'>
               <div id='${this.#ID_HTML}' class='etapa'></div> 
             </div> - <h3>${this.#senal}</h3>
            </div>
            `
        )
    }
    set NumeroValidacion(numeroValidacion=1){
        this.#numeroValidacion=numeroValidacion;
    }
    set Senal(senal=''){
        this.#senal=senal;
    }
    set Time(time=''){
      this.#time=time;
    }
    set ID_HTML(ID_HTML=''){
        this.#ID_HTML=ID_HTML;
    }
    set Color(color=''){
        this.#color=color;
    }
    
    get NumeroValidacion(){
        return this.#numeroValidacion;
    }
    get Color(){
        return this.#color;
    }
    get Time(){
        return this.#time;
    }
    get Senal(){
        return this.#senal;
    }
    get ID_HTML(){
        return this.#ID_HTML;
    }

}

export default Bloque;