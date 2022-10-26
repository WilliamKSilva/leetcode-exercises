

function sumArray(x, length, temp) {      
  
  if (length === x.length) {
    return temp;
  }

  return temp + sumArray(x, length + 1, temp = x[length]);
}

console.log(sumArray([10, 20, 30, 40], 0, 0));