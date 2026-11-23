console.log(isLong("hello"))
console.log(isLong("sandhya"))
function isLong(word)
{
   let result="false";
   if(length(word)>5){
   result = "true";
   }
   return result;
}
function length(word)
{
    return word.length;
}
 