import "dart:io";

double numInput() {
  print("Enter yourfirst number: ");
  double myNum = double.parse(stdin.readLineSync()!);
  return myNum;
}

double numInput2() {
  print("Enter second number: ");
  double myNum = double.parse(stdin.readLineSync()!);
  return myNum;
}

String OperandChoice() {
  print("Enter your operator eg '+', '-', '*', '/' ");
  String choice = (stdin.readLineSync()!);
  return choice;
}

void main() {
  double num1 = numInput();
  double num2 = numInput2();
  String choice = OperandChoice();
  double answer = 0.0;

  if (choice == '+') {
    answer = num1 + num2;
    print("${num1} ${choice} ${num2}= ${answer}");
  } else if (choice == '-') {
    answer = num1 - num2;
    print("${num1} ${choice} ${num2}= ${answer}");
  } else if (choice == '*') {
    answer = num1 * num2;
    print("${num1} ${choice} ${num2}= ${answer}");
  } else if (choice == '/') {
    answer = num1 / num2;
    print("${num1} ${choice} ${num2}= ${answer}");
  } else {
    print("Invalid choice, check your numbers or operator");
    print("${num1} ${choice} ${num2}= ${answer}");
  }
}
