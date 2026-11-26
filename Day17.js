function confirmEnding(strLast,strMain) {
    if (strMain.slice(-strLast.length) === strLast) {
      return true;
    } else {
      return false;
    }
}
console.log(confirmEnding("ok", "Henok"));
console.log(confirmEnding("ok", "Nahom"));