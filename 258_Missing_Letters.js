function fearNotLetter(str) {
  var pos=0;
  for (i in str){
  console.log(pos++);  
 //   console.log(str.charCodeAt(i));
    if (i != i++){
    
    //  console.log(i, str.fromCharCode(i));
      str.fromCharCode(i++);
   
    };
  }
  return str;
}
// str.fromCharCode(#) char number
//var output = a.substr(0, position) + b + a.substr(position);  // inserts string at poisiton
//fearNotLetter("abce");  // d
fearNotLetter("abcdefghjklmno");  // i
//fearNotLetter("bcd");   // undefined
//fearNotLetter("yz");    // undefined