var lang:Language;
var asides: Asides;
var sections:Sections;
var darkMode:DarkMode;
var elements:Elements[];

function start(){
    lang = autoLang();
    sections = new Sections();
    asides = new Asides();
    darkMode = new DarkMode();
    elements = [sections, asides];
    loadLang();
}

function autoLang(): Language {
    var lang:Language;
    var userLang = navigator.language;
    if (userLang == "es") {
        lang = Language.ES;
    }
    else {
        lang = Language.EN;
    }
    return lang;
}

function changeLang() {
    if (lang == Language.EN) {
        lang = Language.ES;
    }
    else {
        lang = Language.EN;
    }
    loadLang();
}

function loadLang() {
    var strLang = "ES";
    if (lang === Language.EN) {
        strLang = "EN";
    }
    for(var i=0; i<elements.length; i++){
        if (lang === Language.EN){
            elements[i].langEN();
        }
        else{ 
            elements[i].langES();
        }
        elements[i].loadInHtml();
    }
    //Change icon flag
    document.getElementById("langIcon")!.setAttribute("src", "img/lang/" + strLang + ".png");
}