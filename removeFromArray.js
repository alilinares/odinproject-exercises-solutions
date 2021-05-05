const removeFromArray = function(arr,...optArgs) {
    let newArr = arr.filter(item =>{
        return !(optArgs.includes(item));
    });
    
    return newArr;
}
