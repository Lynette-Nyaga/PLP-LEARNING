// Task 1: Create a function that takes two numbers as input and returns the sum of those numbers.
int sum(int a, int b) {
  return a + b;
}

void main() {
  // Testing Task 1: Sum of 5 and 7
  print('Sum of 5 and 7: ${sum(5, 7)}');

  // Task 2: Write a program that uses a for loop to print out the numbers from 1 to 10.
  print('Numbers from 1 to 10:');
  for (int i = 1; i <= 10; i++) {
    print(i);
  }

  // Task 3: Create a program that uses a switch statement to check for different string values and output a response based on the value.
  print('Checking string values:');
  void checkString(String value) {
    switch (value) {
      case 'hello':
        print('Hello there!');
        break;
      case 'goodbye':
        print('Goodbye!');
        break;
      default:
        print('Unknown value');
    }
  }

  checkString('hello');
  checkString('goodbye');
  checkString('unknown');

  // Task 4: Create a program that uses a while loop to print out the numbers from 20 to 10.
  print('Numbers from 20 to 10:');
  int i = 20;
  while (i >= 10) {
    print(i);
    i--;
  }

  // Task 5: Create a program that uses an if-else statement to check if a number is even or odd and output the result.
  print('Checking even/odd:');
  void checkEvenOdd(int number) {
    if (number % 2 == 0) {
      print('$number is even');
    } else {
      print('$number is odd');
    }
  }

  checkEvenOdd(10);
  checkEvenOdd(7);
  checkEvenOdd(20);

  // Task 6: Create a program that takes a list of numbers as input and outputs the largest number in the list.
  print('Largest number in the list:');
  int findLargest(List<int> numbers) {
    int largest = numbers[0];
    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }

  List<int> numbers = [3, 8, 1, 6, 12, 9];
  print(findLargest(numbers));

  // Task 7: Write a program that uses a try-catch block to catch an exception and output an error message.
  print('Testing exception handling:');
  void catchException() {
    try {
      // Attempting a division by zero to trigger an exception
      int result = 10 ~/ 0;
      print('Result: $result'); // This line won't be executed
    } catch (e) {
      print('Error: $e');
    }
  }

  catchException();
}
