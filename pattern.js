function pattern1(number) {
  if (number === 0) {
    return "\n";
  }
  return pattern1(number - 1) + star(number);
}
function pattern2(number) {
  let temp = number - 1;
  if (temp <= 0) {
    return "";
  }
  return star(temp) + pattern2(number - 1);
}
function star(number) {
  if (number === 0) {
    return "\n";
  }
  return "*" + star(number - 1);
}
function add(number) {
  return pattern1(number) + pattern2(number);
}
console.log(add(5));
