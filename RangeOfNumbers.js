function rangeOfNumbers(startNum, endNum)
{
    var numbers;
 
  
    if(startNum == endNum+1)
    {
      
     return [endNum];
    }
    else
   {  
    numbers=startNum++;
   // numbers.concat(startNum++);
   // console.log(numbers);
      numbers=rangeOfNumbers(startNum, endNum) 
     
     return numbers;
     
    }
};
rangeOfNumbers(6, 9);