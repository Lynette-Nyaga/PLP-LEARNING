//Strings one  to store text data in your program
void main() {
  String name = "Lynn"; // string
  int age = 20; //integer
  double pi = 3.147; //double (or number with a decimal)
  bool isStudent = true; // boolean data type
  print("Name: $name");
  print("Age: $age");
  print("universal value of Pi is $pi.");
  print("it is $isStudent she goes to school .");

  //lists
  //lists are used to store multiple values without creating multiple variables
  List<String> fruits = [
    "apple",
    "banana",
    "pears",
    "oranges",
    "mangoes",
    "grapes"
  ];
  print("fruit1: ${fruits[0]}");
  print("fruit2: ${fruits[1]}");
  print("fruit3 : ${fruits[2]}");
  print("fruit4 : ${fruits[3]}");
  print("fruit4 : ${fruits[4]}");
  print("fruit5 : ${fruits[5]}");
// maps are used to show the value of a key and an element. the key points to an item
  Map<String, int> students = {
    "Lynn": 2027,
    "june": 1027,
    "Dylan": 3546,
    "lowkey": 4568
  };
  print("names Student ID; $students");

  //runes, are intergers used to represent any unicode code point
  //they can also be reffered to as emojis

  String runesString = "Runes in dart: \u{1F600} \u{1F64B} \u{1F679}";
  print(runesString);
}
