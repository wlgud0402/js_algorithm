//2,3,5 로만 나눠지는 소인수분해

function maxDivide(number, divisor){
    while(number % divisor ==0){
        number /= divisor;
    }
    return number;
}

function isUgly (number){
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);

    return number === 1;
}

function arrayNUglyNumbers (n){
    var counter =0, currentNumber =1, uglyNumbers=[];

    while (counter != n){
        if(isUgly(currentNumber)){
            counter++;
            uglyNumbers.push(currentNumber);
        }
        currentNumber++;
    }
    console.log(uglyNumbers)
}

arrayNUglyNumbers(15)