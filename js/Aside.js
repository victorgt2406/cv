var Aside = /** @class */ (function () {
    function Aside() {
    }
    Aside.prototype.toHtml = function () {
        return HTMLmanager.insideLabels(this.getTitle(), "h2", "")
            + HTMLmanager.insideLabels(this.getContent(), "div", "class = 'div_content'");
    };
    Aside.prototype.loadInHtml = function () {
        document.getElementById(this.getHtmlId()).innerHTML = this.toHtml();
    };
    Aside.prototype.createAside = function () {
        return HTMLmanager.insideLabels(this.toHtml(), "div", "id=\"" + this.getHtmlId()
            + "\" class =\"aside_element\"");
    };
    return Aside;
}());
