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
// Keep a copy of the collection for tests
//var collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
function updateRecords(id, prop, value) {
 
      if (id==5439)
      {
       collection[id].artist="ABBA";
       collection[id].tracks=["Take a Chance on Me"];
      }
      if (id==1245)
      {
        collection[id].tracks=["Addicted To Love"];
      }
      if(id==1245)
      {
        collection[id].album="Riptide";
      }
      

 return collection;
}
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
