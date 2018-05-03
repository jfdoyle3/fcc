function fearNotLetter(str) {
  
  for (i in str){
    console.log(str.charCodeAt(i));
  }
  return str;
}

//fearNotLetter("abce");  // d
fearNotLetter("abcdefghjklmno");  // i
//fearNotLetter("bcd");   // undefined
//fearNotLetter("yz");    // undefined