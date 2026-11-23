let start = 2;
function evenNumbers(num,start) {
if(num < start) 
return ;
console.log (start);
start = start + 2;
evenNumbers(num,start) ;
}
evenNumbers(10)