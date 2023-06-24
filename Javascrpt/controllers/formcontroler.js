
 import Address  from "../models/address.js";
     function State() {
        this.address = new Address();
        this.btnSave = null;
        this.btnClear = null;
        this.inputcep = null;
        this.inputStreet = null;
        this.inputNumber= null;
        this.inputCity = null;
    
        this.errorCep = null;
        this.errorNumber = null;
    
    
    }

   
    const state = new State();
    export function init(){
        
        state.inputcep = document.forms.newAdress.cep;
        state.inputStreet = document.forms.newAdress.street;
        state.inputNumber = document.forms.newAdress.number;
        state.inputCity = document.forms.newAdress.cidade;
        state.btnClear = document.forms.newAdress.btnclear;
        state.btnSave = document.forms.newAdress.btnSave;
        state.errorCep = document.querySelector('[data-error="cep"]');
        state.errorNumber = document.querySelector('[data-error="number"]');
        
        state.errorNumber.addEventListener('change',handleInputNumbreChange);
        
        
    }

    function handleInputNumbreChange(event){
        console.log("Vinho");
        if(event.target.value == ""){
            setFormError("number", "Campo requerido");

        }else{
            setFormError("number", " cxfdx");
        }

    }

    function setFormError(Key,value){
        const element = document.querySelector(`[data-error="${Key}"]`);
        element.innerHTML = value;
        

    }


