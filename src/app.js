/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const FIRST_POSITION = 0;
const _getFibonacciNumber = (index) => {
  if(index < 2){
    return index;
  }
  return _getFibonacciNumber(index-1) + _getFibonacciNumber(index-2);
}

const _isLessThanZero = (number) => {
  return number < 0;
}
const _printFibonacciNumber = (fibonacciNumber) => {
  console.log(_getFibonacciNumber(fibonacciNumber));
}

const getFibonacciSequence = (positionQuantity) => {
  if(_isLessThanZero(positionQuantity)){
    return _getFibonacciNumber(FIRST_POSITION);
  }else{
    _printFibonacciNumber(positionQuantity);
    return getFibonacciSequence(positionQuantity-1)
  }
}
getFibonacciSequence(6)
};
