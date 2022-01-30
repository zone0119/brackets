
module.exports = function check(str, bracketsConfig) {
    var openbrackets = []; 
    var closedbrackets = [];

  for (i = 0; i < bracketsConfig.length; i++) { 
      openbrackets.push( bracketsConfig[i][0] );
      closedbrackets.push( bracketsConfig[i][1] );
  }
//console.log('openbrackets : '+ openbrackets);
//console.log('closedbrackets : ' + closedbrackets);
//console.log(closedbrackets.includes('{'));
  
var ValidBrackets = false;
var arrBrackets = str.split('');
  //console.log('arrBrackets : ' + arrBrackets); 
// Array ["{", "(", ")", "}"]
   var OpenStack = [];
   var ClosedStack = [];
      for (i = 0; i < arrBrackets.length; i++) {      
       // console.log('for ##1i : ' + i + ' : bracket : ' + arrBrackets[i]); 
        
 closedind = closedbrackets.indexOf(arrBrackets[i]);                      
        //   console.log(closedind + '-closedind : '); 
         if(closedbrackets.includes(arrBrackets[i]) && OpenStack.length !==0 && openbrackets[closedind] === OpenStack[OpenStack.length-1])
         {                         
             let open = OpenStack.pop();
             // console.log('tt : ' + open); 
             ValidBrackets = true;  
            //console.log(open + '-3f inc : ' + OpenStack); 

         }  
        else		if(openbrackets.includes(arrBrackets[i]))
        {  
          OpenStack.push(arrBrackets[i]); // add open brakets    
          //console.log('2t add open brakets  : ' + OpenStack); 
        }
        else {
        return false;
        }
     }
  		//collect brackets
      //console.log('END OpenStack : '); 
   //console.log(OpenStack.length === 0); 
    //console.log(" END ClosedStack : " + ClosedStack);
  //console.log("ValidBrackets : " + ValidBrackets);
  return OpenStack.length === 0;
}
