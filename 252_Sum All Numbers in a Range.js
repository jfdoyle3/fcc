
function sumAll(arr) {
  arr.sort(function(a,b) {
    return a-b;
 });
      var min=Math.min(arr[0]);
      var max=Math.max(arr[arr.length-1]);
var total=0;
  for (i=min; i <=max; i++){
    
 total += i; 
}
   return total;
 }
 //print outfunction to console
console.log(sumAll([10, 5]));