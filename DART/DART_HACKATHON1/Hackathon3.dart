import 'dart:io'; // Import the dart:io library for user input

void main() {
  // Request user input for marks
  print("Please enter your marks:");
  int marks = int.tryParse(stdin.readLineSync() ?? "") ??
      0; // Read user input for marks

  if (marks > 85) {
    print("Excellent");
  } else if (marks >= 75 && marks <= 85) {
    print("Very Good");
  } else if (marks >= 65 && marks < 75) {
    print("Good");
  } else {
    print("Average");
  }
}
// I did not manage to display output. I need more guidance on the dart
// input-output