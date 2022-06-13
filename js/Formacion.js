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
var Formacion = /** @class */ (function (_super) {
    __extends(Formacion, _super);
    function Formacion(short, lang) {
        var _this = _super.call(this, short) || this;
        _this.lang = lang;
        _this.data = [
            {
                id: "bach",
                title: _this.lang.bachillerato,
                start: 2019,
                end: 2020,
                courses: [
                    {
                        course: _this.lang.junior,
                        center: "Idaho Falls High School, Idaho Falls, Idaho, " + _this.lang.us,
                        centerLogo: "./img/centers/IdahoFalls.png",
                        year: 2019
                    },
                    {
                        course: _this.lang.senior,
                        center: "Colegio San Gabriel, Madrid, Madrid, " + _this.lang.sp,
                        centerLogo: "./img/centers/SanGabriel.png",
                        year: 2020
                    }
                ],
                cerificate: ""
            },
            {
                id: "inso",
                title: _this.lang.inso,
                start: 2021,
                end: 2024,
                courses: [
                    {
                        course: _this.lang.primerCurso,
                        center: "U-tad, Las Rozas, Madrid, " + _this.lang.sp,
                        centerLogo: "./img/centers/U-tad.png",
                        year: 2021
                    },
                    {
                        course: _this.lang.segundoCurso,
                        center: "U-tad, Las Rozas, Madrid, " + _this.lang.sp,
                        centerLogo: "./img/centers/U-tad.png",
                        year: 2022
                    }
                ],
                cerificate: _this.lang.inso_cert
            }
        ];
        return _this;
    }
    Formacion.prototype.changeVersion = function () {
    };
    Formacion.prototype.getTitle = function () {
        return this.lang.title;
    };
    Formacion.prototype.getHtmlId = function () {
        return "formacion";
    };
    Formacion.prototype.shortVersion = function () {
        var grades = "";
        for (var i = 0; i < this.data.length; i++) {
            grades += this.gradeToHtml(this.data[i]);
        }
        return grades;
    };
    Formacion.prototype.largeVersion = function () {
        return this.shortVersion();
    };
    Formacion.prototype.seeGrade = function (grade) {
        document.getElementById(grade + "_courses").setAttribute("class", "div_courses_vis");
        document.getElementById(grade).setAttribute("onclick", "sections.formacion.notSeeGrade(\"" + grade + "\")");
    };
    Formacion.prototype.notSeeGrade = function (grade) {
        document.getElementById(grade + "_courses").setAttribute("class", "div_courses_inv");
        document.getElementById(grade).setAttribute("onclick", "sections.formacion.seeGrade(\"" + grade + "\")");
    };
    Formacion.prototype.gradeToHtml = function (data) {
        var grade = "";
        var courses = "";
        for (var i = 0; i < data.courses.length; i++) {
            courses += this.courseToHtml(data.courses[i]);
        }
        grade = HTMLmanager.insideLabels(HTMLmanager.insideLabels(data.title, "p", 'class="p_grade_title"')
            + HTMLmanager.insideLabels(data.start + " - " + data.end, "p", "")
            + this.downloadLink(data), "div", "id=\"" + data.id + "\" class=\"div_grade_title\" onclick=\"sections.formacion.seeGrade('" + data.id + "')\"")
            + HTMLmanager.insideLabels(courses, "div", "id=\"" + data.id + "_courses\" class = \"div_courses_inv\"");
        return HTMLmanager.insideLabels(grade, "div", 'class="div_grade"');
    };
    Formacion.prototype.downloadLink = function (data) {
        return HTMLmanager.insideLabels(HTMLmanager.insideLabels(this.lang.certificate, "p", ""), "a", "href=\"" + data.cerificate + "\" download class=\"a_certificate\" target=\"_blank\"");
    };
    Formacion.prototype.courseToHtml = function (data) {
        var course = HTMLmanager.insideLabels(data.course, "p", "")
            + HTMLmanager.insideLabels(data.year, "p", "")
            + HTMLmanager.insideLabels(data.center, "p", "");
        return HTMLmanager.insideLabels(this.getLogoImg(data) + course, "div", "class = \"div_course\"");
    };
    Formacion.prototype.getLogoImg = function (data) {
        return HTMLmanager.createImg(data.centerLogo, data.centerLogo, "img_center");
    };
    return Formacion;
}(NormalSection));
var Formacion_ES = /** @class */ (function (_super) {
    __extends(Formacion_ES, _super);
    function Formacion_ES(short) {
        var _this = this;
        var lang = {
            title: "Formación",
            bachillerato: "Bachillerato",
            inso: "Ingienería del Software",
            primerCurso: "Primer curso",
            segundoCurso: "Segundo curso",
            junior: "Primer curso",
            senior: "Segundo curso",
            us: "Estados Unidos",
            sp: "España",
            certificate: "certificado",
            inso_cert: "./data/formacion/inso_esp.pdf"
        };
        _this = _super.call(this, short, lang) || this;
        return _this;
    }
    return Formacion_ES;
}(Formacion));
var Formacion_EN = /** @class */ (function (_super) {
    __extends(Formacion_EN, _super);
    function Formacion_EN(short) {
        var _this = this;
        var lang = {
            title: "Formation",
            bachillerato: "High School",
            inso: "Software Engineering",
            primerCurso: "First course",
            segundoCurso: "Second course",
            junior: "Junior",
            senior: "Senior",
            us: "United States",
            sp: "Spain",
            certificate: "certificate",
            inso_cert: "./data/formacion/inso_eng.pdf"
        };
        _this = _super.call(this, short, lang) || this;
        return _this;
    }
    return Formacion_EN;
}(Formacion));
