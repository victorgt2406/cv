class Age{
    private bd_year:number = 2002;
    private bd_month:number = 6;
    private bd_day:number = 24;

    private old_year:number;
    private old_month:number;
    private old_day:number;

    private static age = new Age();

    public static getInstance():Age{
        return Age.age;
    }

    private constructor(){
        this.calcAge();
    }

    public getAge(){
        return this.old_year;
    }

    public getMonthOld(){
        return this.old_month;
    }

    public getDayOld(){
        return this.old_day;
    }

    private calcAge(){
        function getDaysInMonth(year, month) {
            if(month == 0){
                month = 12;
            }
            return new Date(year, month, 0).getDate();
        }
        var todayDate = new Date();
    
        //Age data:
        var old_year = todayDate.getFullYear() - this.bd_year;
        var old_month = (todayDate.getMonth()+1) -this.bd_month;
        var old_day = todayDate.getDate() - this.bd_day;
    
        //Fix negative cases:
        if(old_day<0){
            old_day = todayDate.getDate();
            old_day += getDaysInMonth(todayDate.getFullYear(), todayDate.getMonth()) - this.bd_day;
            old_month--;
        }
        if(old_month<0){
            old_month+=12;
            old_year--;
        }

        this.old_day = old_day;
        this.old_month = old_month;
        this.old_year = old_year;
    }
}