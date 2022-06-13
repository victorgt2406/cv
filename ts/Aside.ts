abstract class Aside{
    constructor(){
    }

    abstract getTitle(): string;

    abstract getHtmlId(): string;

    abstract getContent(): string;

    toHtml(): string {
        return HTMLmanager.insideLabels(this.getTitle(),"h2","")
            +HTMLmanager.insideLabels(this.getContent(),"div","class = 'div_content'");
    }

    loadInHtml(): void {
        document.getElementById(this.getHtmlId())!.innerHTML = this.toHtml();
    }

    createAside(): string {
        return HTMLmanager.insideLabels(this.toHtml(),"div",`id="`+this.getHtmlId()
            +`" class ="aside_element"`);
    }
}