/*Do the below programs in anonymous function & IIFE

a.Print odd numbers in an array*/


IIFE:
let a=[0,1,2,3,4,5,6,7,8,9];

(function ()  {

  let odd= a.filter(num => num %2 ==1);
return odd;
})();