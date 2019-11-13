function rangeOfNumbers(startNum, endNum) 
{
    return (startNum===endNum) ? [number] :     
    if (startNum===endNum)
    {

        return [number];
    }
    else 
    {
      let number=[endNum--];
      console.log(endNum);
      number.push(endNum);
      
    rangeOfNumbers(startNum, endNum);
   };
}
 rangeOfNumbers(6, 9);