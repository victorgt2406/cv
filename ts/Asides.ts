class Asides implements Elements{
    private datosPersonales:DatosPersonales;
    constructor(){
        this.start();
        this.createAsides();
    }

    langEN() {
        this.datosPersonales = new DatosPersonales_EN();
    }
    langES() {
        this.datosPersonales = new DatosPersonales_ES();
    }
    
    private start(): void{
        this.datosPersonales = new DatosPersonales_ES();
    }

    private createAsides():void{
        document.getElementById("Aside")!.innerHTML = 
        this.datosPersonales.createAside()
        ;
    }

    public loadInHtml(){
        this.datosPersonales.loadInHtml();
    }
}