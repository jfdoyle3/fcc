function rangeOfNumbers(startNum, endNum) 
{
   // return (startNum===endNum) ? [number] :     
    if (startNum===endNum)
    {

        return [endNum];
    }
    else 
    {
      let number=endNum--;
   
    rangeOfNumbers(startNum++, endNum--);
    
    
    
   };
}
 rangeOfNumbers(6, 9);