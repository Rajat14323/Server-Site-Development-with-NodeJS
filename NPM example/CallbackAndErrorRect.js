module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),           //second argument is null as there is a error
            2000);           //this is create a delay of 2 seconds
    else
        setTimeout(() => 
            callback(null, {         //first argument is null because there is no error
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            2000);
}