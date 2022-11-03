

var isValid = (s) => {
  let stack = [];  
  let checked = true;

  let starters = ["(", "[", "{"];
  let finishers = [")", "]", "}"];

  if (s.length % 2 !== 0) {
    return false;
  }  

  function getValue(c) {    
    let found;
    
    for (let index = 0; index < starters.length; index++) {
      if (c === starters[index]) {
        found = finishers[index];
      };        
    }

    return found;
  }

  for (let i = 0; i < s.length;) {
    const element = s[i];                  

    if (!finishers.includes(element)) {
      stack.push(s[i]);      
      i = i + 1;
      continue;
    };            

    if (finishers.includes(element) && stack) {     
      const lastItem = stack.slice(-1);     
      
      const corresponding = getValue(lastItem[0]);            
      
      if (s[i] === corresponding) {        
        checked = true;
        stack.pop();
        i = i + 1;
        continue;
      }

      checked = false;
      break;
    };        
  }

  if (stack.length > 0) {      
    checked = false;
  }

  if (checked) {
    return true;
  }

  return false;
}

console.log(isValid("({}[])()"));
  