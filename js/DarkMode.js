var DarkMode = /** @class */ (function () {
    function DarkMode() {
        this.htmlStyle = "css/indexLight.css";
        this.id = "btnDarkMode";
        this.selectAutoCSS();
    }
    DarkMode.prototype.selectAutoCSS = function () {
        if (this.isDark()) {
            this.setDarkMode();
        }
        else {
            this.setLightMode();
        }
    };
    DarkMode.prototype.setDarkMode = function () {
        this.changeCSS(this.htmlStyle, "css/indexDark.css");
        document.getElementById(this.id).setAttribute("onclick", "darkMode.setLightMode()");
        document.getElementById(this.id).setAttribute("value", "Light Mode");
    };
    DarkMode.prototype.setLightMode = function () {
        this.changeCSS(this.htmlStyle, "css/indexLight.css");
        document.getElementById(this.id).setAttribute("onclick", "darkMode.setDarkMode()");
        document.getElementById(this.id).setAttribute("value", "Dark Mode");
    };
    DarkMode.prototype.changeCSS = function (cssLinkIndex, cssFile) {
        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);
        document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
        this.htmlStyle = cssFile;
    };
    DarkMode.prototype.isDark = function () {
        // dark-mode media query matched or not
        //https://usefulangle.com/post/318/javascript-check-dark-mode-activated#:~:text=Dark%20mode%20can%20be%20detected,or%20not%20let%20matched%20%3D%20window.
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    return DarkMode;
}());
