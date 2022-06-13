var HTMLmanager = /** @class */ (function () {
    function HTMLmanager() {
    }
    HTMLmanager.insideLabels = function (text, label, attributes) {
        return "<" + label + " " + attributes + ">" + text + "</" + label + ">";
    };
    HTMLmanager.arrayToStr = function (array) {
        var strArray = "";
        var i = 0;
        for (i = 0; i < array.length - 1; i++) {
            strArray += "" + array[i] + ", ";
        }
        strArray += "" + array[array.length - 1] + ".";
        return strArray;
    };
    HTMLmanager.createImg = function (src, alt, style) {
        return "<img src = \"" + src + "\" alt = \"" + alt + "\" class = \"" + style + "\">";
    };
    HTMLmanager.createInput = function (type, value, style) {
        return "<input type = \"" + type + "\" value = \"" + value + "\" class = \"" + style + "\">";
    };
    return HTMLmanager;
}());
