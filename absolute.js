console.log(isAbsolute(10)) 
console.log(isAbsolute(-10)) 
console.log(isAbsolute(0))   
function  isAbsolute(num)
{
    let result = num; 
    if(num<0) {
      result = num * -1; }
     return result;
}