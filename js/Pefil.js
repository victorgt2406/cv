var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Perfil = /** @class */ (function (_super) {
    __extends(Perfil, _super);
    function Perfil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perfil.prototype.getHtmlId = function () {
        return "perfil";
    };
    return Perfil;
}(NormalSection));
var Perfil_ES = /** @class */ (function (_super) {
    __extends(Perfil_ES, _super);
    function Perfil_ES(short) {
        return _super.call(this, short) || this;
    }
    Perfil_ES.prototype.getTitle = function () {
        return "Perfil";
    };
    Perfil_ES.prototype.shortVersion = function () {
        return HTMLmanager.insideLabels("Estudiante de Ingeniería de Software en la universidad U-tad, en Madrid.", "h3", "");
    };
    Perfil_ES.prototype.largeVersion = function () {
        return this.shortVersion() + HTMLmanager.insideLabels(this.text(), "p", "");
    };
    Perfil_ES.prototype.text = function () {
        return ("Desde pequeño me apasiona el mundo de la tecnología. " +
            "Sobre todo,el mundo del ordenador, donde me gusta estar al dia de las nuevas tecnologías hardware y software. " +
            "Me encanta practicar deportes, jugar a videojuegos, aprender y utilizar el conocimiento de la programación para " +
            "hacerme mis propios programas.");
    };
    return Perfil_ES;
}(Perfil));
var Perfil_EN = /** @class */ (function (_super) {
    __extends(Perfil_EN, _super);
    function Perfil_EN(short) {
        return _super.call(this, short) || this;
    }
    Perfil_EN.prototype.getTitle = function () {
        return "Profile";
    };
    Perfil_EN.prototype.shortVersion = function () {
        return HTMLmanager.insideLabels("Software Engineer student at the U-tad University in Madrid, Spain", "h3", "");
    };
    Perfil_EN.prototype.largeVersion = function () {
        return this.shortVersion() + HTMLmanager.insideLabels(this.text(), "p", "");
    };
    Perfil_EN.prototype.text = function () {
        return ("Since I was a child, I was very interested in tecnology. Farther more in computers, where I tend to be update about the new hardware,"
            + "and software technologies. I love sports, play videogames and learn to then use that knowledge to do cool things with it");
    };
    return Perfil_EN;
}(Perfil));
