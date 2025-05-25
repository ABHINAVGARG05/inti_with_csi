console.log("index1 in test branch");

const a = 20;

const calculator = (num1, num2, symbol) => {
  switch(symbol){
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    default: return undefined;
  }
}

console.log(calculator(2, 3, '+'));