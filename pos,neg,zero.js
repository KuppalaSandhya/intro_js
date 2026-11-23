console.log(describeNumber(10));
console.log(describeNumber(-10));
console.log(describeNumber(0));
 function describeNumber(num)
 {
    let result="Positive";
    if (num === 0)
    {
        result="zero";
    }
    else if (num<0)
    {
        result="negative";
    }
    return result;
 }
