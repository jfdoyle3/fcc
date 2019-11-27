function findElement(arr, func) {
  for (let idx=0; idx<arr.length; idx++)
  {
  let truFal=Boolean(func(arr[idx]));
  if (truFal)
    return arr[idx];
  }
 }

findElement([1, 2, 3, 4], num => num % 2 === 0);