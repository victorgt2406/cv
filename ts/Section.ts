interface Section{
    short:boolean;
    getHtmlId():string;
    getTitle():string;
    getStyle():string;
    isShort():boolean;
    getContent():string;
    changeVersion():void;
    shortVersion():string;
    largeVersion():string;
    createSection():string;
    toHtml():string;
    loadInHtml():void;
}

abstract class NormalSection implements Section{
    short: boolean;

    constructor(short:boolean){
        this.short = short;
    }

    abstract getTitle(): string;

    abstract getHtmlId(): string;

    isShort(): boolean {
        return this.short
    }

    getContent(): string{
        var content="";
        if(this.isShort()){
            content = this.shortVersion();
        }
        else{
            content = this.largeVersion();
        }
        return content;
    }

    getStyle(): string {
        var style = "short";
        if(!this.isShort()){
            style = "large";
        }
        return style;
    }

    changeVersion(): void {
        if(this.isShort()){
            this.short=false;
        }
        else{
            this.short=true;
        }
        document.getElementById(this.getHtmlId())!.setAttribute("class", "section_"+this.getStyle());
        this.loadInHtml();
    }

    abstract shortVersion(): string;

    abstract largeVersion(): string;

    toHtml(): string {
        return HTMLmanager.insideLabels(this.getTitle(),"h2","")
            +HTMLmanager.insideLabels(this.getContent(),"div","class = 'div_content'");
    }

    loadInHtml(): void {
        document.getElementById(this.getHtmlId())!.innerHTML = this.toHtml();
    }

    createSection(): string {
        // return  HTMLmanager.insideLabels(
        //     HTMLmanager.insideLabels(this.toHtml(),"section",`id="`+this.getHtmlId()+`" class ="section_`+this.getStyle()+'"'),
        //     "div",
        //     `onclick="sections.`+this.getHtmlId()+`.changeVersion()"`);
        return HTMLmanager.insideLabels(this.toHtml(),"section",`id="`+this.getHtmlId()
            +`" class ="section_`+this.getStyle()+`" onclick="sections.`+this.getHtmlId()+`.changeVersion()"`);
    }

}