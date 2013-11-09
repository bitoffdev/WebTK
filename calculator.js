function calculate(input){
   order = [[ ["*"] , ["/"] , ["%"] , ["^"] ],[ ["+"] , ["-"] ]];
   input = input.replace(/[^0-9%^*\/()\-+.]/g,'');
   var output;
   for(var i=0, n=order.length; i<n; i++ ){
      var re = new RegExp( '(\\d+\\.?\\d*)([\\' +order[i].join('\\')+ '])(\\d+\\.?\\d*)' );
      re.lastIndex = 0;
      while( re.test(input) ){
         output = calc_internal(RegExp.$1,RegExp.$2,RegExp.$3);
         if (isNaN(output) || !isFinite(output)) return output;
         input  = input.replace(re,output);
      }
   }
   return output;
   function calc_internal(a,op,b){
      a=a*1; b=b*1;
      switch(op){
         case "+": return a+b; break;
         case "-": return a-b; break;
         case "/": return a/b; break;
         case "*": return a*b; break;
         case "%": return a%b; break;
         case "^": return Math.pow(a,b); break;
         default: null;
      }
   }
}
