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
var DatosPersonales = /** @class */ (function (_super) {
    __extends(DatosPersonales, _super);
    function DatosPersonales(lang) {
        var _this = _super.call(this) || this;
        _this.lang = lang;
        _this.socialMedia = [
            {
                "nombre": "linkedin",
                "link": _this.getLang().linkedinLink,
                "user": "Víctor Gutiérrez Tovar",
                "src": "./img/socialMedia/linkedin.png"
            },
            {
                "nombre": "instagram",
                "link": "https://www.instagram.com/victorgutov/",
                "user": "victorgutov",
                "src": "./img/socialMedia/instagram.png"
            },
            {
                "nombre": "twitter",
                "link": "https://twitter.com/vitorgutito",
                "user": "@vitorgutito",
                "src": "./img/socialMedia/twitter.png"
            }
        ];
        return _this;
    }
    DatosPersonales.prototype.getHtmlId = function () {
        return "datosPersonales";
    };
    DatosPersonales.prototype.getLang = function () {
        return this.lang;
    };
    DatosPersonales.prototype.getTitle = function () {
        return this.getLang().title;
    };
    DatosPersonales.prototype.getSocialMediaLarge = function () {
        var socials = "";
        for (var i = 0; i < this.socialMedia.length; i++) {
            var social = this.getSocialMediaIconLink(this.socialMedia[i])
                + HTMLmanager.insideLabels(this.socialMedia[i].user, "p", "");
            socials += HTMLmanager.insideLabels(social, "div", 'class="div_socialMedia"');
        }
        return HTMLmanager.insideLabels(socials, "div", 'class ="socialMedia_large"');
    };
    DatosPersonales.prototype.getSocialMediaIconLink = function (socialMedia) {
        return HTMLmanager.insideLabels(HTMLmanager.createImg(socialMedia.src, socialMedia.nombre, "img_social"), "a", "href=\"" + socialMedia.link + "\" target=\"_blank\" onclick=\"sections." + this.getHtmlId() + ".changeVersion()\"");
    };
    DatosPersonales.prototype.getEmailCopy = function () {
        navigator.clipboard.writeText(this.getEmail());
    };
    DatosPersonales.prototype.getEmail = function () {
        return "victorgt2406@gmail.com";
    };
    DatosPersonales.prototype.getEmailText = function () {
        return HTMLmanager.insideLabels("&#9993", "span", 'class = "email" onclick = "sections.datosPersonales.getEmailCopy()"') + this.getEmail();
    };
    DatosPersonales.prototype.getAgeObj = function () {
        return Age.getInstance();
    };
    DatosPersonales.prototype.getFullAge = function () {
        return this.getLang().age + ": " + this.getAgeObj().getAge() + " " + this.getLang().years
            + ", " + this.getAgeObj().getMonthOld() + " " + this.getLang().months
            + ", " + this.getAgeObj().getDayOld() + " " + this.getLang().days;
    };
    DatosPersonales.prototype.getContent = function () {
        var birthday = HTMLmanager.insideLabels(this.getLang().birthDate, "p", "");
        var age = HTMLmanager.insideLabels(this.getFullAge(), "p", "");
        var email = HTMLmanager.insideLabels(this.getEmailText(), "p", "");
        var socialMedia = HTMLmanager.insideLabels(this.getLang().socialMedia, "p", "") + this.getSocialMediaLarge();
        var location = HTMLmanager.insideLabels(this.getLang().location, "p", "");
        return age + birthday + socialMedia + email + location;
    };
    return DatosPersonales;
}(Aside));
var DatosPersonales_ES = /** @class */ (function (_super) {
    __extends(DatosPersonales_ES, _super);
    function DatosPersonales_ES() {
        var _this = this;
        var lang = {
            title: "Datos personales",
            years: "años",
            age: "Edad",
            months: "meses",
            days: "días",
            birthDate: "Fecha de nacimiento: 24/06/2002",
            socialMedia: "Redes sociales",
            linkedinLink: "https://www.linkedin.com/in/victorgutierreztovar/",
            location: "Localización: Madrid, España"
        };
        _this = _super.call(this, lang) || this;
        return _this;
    }
    return DatosPersonales_ES;
}(DatosPersonales));
var DatosPersonales_EN = /** @class */ (function (_super) {
    __extends(DatosPersonales_EN, _super);
    function DatosPersonales_EN() {
        var _this = this;
        var lang = {
            title: "Personal data",
            years: "years",
            age: "Age",
            months: "months",
            days: "days",
            birthDate: "Date of birth: 06/24/2002",
            socialMedia: "Social media",
            linkedinLink: "https://www.linkedin.com/in/victorgutierreztovar/?locale=en_US",
            location: "Location: Madrid, Spain"
        };
        _this = _super.call(this, lang) || this;
        return _this;
    }
    return DatosPersonales_EN;
}(DatosPersonales));
