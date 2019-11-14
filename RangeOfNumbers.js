function rangeOfNumbers(startNum, endNum) 
{
   // return (startNum===endNum) ? [number] :     
    if (startNum===endNum)
    {

        return numbers;
    }
    else 
    {
     // let number=[endNum--];
    //  number.push(endNum--);
    console.log()
    let numbers=[rangeOfNumbers(startNum++, endNum--)];
    numbers.push(startNum);
    
    
   };
}
 rangeOfNumbers(6, 9);