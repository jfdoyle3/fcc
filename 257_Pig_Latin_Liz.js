function translatePigLatin(str) {
    function isConsonant(myLetter) {
  if (!(myLetter == 'a' ||
      myLetter == 'e' ||
      myLetter == 'i' ||
      myLetter == 'o' ||
      myLetter == 'u')) {
      return true;
      }

        return false;
    }
    var firstLetters = '';
    for(var letter in str)
    {
        if (isConsonant(str[letter])){
        firstLetters += str[letter];
        }
        else{
            break;
        }
    }
    var after = str.substring(firstLetters.length, str.length) + firstLetters + "ay";
  return after;

}
translatePigLatin("algorithm");

    