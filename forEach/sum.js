// sum([1,2,3]);
//function declaration. Does hoisting by default
function sum(arr) {}
// sum2([]); would break because is not a function declartion
//function expression
//assign a function to a variable

const sum2 = function (arr) {};
// sum2([]) would not break if called below expression
//hoisting = the compiler puts function declartions at the top of the file
//function expression does not hoiste, so must be declared before being called
//good practice is to delcare function declartions and function expressions at the top of file before calling

const sum3 = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
export default sum3;
//convert from function expression to arrow syntax by deleting "function" keyword and add =>. Also delete ()
