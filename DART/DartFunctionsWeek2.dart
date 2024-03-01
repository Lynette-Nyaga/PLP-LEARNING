// functions that takes two numbers as arguments and returns their sum
void addTwo(int a, int b) {
  int sum = a + b;
  print("The sum of the two numbers is $sum");
}

void main() {
  addTwo(67, 98);
}

//function that takes two numbers as arguments and returns their difference
void subtractTwo(int a, int b) {
  int diff = b - a;
  print("this is the difference of the two entered numbers: $diff ");
}

void main() {
  subtractTwo(987, 654);
}

//function that taes two numbers as arguments and returns their product
void multiplyTwo(int a, int b) {
  int product = a * b;
  print("This is the product of the two numbers: $product");
}

void main() {
  multiplyTwo(98, 54);
}

// function that gets the quotient of two numbers
void divideTwo(int a, int b) {
  int division = a ~/ b;
  print("when you divide $a by $b you get $division");
}

void main() {
  divideTwo(506, 70);
}

//function that takes an argument of type strin and returns the length of that string
int stringLength(String inputString) {
  return inputString.length;
}

void main() {
  print(stringLength("Lynette"));
}

//function that takes a list and returns the first element of that list
dynamic firstElement(List inputList) {
  return inputList[0];
}

void main() {
  print(firstElement([30, 28, 35]));
}
