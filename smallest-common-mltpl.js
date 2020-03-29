function smallestCommonMultiple(arr) {

  // we assign values to variables max, min, multiple based on our input
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let multiple = max;

  // we iterate with a for loop to find our smallest common multiple
  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0){
      multiple += max; 
      i = max;
    } 
  }
  
  // after the loop found it - we return it
  return multiple;  
}
