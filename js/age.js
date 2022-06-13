var Age = /** @class */ (function () {
    function Age() {
        this.bd_year = 2002;
        this.bd_month = 6;
        this.bd_day = 24;
        this.calcAge();
    }
    Age.getInstance = function () {
        return Age.age;
    };
    Age.prototype.getAge = function () {
        return this.old_year;
    };
    Age.prototype.getMonthOld = function () {
        return this.old_month;
    };
    Age.prototype.getDayOld = function () {
        return this.old_day;
    };
    Age.prototype.calcAge = function () {
        function getDaysInMonth(year, month) {
            if (month == 0) {
                month = 12;
            }
            return new Date(year, month, 0).getDate();
        }
        var todayDate = new Date();
        //Age data:
        var old_year = todayDate.getFullYear() - this.bd_year;
        var old_month = (todayDate.getMonth() + 1) - this.bd_month;
        var old_day = todayDate.getDate() - this.bd_day;
        //Fix negative cases:
        if (old_day < 0) {
            old_day = todayDate.getDate();
            old_day += getDaysInMonth(todayDate.getFullYear(), todayDate.getMonth()) - this.bd_day;
            old_month--;
        }
        if (old_month < 0) {
            old_month += 12;
            old_year--;
        }
        this.old_day = old_day;
        this.old_month = old_month;
        this.old_year = old_year;
    };
    Age.age = new Age();
    return Age;
}());
