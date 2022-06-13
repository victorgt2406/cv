class Sections{
    lang :Language;
    perfil:Perfil;
    datosPersonales:DatosPersonales;

    constructor(){
        var userLang = navigator.language;
        if(userLang == "es"){
            this.lang = Language.ES;
        }
        else{
            this.lang = Language.EN;
        }

    }
    loadLang(){
        if(this.lang == Language.EN){
            this.langEN();
        }
        else{
            this.langES();
        }
    }

    langEN(){
        this.perfil = new Perfil_EN();
        this.datosPersonales = new DatosPersonales_ES();
    }

    langES(){
        this.perfil = new Perfil_ES();
        this.datosPersonales = new DatosPersonales_ES();
    }

    changeLang(){
        if(this.lang == Language.EN){
            this.lang = Language.ES;
        }
        else{
            this.lang = Language.EN;
        }
    }

}