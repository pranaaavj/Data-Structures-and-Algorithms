function checkPalindrome(str, reversed = '', length = str.length - 1) {
  if (str.length === reversed.length || length < 0) {
    if (str === reversed) return true;
    else return false;
  }

  reversed += str[length];
  return checkPalindrome(str, reversed, length - 1);
}

console.log(checkPalindrome('malayalam'));
