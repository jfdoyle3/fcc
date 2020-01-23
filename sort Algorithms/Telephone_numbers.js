function telephoneCheck(str) {
  // Good luck!
  var number = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return number.test(str);

}


telephoneCheck("555-555-5555");
