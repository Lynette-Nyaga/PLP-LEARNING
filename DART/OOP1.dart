// Define an abstract class (interface)
abstract class Animal {
  void speak();
}

// Create a subclass (Dog) that inherits from Animal
class Dog extends Animal {
  String name;

  Dog(this.name);

  @override
  void speak() {
    print('$name says woof!');
  }
}

void main() {
  // Create an instance of Dog
  var myDog = Dog('Bosco');
  myDog.speak(); // Output: "Buddy says woof!"

  // Create an array of Animal objects
  var animals = [
    Dog('Murphuy'),
    Dog('Janecy'),
    Dog('Ricky'),
  ];

  // Use a for loop to call the speak() method for each animal
  for (var animal in animals) {
    animal.speak();
  }
}
