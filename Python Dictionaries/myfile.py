
#name1 = raw_input("Enter name1: ")
#name2 = raw_input("Enter name2: ")
#name3 = raw_input("Enter name3: ")

#print ("The three students are: ")
#print (name1 + "\n" + name2 + "\n" + name3)

#lists
students = ["Alice", "Becky", "Jorge"]
print(students)
print(students[2])

favBooks = ["book1", "book2", "book3", "book4"]
print favBooks


#append method
favBooks.append("book5")
print favBooks

#insert method
favBooks.insert(1, "newbook2")
print favBooks

#remove method

favBooks.remove("book1") # =>  newbook2 "book2", "book3", "book4 book5"
print favBooks

# length method
print (len(favBooks)) # =>5


#index method
print (favBooks.index("newbook2")) # => 0



smith_siblings = ["Emily", "Monique", "Giovanni"]
for name in smith_siblings:
    print(name + " Smith")

#example with accessing index
smith_siblings = ["Emily", "Monique", "Giovanni", "Brianna", "Javi"]
for index in range(len(smith_siblings)):
    smith_siblings[index] = smith_siblings[index] + " Smith"

print(smith_siblings)

#more complex example using conditionals
names = ["Rickon", "Bran", "Arya", "Sansa", "Jon", "Robb"]
for i in range(len(names)):
    if names[i] == "Jon":
        names[i] = names[i] + " Snow"
    else:
        names[i] = names[i] + " Stark"

print(names)


#dictionary
states = {
  "NY": "Newark",
  "CA": "California",
  "TX": "Texas"
}

print(states)  # NY is not Newark!

states["NY"] = "New York"

print(states)  # much better

states.update({"FL" : "Florida"})
print(states)

states = {
  "NY": "New York",
  "CA": "California",
  "TX": "Texas"
}

for state in states:
    print(state)

for state in states:
    print(state + " is short for " + states[state])


#single entity
pet = {
  "name": "Ein",
  "animal": "dog",
  "species": "Corgi",
  "age": 5
}
#updating
pet["age"] = 10;
print pet["age"]


pets = [
  {
    "name": "Scooby",
    "animal": "dog",
    "species": "laborador",
    "age": 5
  },
  {
    "name": "Klaus",
    "animal": "fish",
    "species": "goldfish",
    "age": 1
  },
  {
    "name": "Garfield",
    "animal": "cat",
    "species": "tabby",
    "age": 3
  }
]

print(pets[1]["species"])

#updating nested dictionary
pets[1]["age"] = pets[1]["age"] + 1;
print pets[1]["age"] # => 2
