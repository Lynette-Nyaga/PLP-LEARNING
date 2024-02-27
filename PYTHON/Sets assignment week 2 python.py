Age= int(input("How old are you?: "))
Score=int(input("What was your score in science?: "))
Score2= int(input("What did you score in mathematics?: "))
Score3 = int(input("What was your pyschology score?: "))
Student1 = {Age,Score,Score2,Score3}
print(Student1)

Age1=int(input("How old are you?; "))
Height= int(input("How tall are you? "))
Distance= int(input("How long did you walk?: "))
Time= int(input("How long did it take?: "))
Student2={Age1,Height,Distance,Time}
print(Student2)

Common_elements=(Student1.intersection(Student2))

print("Intersection:",Common_elements)