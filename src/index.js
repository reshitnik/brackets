module.exports = function check(str, bracketsConfig) {
    function checkStr(teststr) {
    
        let templ = "[]{}()|"
        let stack = []
      
        for(let ibracket of teststr) {
          let bracketsIndex = templ.indexOf(ibracket)
          if(bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex +1 )
              } else {
            if(stack.pop() !== bracketsIndex) {
              return false;
            }
          }
        }
        return stack.length === 0
      }
    
      let str2 = bracketsConfig.join('').replaceAll(',','')
      checkBracket1 = checkStr(str);
      checkBracket2 =checkStr(str2);
    
      if (checkBracket1  == true & checkBracket2 ==true) {
        return true;
      } else {
        return false
    }
}
