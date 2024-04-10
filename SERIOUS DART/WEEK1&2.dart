double calculateArea(double length, double width) => length * width;

void main() {
  double length = 30;
  double width = 26;

  double answer = calculateArea(length, width);
  print("The area of the Square is: $answer cm2");
}
