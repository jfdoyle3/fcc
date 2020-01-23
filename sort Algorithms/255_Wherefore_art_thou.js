function whatIsInAName(collection, source) {
    // What's in a name?
    
    var arr = [];
    // Only change code below this line
    //console.log(source);
     var result =  collection.filter(function (collection) {
        return arr=source;
      });
      console.log(arr);
//for (i in collection){

    //COLLECTION

//console.log(source[Object.keys(source)]);
//}
    // Only change code above this line
    return arr;
}
  
//  whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
    // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]