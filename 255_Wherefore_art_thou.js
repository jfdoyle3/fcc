function whatIsInAName(collection, source) {
    // What's in a name?
    
    var arr = [];
    // Only change code below this line
for (var i in collection){
   console.log(collection[i]);
 console.log (collection[i]["c"]);
// console.log('Object.keys(collection[i]) = ' + Object.keys(collection[i]));
// console.log(collection[i].hasOwnProperty("c"));
//console.log(i + collection[i].hasOwnProperty(Object.keys(collection[i])));
//  for (var j in collection[j]);
//console.log(Object.entries(collection)[i]);
 //   if (Object.hasOwnProperty(i)){
        console.log(i);
    }
}
    // Only change code above this line
    return arr;

  }
  
  whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })