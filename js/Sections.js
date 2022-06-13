var Sections = /** @class */ (function () {
    function Sections() {
        this.start();
    }
    Sections.prototype.langEN = function () {
        this.perfil = new Perfil_EN(this.perfil.isShort());
        this.competencias = new Competencias_EN(this.competencias.isShort());
        this.formacion = new Formacion_EN(this.formacion.isShort());
    };
    Sections.prototype.langES = function () {
        this.perfil = new Perfil_ES(this.perfil.isShort());
        this.competencias = new Competencias_ES(this.competencias.isShort());
        this.formacion = new Formacion_ES(this.formacion.isShort());
    };
    Sections.prototype.loadInHtml = function () {
        this.perfil.loadInHtml();
        //this.datosPersonales.loadInHtml();
        this.competencias.loadInHtml();
        this.formacion.loadInHtml();
    };
    Sections.prototype.startLangs = function () {
        this.perfil = new Perfil_ES(true);
        //this.datosPersonales = new DatosPersonales_ES(true);
        this.competencias = new Competencias_ES(true);
        this.formacion = new Formacion_ES(true);
    };
    Sections.prototype.start = function () {
        this.startLangs();
        this.startHtml();
    };
    Sections.prototype.startHtml = function () {
        document.getElementById("Main").innerHTML = this.perfil.createSection()
            //+ this.datosPersonales.createSection()
            + this.competencias.createSection()
            + this.formacion.createSection();
    };
    return Sections;
}());
