/*void main() {
  int marks = 700;
  if (marks == 100) {
    print("you got a A+. Well done");
  } else if (marks > 90 && marks < 100) {
    print("you got an A. congratulations");
  } else if (marks > 75 && marks < 90) {
    print("you managed a B, Good job");
  } else if (marks > 60 && marks < 75) {
    print('congratulations, you got grade C');
  } else if (marks > 40 && marks < 60) {
    print("you scored a D. put more effort");
  } else if (marks > 0 && marks < 40) {
    print('You failed. come with your parent opening of next term');
  } else {
    print('Invalid grade, please check again and retry');
  }
}
void main() {
  int marks = 0;
  switch (marks) {
    case (> 90 && <= 100):
      print('You managed an A, congratulations');
      break;
    case (> 75 && < 90):
      print('Well done, you managed a B');
      break;
    case (> 60 && < 75):
      print('You tried as you managed a C, put more effort');
      break;
    case (> 40 && < 60):
      print('You need to pull up your socks');
      break;
    case (>= 0 && < 40):
      print('You failed. You will have to re-do your exams');
      break;
    default:
      print(
          'You either did not sit for your exams or you have entered an inavild grade.\n'
          'Please check your grade and try again');
  }
}
void main() {
  int i = 10;
  while (i >= 0) {
    print('$i good morning lynn');
    i--;
  }
}*/
import 'dart:io';
import 'dart:math';

void main() {
  final random = Random();
  int compRand = random.nextInt(10) + 1; // Generates a number between 1 and 100
  bool hasGuessedCorrectly = false;
  print("Guess the number I'm thinking of between 1 and 100.");

  while (!hasGuessedCorrectly) {
    print('Enter your guess:');
    String? input = stdin.readLineSync();
    int? guess = int.tryParse(input!);

    if (guess == null) {
      print('Please enter a valid number.');
      continue;
    }

    if (guess < compRand) {
      print('The number is low, go Higher!');
    } else if (guess > compRand) {
      print('The number is high, go Lower!');
    } else {
      print('Correct! The number was $compRand.');
      hasGuessedCorrectly = true;
    }
  }
}

  //int i = 0;
  // while (i <= 10) {
  //print("Hello mama Declan");
  // i++;
  //}
  //String name = "lynette kananu";
  //if (name.length <= 7) {
  //  print("the name $name has ${name.length} letters, it is too short");
  //} else {
  //print("Your name is of the right size");
  //}


