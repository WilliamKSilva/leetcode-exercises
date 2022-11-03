

var longestCommonPrefix = function(strs) {  
  let finalWord = "";
  let prefixes = [];
  let checked;
  let counter = 1;

  if (strs.length === 1) {
    return strs[0];
  };

  outerloop:
  for (let i = 0; i <= counter; i++) {
    const string = strs[0];

    innerloop:
    for (let j = 1; j <= strs.length; j++) {      
      const nextString = strs[j];                  

      if (string === "" || nextString === "") {
        return "";
      }

      if (string && nextString) {                        
        if (string[0] !== nextString[0]) {
          return "";
        }

        counter = nextString.length;
        
        if (string[i] === nextString[i] && string[i] !== undefined) {          
          checked = true;          

          continue innerloop;          
        } else {
          checked = false;
          break outerloop;
        }                
      }          
      
      if (checked) {
        prefixes.push(string[i]);
      }      
    }    
  }
  
  for (let index = 0; index <= prefixes.length - 1; index++) {
    const element = prefixes[index];    

    finalWord = finalWord + element;    
  }

  return finalWord;
}

console.log(longestCommonPrefix(["aaaa","aaaa", "aaaa"]))