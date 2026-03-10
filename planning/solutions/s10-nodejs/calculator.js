// calculator.js — Session 10 CLI calculator
// Usage: node calculator.js add 5 3
import { add, subtract, multiply, divide } from './math.js';

const [,, operation, a, b] = process.argv;
const num1 = parseFloat(a);
const num2 = parseFloat(b);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
  process.exit(1);
}

switch (operation) {
  case "add":      console.log(add(num1, num2)); break;
  case "subtract": console.log(subtract(num1, num2)); break;
  case "multiply": console.log(multiply(num1, num2)); break;
  case "divide":
    try { console.log(divide(num1, num2)); }
    catch (e) { console.log(e.message); }
    break;
  default:
    console.log("Unknown operation. Use: add, subtract, multiply, divide");
}
