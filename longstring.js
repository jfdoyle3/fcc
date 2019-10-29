  let str="What if we try a super-long word such as otorhinolaryngology";
  let words=str.split(" ");
  let wordCount=0;
  for (var idx=0; idx<words.length; idx++)
  {
    if (words[idx].length>wordCount)
    {
      wordCount=words[idx].length;
    }

  }
  
  console.log(wordCount);
