function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): void {
  throw new Error('Error');
}


console.log(showMessage);
console.log(calc);
console.log(customError);
