module.exports = function toReadable (number) {
  let w = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let q = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine' ];
  let e = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let hundred = ' hundred';
  let newNumber = '';
  let r = number - 10;
  let t = String(r);
   
  let numberString = String(number);  

  if (number < 10) {
    return q[number];
  } else if (number >= 10 && number <= 19) {
    return e[number - 10];
   } else if (number > 10 && number < 100 && numberString.charAt(1) == 0) {
     newNumber = w[Number(numberString.charAt(0)) - 1];
     return  newNumber;
   }  else if (number >= 20 && number < 100) {
    newNumber = w[Number(t.charAt(0))] + ' ' + q[Number(t.charAt(1))];
     return newNumber; 
   } else if (number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
     newNumber = q[numberString.charAt(0)] + hundred;
     return  newNumber; 
  } else if (number > 100 && numberString .charAt(1) == 0) {
    newNumber =  q[Number(numberString.charAt(0))] + hundred + ' ' + q[Number(numberString .charAt(2))];
    return  newNumber;
  } else if (number >= 110 && number < 120 || number >= 210 && number < 220 || number >= 310 && number < 320 || number >= 410 && number < 420 || number >= 510 && number < 520 || number >= 610 && number < 620 || number >= 710 && number < 720 || number >= 810 && number < 820 || number >= 910 && number < 920) {
     newNumber = q[Number(numberString.charAt(0))] + hundred + ' ' + e[Number(numberString.charAt(2))];
       return  newNumber;
   } else if (number >= 120 && numberString.charAt(2) == 0) {
      newNumber = q[Number(numberString.charAt(0))] + hundred + ' ' + w[Number(numberString.charAt(1)) - 1];
        return newNumber; 
   } else if (number >= 110) {
     newNumber = q[Number(numberString.charAt(0))] + hundred + ' ' + w[Number(numberString.charAt(1)) - 1] + ' ' + q[Number(numberString.charAt(2))];
       return  newNumber;
   } 

}