/**Calculates my age*/
function myAge(){
    //Born data
    var yearBorn = 2002;
    var monthBorn = 6;
    var dayBorn = 24;

    var todayDate = new Date();

    //Age data:
    var yearOld = todayDate.getFullYear() - yearBorn;
    var monthOld = (todayDate.getMonth()+1) -monthBorn;
    var dayOld = todayDate.getDate() - dayBorn;

    //Fix negative cases:
    if(dayOld<0){
        dayOld = todayDate.getDate();
        dayOld += getDaysInMonth(todayDate.getFullYear(), todayDate.getMonth()) - dayBorn;
        monthOld--;
    }
    if(monthOld<0){
        monthOld+=12;
        yearOld--;
    }

    //Prepare results
    var age = "";
    //Birth day
    if(dayOld == 0 && monthOld == 0){
        age = yearOld+". "+lang.birthDay+ yearOld;
    }
    //Not
    else{
        age = yearOld+" "+lang.anios+" + "+monthOld+" "+lang.meses+" + "+dayOld+" "+lang.dias+".";
    }
    return age;
}

function getDaysInMonth(year, month) {
    if(month == 0){
        month = 12;
    }
    return new Date(year, month, 0).getDate();
}