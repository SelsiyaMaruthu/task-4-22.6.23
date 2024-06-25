/*b.Convert all the strings to title caps in a string array*/


//Anonymous :
let str = function () {
    let arr = "good morning"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()