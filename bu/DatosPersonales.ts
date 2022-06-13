abstract class DatosPersonales extends NormalSection {
    constructor(short:boolean, lang){
        super(short);
        this.lang = lang;
        this.socialMedia = [
            {
                "nombre": "linkedin",
                "link": this.getLang().linkedinLink,
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
    }
    
    getHtmlId(): string {
        return "datosPersonales";
    }

    private lang: {
        title: string;
        age: string;
        years: string;
        months: string;
        days: string;
        birthDate: string;
        socialMedia: string;
        linkedinLink: string;
        location: string;
    };

    private getLang() {
        return this.lang;
    }

    getTitle(): string {
        return this.getLang().title;
    }

    private socialMedia:{
        nombre: string;
        link: string;
        user: string;
        src: string;
    }[];

    private getSocialMediaLarge(): string {
        var socials = "";
        for (var i = 0; i < this.socialMedia.length; i++) {
            var social = this.getSocialMediaIconLink(this.socialMedia[i])
                + HTMLmanager.insideLabels(this.socialMedia[i].user, "p", "");
            socials += HTMLmanager.insideLabels(social, "div", 'class="div_socialMedia"');
        }
        return HTMLmanager.insideLabels(socials, "div", 'class ="socialMedia_large"');
    }

    private getSocialMediaShort(): string {
        var socials = "";
        for (var i = 0; i < this.socialMedia.length; i++) {
            socials += this.getSocialMediaIconLink(this.socialMedia[i]);
        }
        return HTMLmanager.insideLabels(socials, "div", 'class ="socialMedia_short"');
    }

    getSocialMediaIconLink(socialMedia): string {
        return HTMLmanager.insideLabels(HTMLmanager.createImg(socialMedia.src, socialMedia.nombre, "img_social"), "a"
            , `href="` + socialMedia.link + `" target="_blank" onclick="sections.` + this.getHtmlId() + `.changeVersion()"`);
    }

    public getEmailCopy(): void {
        navigator.clipboard.writeText(this.getEmail());
        this.changeVersion();
    }

    private getEmail(): string {
        return "victorgt2406@gmail.com";
    }

    private getEmailText(): string {
        return HTMLmanager.insideLabels("&#9993", "span", 'class = "email" onclick = "sections.datosPersonales.getEmailCopy()"') + this.getEmail();
    }

    private getAgeObj(): Age {
        return Age.getInstance();
    }

    private getAge(): string {
        return this.getLang().age + ": " + this.getAgeObj().getAge() + " " + this.getLang().years;
    }

    private getFullAge() {
        return this.getLang().age + ": " + this.getAgeObj().getAge() + " " + this.getLang().years
            + ", " + this.getAgeObj().getMonthOld() + " " + this.getLang().months
            + ", " + this.getAgeObj().getDayOld() + " " + this.getLang().days;
    }

    shortVersion(): string {
        var birthday = HTMLmanager.insideLabels(this.getLang().birthDate, "p", "");
        var age = HTMLmanager.insideLabels(this.getAge(), "p", "");
        var email = HTMLmanager.insideLabels(this.getEmailText(), "p", "");
        var socialMedia = HTMLmanager.insideLabels(this.getLang().socialMedia, "p", "") + this.getSocialMediaShort();
        return age + birthday + socialMedia + email;
    }
    largeVersion(): string {
        var birthday = HTMLmanager.insideLabels(this.getLang().birthDate, "p", "");
        var age = HTMLmanager.insideLabels(this.getFullAge(), "p", "");
        var email = HTMLmanager.insideLabels(this.getEmailText(), "p", "");
        var socialMedia = HTMLmanager.insideLabels(this.getLang().socialMedia, "p", "") + this.getSocialMediaLarge();
        var location = HTMLmanager.insideLabels(this.getLang().location, "p", "");
        return age + birthday + socialMedia + email + location;
    }
}

class DatosPersonales_ES extends DatosPersonales {
    constructor(short: boolean) {
        var lang: { title: string; age: string; years: string; months: string; days: string; birthDate: string; socialMedia: string; linkedinLink: string; location: string; } = {
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
        super(short,lang);
    }
}

class DatosPersonales_EN extends DatosPersonales {
    constructor(short: boolean) {
        var lang: { title: string; age: string; years: string; months: string; days: string; birthDate: string; socialMedia: string; linkedinLink: string; location: string; } = {
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
        super(short,lang);
    }
}