function longestWord(str) {
    var splitStr = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < splitStr.length; i++){
      if(splitStr[i].length > longestWord){
      longestWord = splitStr[i].length;
       }
    }
    return longestWord;
  }
  console.log(longestWord("The quick brown fox jumped over the lazy dog"))
  console.log(longestWord("a abbbsbsbfbfbdfbdbf fdbfjkdjsfsb fdsfd"))