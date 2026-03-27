
# AND, OR and NOT operators 
high_income = False
good_credit = True
student = True

if (high_income or good_credit) and not student:
    print('Eligible')
else:
    print('Not eligible')
print('\n')

# age should be between 18 and 65
age = 22
if 18 <= age < 65:
    print('eligible')

for x in range(5):
    for y in range(3):
        print(x , y)
print('\n')

count = 0
for x in range(1, 10):
    if x % 2 == 0:
        count += 1
        print(x)
print(f'We have {count} even numbers')
print('\n')

def greet(firstName, lastName):
    print(f'Hi {firstName} {lastName}')
    print('Welcome aboard')
    return '...'
    

print(greet('Jeff', 'Quaye'))
print('\n')

def increment(number, by = 1):
    return number + by

print(increment(5, 7))
print('\n')


def multiply(*numbers):
    total = 1
    for number in numbers:
        total *= number
    return total


print('Start')
print(multiply(5, 6, 7))
print('\n')


def save_user(**user):
    print(user)
    
save_user(id = 11220829, name = 'Jefferson Quaye', level = 400)
print('\n')


# THE FIZZBUZZ PROGRAM
print('THE FIZZBUZZ PROGRAM')
def fizz_buzz(input):
    if input % 3 == 0 and input % 5 == 0:
        return 'FizzBuzz'
    elif input % 3 == 0:
        return 'Fizz'
    elif input % 5 == 0:
        return 'Buzz'
    return input
        
        
print(fizz_buzz(8))
print('\n')


# DSA
print('DSAs')
print('List')
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for index, number in enumerate(numbers):
    print(index, number)
print('\n')    
    

print('ADDING AND REMOVING FROM A LIST')
letters = ['a', 'b', 'c', 'e', 'f', 'g', 'h',]
print(letters)
print('\n')

#Add
print('Addint to a list')
letters.append('d')
print(letters)
letters.insert(0, '-')
print(letters)

#Remove
print('Removing from a list')
letters.pop()
print(letters)
letters.remove('b')
print(letters)
del letters[0:3]
print(letters)
letters.clear()
print(letters)
print('\n')

#Checking for items
print('Finding Items')
letters1 = ['a', 'b', 'c']
print(letters1.count('d'))
if 'd' in letters1:
    print(letters1,index('d'))
print('\n')


#Sorting List
print('Sorting list')
numbers1 = [3, 51, 2, 8, 6]

sort = sorted(numbers1, reverse=True)
print(sort, '\n' , numbers1)

items =[
    ('Product 1', 10),
    ('Product 2', 9),
    ('Product 3', 11)
]

# items.sort(key=lambda item:item[1])
# print(items)

# prices = list(map(lambda item:item[1], items))
prices = [item[1] for item in items]
print(prices)

filtered = list(filter(lambda item: item[1] >= 10, items))

print(filtered)

list1 = [1, 2, 3,]
list2 = [10, 20, 30]

allList = list(zip(list1, list2))
print(allList)