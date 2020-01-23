#COUNT SPACE FUNCTION
def count_spaces(s):
    return s.count(" ") #returns the number of spaces in a string

print(count_spaces("hello world!"))  # => 1
print(count_spaces("wow wow wow "))  # => 3
print("Next Function")

# LONGEST WORD FUNCTION
def longest_word(word1, word2, word3):
    words = [word1, word2, word3] #Adds all three of the strings to a list
    longestword = word1 #sets the longestword to the first element in the list 
    for word in words: #loops through all of the words in the array
        if len(word) > len(longestword): #if you find a word with a length longer than the current longestword, set that new word to longestword
            longestword = word
    return longestword #return the longest word

print longest_word("hello", "bye", "caterpillar") # => caterpillar
print longest_word("wordnumberone", "longerthanallofyou", "short") # => longer
print longest_word("yepyep", "hi", "bye") # => yepyep
print("Next Function")


#REVERSE STRING FUNCTION
def reverse_string(word):
    new_string = ""; #Creates an empty string variable
    for letters in word:
        new_string = letters + new_string #Loop keeps adding each letter in the parameter string to the end of new_string, thus reversing the order of the parameter string
    return new_string

print reverse_string("Hello") # => "olleH"
print("Next Function")

#SUM_TO_N FUNCTION
def sum_to_n(number):
    sum = 0;
    for numbers in range(number+1): #For loop to go all the way to our parameter number (inclusive - which is why we add one to our number. since the range function is exclusive)
        sum = sum + numbers; 
    return sum;

print sum_to_n(4) # => 10
print sum_to_n(5) #= 15
print("Next Function")


#IS TRIANGLE FUNCTION
#all triangles must satisfy the property of having the sum of two sides being larger than the third side

def is_triangle(s1, s2, s3):
   
    sides_array = [s1, s2, s3] #Adds all of the sides to a list
    largest_side = max(sides_array) #Gets the largest side of the triangle
    sides_array.remove(largest_side) #Removes the largest side from the list

    if sides_array[0] + sides_array[1] > largest_side: #the two sides are bigger than the third one, therefore it is a triangle so return true
        return True
    else:                                              #otherwise it is not a triangle, return false
        return False

print is_triangle(1, 1, 1) #equilateral triangle - true
print is_triangle(5, 5, 3) #isoceles triangle - true
print is_triangle(5, 4, 3) #right triangle - true
print is_triangle(3, 4, 8) #false
print is_triangle(3, 4, 7) #false
print is_triangle(3, 4, 6) #true, scalene triangle


#ROLL DICE FUNCTION
import random
def roll_dice(number): #number represents how many die to roll
    sum = 0;
    for numbers in range(number):
        sum = sum + random.randint(1, 6)
    return sum

for i in range(10):
    print(roll_dice(2))
print("Next Function")

#IS_PRIME FUNCTION
def is_prime(number):
    if (number > 0):
        if number == 1: #1 is not prime
            return False
        elif number == 2: #2 is prime
            return True
        elif number % 2 == 0: #anything divisible by 2 except 2 is not prime
            return False
        else:
            return True #passed all tests, is prime
    else:
        return False

print is_prime(1) #false
print is_prime(2) # true
print is_prime(4) # false
print is_prime(7) # true
print is_prime(109) #true
print is_prime(-5) # false

print("Next Function")

#SNAKE - returns any input variable written in snake case (in_this_format)
def snake_case(word):
    for letter in word: 
        if letter == letter.upper(): #for loop finds an uppercase letter which indicates a new word in camel case format)
            word = word.replace(letter, "_" + letter.lower()) #replaces that letter with an underscore in addition to the letter now being lowercase)
    return word

print(snake_case("camelCase")) # => camel_case
print(snake_case("camelCaseTestTwo")) # => camel_case_test_two
print(snake_case("already_snake_case")) # => already_snake_case
print("Next Function")


