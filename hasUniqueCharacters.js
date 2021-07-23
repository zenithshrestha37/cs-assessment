function hasUniqueCharacters(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 1 + i; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }

console.log(hasUniqueCharacters("Moonday"))
console.log(hasUniqueCharacters("Monday"))