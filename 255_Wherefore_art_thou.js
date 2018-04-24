function whatIsInAName(collection, source) {
    // What's in a name?
    var string1="";
    var arr = [];
    // Only change code below this line
for (var i in collection){
    console.log(collection[i]);

console.log('Object.keys(collection[i]) = ' + Object.keys(collection[i]));
  for (var j in collection[j]);


}
    // Only change code above this line
    return arr;

  }
  
  whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })