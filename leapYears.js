const leapYears = function(year) {
    let leapYear = false;
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        leapYear = true;
    }else if(year % 4 == 0 && year % 100 != 0) {
        leapYear = true;
    }
    return leapYear;
}

