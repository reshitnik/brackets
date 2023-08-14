module.exports = function check(str1, bracketsConfig) {
    function checkStr (str){
      if (str.length %2 !==0){
          return false
      }
      else if (str.split().filter(i => i =='|').length %2 !== 0){
          return false
      }
      let stack = [];
      const bracketsOpen = '([{'

      for (i=0; i<str.length; i++) {
          if (bracketsOpen.includes(str[i])){
              stack.push(str[i])
              // console.log(stack)
          } else if (str[i] ==')' & stack.slice(-1) =='(' || str[i] ==']' &  stack.slice(-1) =='[' || str[i] =='}' &  stack.slice(-1) =='{' || str[i] =='|' &  stack.slice(-1) =='|'){
              // console.log(`Что в стеке - ${stack.slice(-1)}, что на итерации - ${str[i]}`)
              stack.pop();
              // console.log(stack)
          } else {stack.push(str[i]) } 
          
      }
      
      return stack.length==0;
    }
    
      let str2 = bracketsConfig.join('').replaceAll(',','')
      checkBracket1 = checkStr(str1);
      console.log(checkStr(str1))
      checkBracket2 =checkStr(str2);
      console.log(checkStr(str2))
    
      if (checkBracket1  == true & checkBracket2 ==true) {
        return true;
      } else {
        return false
    }
}
