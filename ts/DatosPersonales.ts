abstract class DatosPersonales extends NormalSection{
    getHtmlId(): string {
        return "datosPersonales";
    }

    abstract getBirthDay():string;
    
    abstract getLocalidad():string;
    
    abstract socialMediaWord():string;

    private socialMedia = [
        {
            "nombre":"linkedin",
            "link":this.getLinkedinLink(),
            "src":"../img/socialMedia/linkedin.png"
        }
    ]
    
    getSocialMedia(verbosity:boolean):string{
        var title = HTMLmanager.insideLabels(this.socialMediaWord(),"h3","");
        var socials = this.getSocialMediaImgLinks(verbosity);

        return HTMLmanager.insideLabels(title+socials,"div","class ='socialMedia'");
    }

    getSocialMediaImgLinks(verbosity:boolean){
        var socials="";
        for(var i=0; i<this.socialMedia.length; i++){
            var social = "";
            if(verbosity){
                social+=HTMLmanager.insideLabels(
                    HTMLmanager.createImg(this.socialMedia[i].src, this.socialMedia[i].nombre,"social_img")
                    +HTMLmanager.insideLabels(this.socialMedia[i].nombre+": "+this.socialMedia[i].link,"p",""),
                    "a",`href="`+this.socialMedia[i].link+`" class="socialMedia_short"`);
            }
            else{
                social+=HTMLmanager.insideLabels(
                    HTMLmanager.createImg(this.socialMedia[i].src, this.socialMedia[i].nombre,"social_img"),
                    "a",`href="`+this.socialMedia[i].link+`" class="socialMedia_large"`);
            }
            socials+=social;
        }
        return socials;
    }

    abstract getLinkedinLink():string;
    
    getEmail():string{
        return "Email: victorgt2406@gmail.com";
    }

    getAgeObj():Age{
        return Age.getInstance();
    }

    abstract getAge():string;

    abstract getFullAge():string;

    shortVersion(): string {
        var title = HTMLmanager.insideLabels(this.getTitle(),"h2","");
        var birthday = HTMLmanager.insideLabels(this.getBirthDay(),"p","");
        var age = HTMLmanager.insideLabels(this.getAge(),"p","");
        var email = HTMLmanager.insideLabels(this.getEmail(),"p","");
        var socialMedia = this.getSocialMedia(false);
        return title + age + birthday + socialMedia + email;
    }
    largeVersion(): string {
        var title = HTMLmanager.insideLabels(this.getTitle(),"h2","");
        var birthday = HTMLmanager.insideLabels(this.getBirthDay(),"p","");
        var age = HTMLmanager.insideLabels(this.getAge(),"p","");
        var email = HTMLmanager.insideLabels(this.getEmail(),"p","");
        var socialMedia = this.getSocialMedia(true);
        return title + age + birthday + socialMedia + email;
    }
}

class DatosPersonales_ES extends DatosPersonales{
    getBirthDay(): string {
        return "Dia de nacimento: 24/06/2002";
    }
    getLocalidad(): string {
        return "Localización: Madrid, España";
    }
    socialMediaWord(): string {
        return "Redes sociales: ";
    }
    getLinkedinLink(): string {
        return "https://www.linkedin.com/in/victorgutierreztovar/";
    }
    getAge(): string {
        return "Edad: "+this.getAgeObj().getAge+" años.";
    }
    getFullAge() {
        return "Edad: "+this.getAgeObj().getAge()+" años, "+this.getAgeObj().getMonthOld()+" meses, "+this.getAgeObj().getDayOld()+" días";
    }
    getTitle(): string {
        return "Datos personales: ";
    }
}