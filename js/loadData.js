function loadTitle(){
    document.getElementById("Title").innerHTML = lang.titulo;
}

function loadDatosPersonales(){
    document.getElementById("DatosPesonales").innerHTML = 
    insideLabels(lang.datosPersonales+":","h2","")
    +insideLabels(lang.edad+": "+myAge(),"p","")
    +insideLabels(lang.fechaDeNacimento+": "+Data.DatosPersonales.Edad.fecha,"p","")
    +insideLabels(lang.localidad+": "+Data.DatosPersonales.localidad,"p","")
    +insideLabels(lang.redesSociales+":","p","")
        +insideLabels(loadRedesSociales(),"ul","")
    ;
}

function loadRedesSociales(){
    var redesSociales = 
    insideLabels(insideLabels("linkedin","a","href = '"+lang.linkedin+"' target='_blank'"),"li","class = 'li_redesSociales'")
    ;

    return redesSociales;
}

function loadPerfil(){
    document.getElementById("Perfil").innerHTML = 
    insideLabels(lang.perfil+":","h2","")
    +insideLabels(lang.presentacion,"h3","")
    +insideLabels(lang.acercaDe,"p","");
}

function loadCompetencias(){
    document.getElementById("Competencias").innerHTML =
    insideLabels(lang.competencias+": ","h2","")
    +insideLabels(lang.lengProg+": "+arrayToStr(Data.Competencias.lengProg),"p","")
    +insideLabels(lang.goodSkills+": "+arrayToStr(Data.Competencias.goodSkills),"p","")
    +insideLabels(lang.midSkills+": "+arrayToStr(Data.Competencias.midSkills),"p","")
    +insideLabels(lang.basicSkills+": "+arrayToStr(Data.Competencias.basicSkills),"p","")
    ;
}

function loadExperiencia(){
    document.getElementById("Experiencia").innerHTML =
    insideLabels(lang.experiencia+": ","h2","")
    +loadAllExperience();
    ;
}

function loadAllExperience(experience){
    var allExperiences = "";
    for(var i=0; i<Data.Experiencia.length; i++){
        allExperiences+=loadAnExperience(Data.Experiencia[i])
    }
    return insideLabels(allExperiences,"ul","");
}

function loadAnExperience(experience){
    return insideLabels(insideLabels(experience.compania,"h3","") + insideLabels(experience.labores,"p",""),"li","class = 'li_experiencia'");
}

function loadProyectos(){
    document.getElementById("Proyectos").innerHTML =
    insideLabels(lang.proyectos+": ","h2","")
    ;
}

function loadFormacion(){
    document.getElementById("Formacion").innerHTML =
    insideLabels(lang.formacion+": ","h2","")
    ;
}

function loadAllFormations(){
    var formations="";
    for(var i=0; i<Data.Formacion.length; i++){
        formations+=insideLabels(Data.Formacion[i].nombre,"h3","");

        
        formations+=insideLabels(Data.Formacion[i].nombre,"h3","");
    }
}

function loadAFormation(cursos){
    var formation="";
    for(var i=0; i<cursos.length; i++){
        formation+=cursos.curso.
        formation+=cursos.centro.nombre;
    }
}

function loadCertificados(){
    document.getElementById("Certificados").innerHTML =
    insideLabels(lang.certificados+": ","h2","")
    ;
}

function insideLabels(text, label, attributes){
    return "<"+label+" "+attributes+">"+text+"</"+label+">";
}

function arrayToStr(array){
    var strArray = ""
    var i=0;
    for(i=0; i<array.length-1; i++){
        strArray+=""+array[i]+", ";
    }
    strArray+=""+array[array.length-1]+".";
    return strArray;
}