// Function to perform addition
int add(int a, int b) {
  return a + b;
}

// Function to perform multiplication
int multiply(int a, int b) {
  return a * b;
}

void main() {
  int num1 = 5;
  int num2 = 3;

  // Perform addition using the add function
  int resultAdd = add(num1, num2);
  print("The result of $num1 + $num2 is $resultAdd");

  // Perform multiplication using the multiply function
  int resultMultiply = multiply(num1, num2);
  print("The result of $num1 * $num2 is $resultMultiply");
}
