import 'dart:io';
import 'dart:math';

void main() {
  final random = Random();
  int computerNumber = random.nextInt(10) + 1;
  bool correctguesses = false;
  print("The computer is thinking a number between 1 and 10");

  while (!correctguesses) {
    print("Guess the number:");
    String? input = stdin.readLineSync();
    int? guess = int.parse(input!);

    if (guess == Null) {
      print("Enter a guess, invalid input");
      continue;
    }
    if (guess < computerNumber) {
      print('The number is low, go Higher!');
    } else if (guess > computerNumber) {
      print('The number is high, go Lower!');
    } else {
      print('Correct! The number was $computerNumber.');
      correctguesses = true;
    }
  }
}
