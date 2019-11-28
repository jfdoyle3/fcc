let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D{3}\d)/; // Change this line
let result = pwRegex.test(sampleWord);
