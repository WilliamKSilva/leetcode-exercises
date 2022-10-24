
// The most dumb way but actually works haha!!

const romanToInt = (s) => {  
  let intRoman = 0;

  const romanValues = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  
  for (j = 0; j < s.length;) {            
    let romanNumeral = s[j];
        
    switch (true) {
      case (s[j] === "I" && s[j + 1] === "V"):
        intRoman = romanValues["IV"] + intRoman;
        j = j + 2;
        break;
      case (s[j] === "I" && s[j + 1] === "X"):
        intRoman = romanValues["IX"] + intRoman;
        j = j + 2;
        break;
      case (s[j] === "X" && s[j + 1] === "L"):
        intRoman = romanValues["XL"] + intRoman;
        j = j + 2;
        break;
      case (s[j] === "X" && s[j + 1] === "C"):
        intRoman = romanValues["XC"] + intRoman;
        j = j + 2;
        break;
      case (s[j] === "C" && s[j + 1] === "D"):
        intRoman = romanValues["CD"] + intRoman;
        j = j + 2;
        break;
      case (s[j] === "C" && s[j + 1] === "M"):
        intRoman = romanValues["CM"] + intRoman;
        j = j + 2;
        break;
      default:
        intRoman = romanValues[romanNumeral] + intRoman;
        j++;
        break;                     
    }; 
  };
  
  return intRoman;
};

console.log(romanToInt('IV'));