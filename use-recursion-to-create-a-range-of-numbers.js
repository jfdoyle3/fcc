function rangeOfNumbers(startNum, endNum) {

  if(endNum-startNum===0){
      return [startNum];
 
  }
  else
  {
 let numbers= rangeOfNumbers(startNum, endNum-1);
    numbers.push(endNum);
    return numbers;
  }
};
