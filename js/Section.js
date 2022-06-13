var NormalSection = /** @class */ (function () {
    function NormalSection(short) {
        this.short = short;
    }
    NormalSection.prototype.isShort = function () {
        return this.short;
    };
    NormalSection.prototype.getContent = function () {
        var content = "";
        if (this.isShort()) {
            content = this.shortVersion();
        }
        else {
            content = this.largeVersion();
        }
        return content;
    };
    NormalSection.prototype.getStyle = function () {
        var style = "short";
        if (!this.isShort()) {
            style = "large";
        }
        return style;
    };
    NormalSection.prototype.changeVersion = function () {
        if (this.isShort()) {
            this.short = false;
        }
        else {
            this.short = true;
        }
        document.getElementById(this.getHtmlId()).setAttribute("class", "section_" + this.getStyle());
        this.loadInHtml();
    };
    NormalSection.prototype.toHtml = function () {
        return HTMLmanager.insideLabels(this.getTitle(), "h2", "")
            + HTMLmanager.insideLabels(this.getContent(), "div", "class = 'div_content'");
    };
    NormalSection.prototype.loadInHtml = function () {
        document.getElementById(this.getHtmlId()).innerHTML = this.toHtml();
    };
    NormalSection.prototype.createSection = function () {
        // return  HTMLmanager.insideLabels(
        //     HTMLmanager.insideLabels(this.toHtml(),"section",`id="`+this.getHtmlId()+`" class ="section_`+this.getStyle()+'"'),
        //     "div",
        //     `onclick="sections.`+this.getHtmlId()+`.changeVersion()"`);
        return HTMLmanager.insideLabels(this.toHtml(), "section", "id=\"" + this.getHtmlId()
            + "\" class =\"section_" + this.getStyle() + "\" onclick=\"sections." + this.getHtmlId() + ".changeVersion()\"");
    };
    return NormalSection;
}());
