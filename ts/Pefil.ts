abstract class Perfil extends NormalSection{
    getHtmlId(): string {
        return "perfil";
    }
}

class Perfil_ES extends Perfil{
    constructor(short:boolean){
        super(short);
    }
    getTitle(): string {
        return "Perfil";
    }
    shortVersion(): string {
        return HTMLmanager.insideLabels("Estudiante de Ingeniería de Software en la universidad U-tad, en Madrid.","h3","");
    }
    largeVersion(): string {
        return this.shortVersion() + HTMLmanager.insideLabels(this.text(),"p","");
    }
    private text():string{
        return ("Desde pequeño me apasiona el mundo de la tecnología. "+
        "Sobre todo,el mundo del ordenador, donde me gusta estar al dia de las nuevas tecnologías hardware y software. "+
        "Me encanta practicar deportes, jugar a videojuegos, aprender y utilizar el conocimiento de la programación para "+
        "hacerme mis propios programas.");
    }
}

class Perfil_EN extends Perfil{
    constructor(short:boolean){
        super(short);
    }
    getTitle(): string {
        return "Profile";
    }
    shortVersion(): string {
        return HTMLmanager.insideLabels("Software Engineer student at the U-tad University in Madrid, Spain","h3","");
    }
    largeVersion(): string {
        return this.shortVersion() + HTMLmanager.insideLabels(this.text(),"p","");
    }
    private text():string{
        return ("Since I was a child, I was very interested in tecnology. Farther more in computers, where I tend to be update about the new hardware,"
        +"and software technologies. I love sports, play videogames and learn to then use that knowledge to do cool things with it");
    }
}