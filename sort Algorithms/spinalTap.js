function spinalCase(str) {
    // ?=[A-Z])|
    let splitup=str.split(/(?=[A-Z])/).join("-");
    let runon=splitup.replace(/\s|[_]/g,"");
    let result=runon.toLowerCase();
    console.log(runon);
      return result;
    
    }
    spinalCase('This Is Spinal Tap');