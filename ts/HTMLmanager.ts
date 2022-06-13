class HTMLmanager{
    static insideLabels(text, label, attributes):string{
        return "<"+label+" "+attributes+">"+text+"</"+label+">";
    }
    static arrayToStr(array):string{
        var strArray = ""
        var i=0;
        for(i=0; i<array.length-1; i++){
            strArray+=""+array[i]+", ";
        }
        strArray+=""+array[array.length-1]+".";
        return strArray;
    }

    static createImg(src:string, alt:string, style:string):string{
        return `<img src = "`+src+`" alt = "`+alt+`" class = "`+style+`">`;
    }

    static createInput(type:string, value:string, style:string):string{
        return `<input type = "`+type+`" value = "`+value+`" class = "`+style+`">`;
    }
}