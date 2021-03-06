class Sections implements Elements{
    public perfil: Perfil;
    //public datosPersonales: DatosPersonales;
    public competencias: Competencias;
    public formacion: Formacion;

    constructor() {
        this.start();
    }

    public langEN() {
        this.perfil = new Perfil_EN(this.perfil.isShort());
        this.competencias = new Competencias_EN(this.competencias.isShort());
        this.formacion = new Formacion_EN(this.formacion.isShort());
    }

    public langES() {
        this.perfil = new Perfil_ES(this.perfil.isShort());
        this.competencias = new Competencias_ES(this.competencias.isShort());
        this.formacion = new Formacion_ES(this.formacion.isShort());
    }

    public loadInHtml(): void {
        this.perfil.loadInHtml();
        //this.datosPersonales.loadInHtml();
        this.competencias.loadInHtml();
        this.formacion.loadInHtml();
    }

    private startLangs(): void {
        this.perfil = new Perfil_ES(true);
        //this.datosPersonales = new DatosPersonales_ES(true);
        this.competencias = new Competencias_ES(true);
        this.formacion = new Formacion_ES(true);
    }

    private start(): void {
        this.startLangs();
        this.startHtml();
    }

    private startHtml(): void {
        document.getElementById("Main")!.innerHTML = this.perfil.createSection()
            //+ this.datosPersonales.createSection()
            + this.competencias.createSection()
            + this.formacion.createSection()
        ;
    }
}