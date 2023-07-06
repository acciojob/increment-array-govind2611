let arr = [1, 2, 3, 4, 5];

function incrementArray(arr) {
  let newArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = ++arr[i];
  }
  
  return newArray;
}

alert(incrementArray(arr));
