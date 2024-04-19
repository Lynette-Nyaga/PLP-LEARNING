import os
# I HAD TO COMMENT THE CODES OUT TO AVOID REPETITIONS AND ERRORS, I HOPE ITS OKAY.

#STEP 1

'''file = open("My_file.txt", "w")
file.write("hello lynette\n")
file.write("How is your day?\n")
file.write("How is Python taking you. how would you rate it in a scale of 1 to 10?\n")
file.close'''

#STEP 2   
'''file=open("my_file.txt","r")
file_content=file.read()
print(file_content)
file.close'''


#STEP3
'''file=open("my_file.txt", "a")
file.write("I am sure Python is the best programming language\n")
file.write("I just hope what i am doing here is appending and not writting, hahaha!")
file.close'''

#STEP 4
   
'''try:
    with open("my_file.txt") as file:
        print(file.read())
    
except FileNotFoundError:
    print("File Not Found()")'''