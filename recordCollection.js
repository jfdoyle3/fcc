// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  //console.log(JSON.parse(collection));
  //console.log(collection[5439]["album"]);  // return ABBA Gold
  
  // obj[5439].push({"artist":"ABBA"});
  

  
  
  
  
  
  
  console.log("collection:");
  console.log(collection);
  return collection;
  }
  
  // Alter values below to test your code
  updateRecords(5439, "artist", "ABBA");
  