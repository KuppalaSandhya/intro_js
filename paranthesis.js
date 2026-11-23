function paranthesis(num) {
  if (num > 0) {
    return "(" + paranthesis(num - 1) + ")";
  } else {
    return "";
  }
}
console.log(paranthesis(4));
