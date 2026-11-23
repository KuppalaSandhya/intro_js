function f(num){
return 2 * g(num);
}
function g(num) {
return 3 + h(num);
}
function h(num) {
return num-1; 
}
console.log(f(5));