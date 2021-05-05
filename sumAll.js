const sumAll = function(x,y) {
    let sum = 0;
    if(x < 0 || y < 0 || typeof(x) !== 'number' || typeof(y) !== 'number' ){
        return 'ERROR';
    }
    let start = (x < y) ? x : y ;
    let stop = (y > x) ? y : x;

    for(let i = 0; i < stop; i++ ){
        sum += (start+i);
    }
    return sum;

}
