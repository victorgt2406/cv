var lang = LangES;
var langsList = [LangES, LangEN];
var langIndex = 0;
var htmlStyle = "css/indexLight.css";

function bodyOnload(){
    loadContent();
    selectAutoCSS();
}

function changeLang(){
    langIndex++;
    if(langIndex>=langsList.length){
        langIndex=0;
    }
    document.getElementById("langIcon").setAttribute("src","img/lang/"+lang.lang+".png");
    lang = langsList[langIndex];
    loadContent();
}

function loadContent(){
    myAge();
    loadTitle();
    loadPerfil();
    loadDatosPersonales();
    loadCompetencias();
    loadExperiencia();
    loadFormacion();
    loadProyectos();
    loadCertificados();
}