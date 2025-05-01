function reverseString(str) {
  if (str.length <= 1) return str;

  return str[0] + reverseString(str.slice(1));
}

console.log(reverseString('hello'));
  