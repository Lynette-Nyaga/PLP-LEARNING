// ignore_for_file: public_member_api_docs, sort_constructors_first

class Student {
  final String name;
  final int Age;
  final double weight;

  Student({
    required this.name,
    required this.Age,
    required this.weight,
  });

  void main(){
    final student1 = Student(Age: 40,name: "lynn", weight: 65.7);
    final student2 = Student(Age: 20,name: "brian", weight: 45.6);
  print(student1. name);
  print(student2.name);
  }
}
