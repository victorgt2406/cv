abstract class Formacion extends NormalSection {
    constructor(short: boolean,
        lang: {
        title: string;
        bachillerato: string;
        inso: string;
        primerCurso: string;
        segundoCurso: string;
        junior:string;
        senior:string;
        us: string;
        sp: string;
        certificate: string;
        inso_cert: string;
    }) {
        super(short);
        this.lang = lang;
        this.data = [
            {
                id: "bach",
                title: this.lang.bachillerato,
                start: 2019,
                end: 2020,
                courses: [
                    {
                        course: this.lang.junior,
                        center: "Idaho Falls High School, Idaho Falls, Idaho, " + this.lang.us,
                        centerLogo: "./img/centers/IdahoFalls.png",
                        year: 2019

                    },
                    {
                        course: this.lang.senior,
                        center: "Colegio San Gabriel, Madrid, Madrid, " + this.lang.sp,
                        centerLogo: "./img/centers/SanGabriel.png",
                        year: 2020
                    }
                ],
                cerificate: ""
            },
            {
                id: "inso",
                title: this.lang.inso,
                start: 2021,
                end: 2024,
                courses: [
                    {
                        course: this.lang.primerCurso,
                        center: "U-tad, Las Rozas, Madrid, " + this.lang.sp,
                        centerLogo: "./img/centers/U-tad.png",
                        year: 2021
                    },
                    {
                        course: this.lang.segundoCurso,
                        center: "U-tad, Las Rozas, Madrid, " + this.lang.sp,
                        centerLogo: "./img/centers/U-tad.png",
                        year: 2022
                    }
                ],
                cerificate: this.lang.inso_cert
            }
        ];
    }

    private lang: {
        title: string;
        bachillerato: string;
        inso: string;
        primerCurso: string;
        segundoCurso: string;
        junior:string;
        senior:string;
        us: string;
        sp: string;
        certificate: string;
        inso_cert:string;
    };

    changeVersion(): void {

    }

    private data: {
        id:string;
        title: string;
        start: number;
        end: number;
        courses:
        {
            course: string;
            center: string;
            centerLogo: string;
            year: number;
        }[];
        cerificate: string;
    }[];

    getTitle(): string {
        return this.lang.title;
    }
    getHtmlId(): string {
        return "formacion";
    }

    shortVersion(): string {
        var grades="";
        for(var i=0; i<this.data.length; i++){
            grades+=this.gradeToHtml(this.data[i]);
        }
        return grades;
    }

    largeVersion(): string {
        return this.shortVersion();
    }

    public seeGrade(grade: string): void {
        document.getElementById(grade + "_courses")!.setAttribute("class", "div_courses_vis");
        document.getElementById(grade)!.setAttribute("onclick", `sections.formacion.notSeeGrade("`+ grade + `")`);
    }

    public notSeeGrade(grade: string): void {
        document.getElementById(grade + "_courses")!.setAttribute("class", "div_courses_inv");
        document.getElementById(grade)!.setAttribute("onclick", `sections.formacion.seeGrade("`+ grade + `")`);
    }

    private gradeToHtml(
        data: {
            id: string;
            title: string;
            start: number;
            end: number;
            courses:
            {
                course: string;
                center: string;
                centerLogo: string;
                year: number;
            }[];
            cerificate: string;
        }): string {
        var grade: string = "";
        var courses: string = "";
        for (var i = 0; i < data.courses.length; i++) {
            courses += this.courseToHtml(data.courses[i]);
        }
        grade = HTMLmanager.insideLabels(HTMLmanager.insideLabels(data.title, "p", 'class="p_grade_title"')
            + HTMLmanager.insideLabels(data.start + " - " + data.end, "p", "")
            + this.downloadLink(data)
            , "div", `id="` + data.id + `" class="div_grade_title" onclick="sections.formacion.seeGrade('` + data.id + `')"`)
            + HTMLmanager.insideLabels(courses, "div", `id="` + data.id + `_courses" class = "div_courses_inv"`)
            ;


        return HTMLmanager.insideLabels(grade, "div", 'class="div_grade"');
    }

    private downloadLink(
        data: {
            title: string;
            start: number;
            end: number;
            courses:
            {
                course: string;
                center: string;
                centerLogo: string;
                year: number;
            }[];
            cerificate: string;
        }): string {
        return HTMLmanager.insideLabels(HTMLmanager.insideLabels(this.lang.certificate,"p",""), "a", `href="` + data.cerificate + `" download class="a_certificate" target="_blank"`);
    }

    private courseToHtml(
        data: {
            course: string;
            center: string;
            centerLogo: string;
            year: number;
        }): string {
        var course: string =
            HTMLmanager.insideLabels(data.course, "p", "")
            + HTMLmanager.insideLabels(data.year, "p", "")
            + HTMLmanager.insideLabels(data.center, "p", "")
            ;
        return HTMLmanager.insideLabels(this.getLogoImg(data) + course, "div", `class = "div_course"`);
    }

    private getLogoImg(data: {
        course: string;
        center: string;
        centerLogo: string;
    }): string {
        return HTMLmanager.createImg(data.centerLogo, data.centerLogo, "img_center");
    }

}

class Formacion_ES extends Formacion{
    constructor(short:boolean){
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

        super(short, lang);
    }
}

class Formacion_EN extends Formacion{
    constructor(short:boolean){
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

        super(short, lang);
    }
}