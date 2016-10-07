function substractPositive(num1, num2){
  if (num1 > 0){
    return num1 - num2;
  }
  else {
    return 0
  }
}

function add(num1, num2){
  if (num1 == num2){
    return num1 + num2;
  }
  else if (num1 > num2){
    return num1 + num2;
  }
  else {
    return num1 + num2;
  }
  //return num1 + num2;
}


module.exports.substractPositive = substractPositive
module.exports.add = add;
