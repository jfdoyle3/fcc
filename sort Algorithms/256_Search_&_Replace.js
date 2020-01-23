function myReplace(str, before, after) {
// var n=str.replace(before, after);
// console.log(after[0]);
var b=before.charCodeAt(0);
var a=after.charCodeAt(0);
console.log(a);
if (b < a){
	 after= a-b;

 }
//if (after == "john"){
//   var after='John';
 //} else 
// if (after == "sitting"){
// 	var after="Sitting";
// } else 
 //if(after == "algorithms"){
// 	var after="Algorithms";
// }
 
 //console.log(after);
var n=str.replace(before,after);	
  
 
 console.log(n);
  return n;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
//myReplace("Let us get back to more Coding", "Coding", "algorithms")
//myReplace("His name is Tom", "Tom", "john");
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");