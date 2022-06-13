var Asides = /** @class */ (function () {
    function Asides() {
        this.start();
        this.createAsides();
    }
    Asides.prototype.langEN = function () {
        this.datosPersonales = new DatosPersonales_EN();
    };
    Asides.prototype.langES = function () {
        this.datosPersonales = new DatosPersonales_ES();
    };
    Asides.prototype.start = function () {
        this.datosPersonales = new DatosPersonales_ES();
    };
    Asides.prototype.createAsides = function () {
        document.getElementById("Aside").innerHTML =
            this.datosPersonales.createAside();
    };
    Asides.prototype.loadInHtml = function () {
        this.datosPersonales.loadInHtml();
    };
    return Asides;
}());
