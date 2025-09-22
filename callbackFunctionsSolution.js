let even_predicate = function (value)
{
    /* check whether the value is even 
     (a number is even when the remainder of its division by 2 is equal to 0)
     return true if the value is even or false when the value is odd 
   */
    return(value % 2 == 0)
};

let odd_predicate = function (value)
{
    /*
    check whether the value is odd 
     return true if the value is even or false when the value is odd
    */ 
    return(value % 2 != 0)
    // note: did the opposite output than the prev comment asked for, as I believe it was a mistake
};

let undefined_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is undefined
         (be careful with the implicit coercion) 
    */
    return(value == undefined)
};

let null_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is null
         (be careful with the implicit coercion) 
    */
    return(value === null)
};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function (predicate,value)
{
    // apply the predicate to the value and return the result
    return (predicate(value))
};

//DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9)); // check if 9 is even
console.log(check(odd_predicate, 9)); // check if 9 is odd
console.log(check(even_predicate, 8)); // check if 8 is even
console.log(check(odd_predicate, 8)); // check if 8 is odd
let x;
console.log(check(undefined_predicate, x)); // check if x is undefined
console.log(check(null_predicate, x)); // check if x is null