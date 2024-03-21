
/*

Functions in JavaScript are first-class objects, which means they can be treated like any other object: they can be assigned to a variable, passed as values to other functions, returned as the value from another function, etc. They're super useful

A higher-order function is a function that can accept functions as arguments and/or return a function.

*/

// ---------------------------------------

function functionToBeReceived(){
  
};

// TODO:- Take a callback function as an argument.
function receivesAFunction(functionToBeReceived){
  // TODO:- Call the callback function.
  functionToBeReceived();
};

receivesAFunction()

// ---------------------------------------

// TODO:- Take no arguments.
function returnsANamedFunction(){
  // TODO:- Return a named function.
  return function namedFunction(){};
};

// ---------------------------------------

// TODO:- Take no arguments.
function returnsAnAnonymousFunction(){
  // TODO:- Return an anonymous function.
  return function (){};
};