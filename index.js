/* use strict */
function multiplyNumberArrays(a, b){
    var
        zeroes      = [],
        result      = [],
        dummy       = [];

    for(var i = 0; i < b.length ; i++) {
        if(i)
            zeroes.push(0);

        dummy       = multiplyWithOneDigit(a, b[i], zeroes);
        result      = addReversedNumberArrays(result, dummy);
    }

    return result;
}

function multiplyWithOneDigit(a, b, zeroes){
    var
        result          = zeroes.slice(),
        carry           = 0,
        multiplyResult  = '';

    for(var i = 0; i < a.length ; i++) {
        multiplyResult  = (a[i]*b) + carry;
        carry           = (multiplyResult)/10|0;
        result.push(multiplyResult%10);
    }

    
    if(carry)
        result.push(carry);

    return result;
}

function addReversedNumberArrays(a, b){

    if(a.length === 0)
        return b;

    var
        carry       = 0,
        result      = [],
        addResult   = '';


    for(var i = 0; i < b.length; i++){
        if(i >= a.length)
            addResult = b[i] + carry;
        else
            addResult = a[i] + b[i] + carry;
        result.push(addResult%10);
        carry = (addResult/10)|0;
    }

    if(carry)
        result.push(carry);

    return result;
}

function reverseNumberArray(i){
    return i.toString().split('').reverse().map( (a) => parseInt(a));
}

function factorial(x){
    var
        result = [1];

    for(var i = 2; i <= x; i++){
        result = multiplyNumberArrays(result,reverseNumberArray(i));
        //console.log(i," = ",result);
    }

    /*
        result is reversed array
    */

    return result.reverse().join('');
}

module.exports = factorial;
