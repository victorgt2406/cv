
function selectAutoCSS(){  
    if(isDark()){
        setDarkMode();
    }
    else{
        setLightMode();
    }
}

function setDarkMode(){
    changeCSS(htmlStyle, "css/indexDark.css");
    document.getElementById("btnDarkMode").setAttribute("onclick", "setLightMode()");
    document.getElementById("btnDarkMode").setAttribute("value", "Light Mode");
    document.get
    
}
function setLightMode(){
    changeCSS(htmlStyle, "css/indexLight.css");
    document.getElementById("btnDarkMode").setAttribute("onclick", "setDarkMode()");
    document.getElementById("btnDarkMode").setAttribute("value", "Dark Mode");
}

function changeCSS(cssLinkIndex, cssFile) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");

    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
    htmlStyle = cssFile;
}

function isDark(){
    // dark-mode media query matched or not
    //https://usefulangle.com/post/318/javascript-check-dark-mode-activated#:~:text=Dark%20mode%20can%20be%20detected,or%20not%20let%20matched%20%3D%20window.
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}