module.exports = function check(str, bracketsConfig) {
    var openbrackets = []; 
    var closedbrackets = [];

  for (i = 0; i < bracketsConfig.length; i++) { 
      openbrackets.push( bracketsConfig[i][0] );

      closedbrackets.push( bracketsConfig[i][1] );
     }
console.log('openbrackets : '+ openbrackets);

console.log('closedbrackets : ' + closedbrackets);
//console.log(closedbrackets.includes('{'));
  
  var ValidBrackets = false;
var arrBrackets = str.split('');
// Array ["{", "(", ")", "}"]
   var OpenStack = [];
   var ClosedStack = [];
      for (i = 0; i < arrBrackets.length; i++) {         
        
        // open
		if(openbrackets.includes(arrBrackets[i]))
          OpenStack.push(arrBrackets[i]); // add open brakets
        
         if(closedbrackets.includes(arrBrackets[i]))
         {
           	if(OpenStack.length === 0) // check to open brackets
              ValidBrackets = false;
           	else
            	ClosedStack.push(arrBrackets[i]); // add Closed brakets
         }
            
		
      //stack.pop();

        
     }
  		//collect brackets
      console.log('OpenStack : ' + OpenStack); 
      console.log("ClosedStack : " + ClosedStack);
  
  	//loop check 
  	for (i = 0; i < OpenStack.length; i++) {  
      
      closedind = openbrackets.indexOf(OpenStack[i]);
      console.log("---checkOPN : " + OpenStack[i]); 
      
       console.log("pos : " + ((OpenStack.length -1) - i)); 
      console.log("sedbracke- : " + closedbrackets[closedind] ); 
       console.log("checkCLS--- : " + ClosedStack[((OpenStack.length -1) - i)] ); 
      if(ClosedStack[((OpenStack.length -1) - i)] == closedbrackets[closedind]) 
       return true; 
      else
      return false;
      //check in openbrackets OpenStack[i] get position closed brac
      //check in ClosedStack closedind
      //count-i
  	}
	//console.log("arrBr : " + stack.pop());
}
