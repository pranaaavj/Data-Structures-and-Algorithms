function shiftString(str, n) {
  
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0) + n;
    str[i] = String.fromCharCode(code);
  }
  console.log(str);
}

shiftString('hello', 2);
