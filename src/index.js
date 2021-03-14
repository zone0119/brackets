module.exports = function check(str, bracketsConfig) {
    for (i = 0; i < bracketsConfig.length; i++) {  
      openbracket = bracketsConfig[i][0];
      closedbracket = bracketsConfig[i][1];
     }

var arrBrackets = str.split('');
// Array ["|", "(", ")", "|"]
      for (i = 0; i < arrBrackets.length; i++) {  
        if(i % 2 == 0)
         arrBrackets[i]
     }

}

//var str = '|()|';

//var bracketsConfig = [['(', ')'], ['|', '|']]; // -> true
//check(str, bracketsConfig);