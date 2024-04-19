class Student {
  String name;
  int age;
  String gradeLevel;

  Student(this.name, this.age, this.gradeLevel);

  void printInfo() {
    print("Student Name: $name");
    print("Age: $age");
    print("Grade Level: $gradeLevel");
  }
}

class Teacher {
  String name;
  int age;
  String subject;

  Teacher(this.name, this.age, this.subject);

  void printInfo() {
    print("Teacher Name: $name");
    print("Age: $age");
    print("Subject: $subject");
  }
}

class School {
  void displayInfo() {
    final student = Student("Alice", 15, "10th grade");
    final teacher = Teacher("Mr. Allan ", 35, "dart");

    print("Student Information:");
    student.printInfo();
    print("\nTeacher Information:");
    teacher.printInfo();
  }
}

void main() {
  final school = School();
  school.displayInfo();
}
