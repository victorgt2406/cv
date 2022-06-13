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
    toHtml():string;
    loadInHtml():void;
}

abstract class NormalSection implements Section{    
    short: boolean;

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
    }

    abstract shortVersion(): string;

    abstract largeVersion(): string;

    toHtml(): string {
        return HTMLmanager.insideLabels(
            HTMLmanager.insideLabels(this.getTitle(),"h2","")
            +HTMLmanager.insideLabels(this.getContent(),"div",""),
            "section",`id="`+this.getHtmlId()+`" class ="section_`+this.getStyle()+`" onclick="`+this.getHtmlId+`.changeVersion()"`);
    }

    loadInHtml(): void {
        document.getElementById(this.getHtmlId()).innerHTML = this.toHtml();
    }

}