
# # AND, OR and NOT operators 
# high_income = False
# good_credit = True
# student = True

# if (high_income or good_credit) and not student:
#     print('Eligible')
# else:
#     print('Not eligible')
# print('\n')

# # age should be between 18 and 65
# age = 22
# if 18 <= age < 65:
#     print('eligible')

# for x in range(5):
#     for y in range(3):
#         print(x , y)
# print('\n')

# count = 0
# for x in range(1, 10):
#     if x % 2 == 0:
#         count += 1
#         print(x)
# print(f'We have {count} even numbers')
# print('\n')

# def greet(firstName, lastName):
#     print(f'Hi {firstName} {lastName}')
#     print('Welcome aboard')
#     return '...'
    

# print(greet('Jeff', 'Quaye'))
# print('\n')

# def increment(number, by = 1):
#     return number + by

# print(increment(5, 7))
# print('\n')


# def multiply(*numbers):
#     total = 1
#     for number in numbers:
#         total *= number
#     return total


# print('Start')
# print(multiply(5, 6, 7))
# print('\n')


# def save_user(**user):
#     print(user)
    
# save_user(id = 11220829, name = 'Jefferson Quaye', level = 400)
# print('\n')


# # THE FIZZBUZZ PROGRAM
# print('THE FIZZBUZZ PROGRAM')
# def fizz_buzz(input):
#     if input % 3 == 0 and input % 5 == 0:
#         return 'FizzBuzz'
#     elif input % 3 == 0:
#         return 'Fizz'
#     elif input % 5 == 0:
#         return 'Buzz'
#     return input
        
        
# print(fizz_buzz(8))
# print('\n')


# # DSA
# print('DSAs')
# print('List')
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# for index, number in enumerate(numbers):
#     print(index, number)
# print('\n')    
    

# print('ADDING AND REMOVING FROM A LIST')
# letters = ['a', 'b', 'c', 'e', 'f', 'g', 'h',]
# print(letters)
# print('\n')

# #Add
# print('Addint to a list')
# letters.append('d')
# print(letters)
# letters.insert(0, '-')
# print(letters)

# #Remove
# print('Removing from a list')
# letters.pop()
# print(letters)
# letters.remove('b')
# print(letters)
# del letters[0:3]
# print(letters)
# letters.clear()
# print(letters)
# print('\n')

# #Checking for items
# print('Finding Items')
# letters1 = ['a', 'b', 'c']
# print(letters1.count('d'))
# if 'd' in letters1:
#     print(letters1,index('d'))
# print('\n')


# #Sorting List
# print('Sorting list')
# numbers1 = [3, 51, 2, 8, 6]

# sort = sorted(numbers1, reverse=True)
# print(sort, '\n' , numbers1)

# items =[
#     ('Product 1', 10),
#     ('Product 2', 9),
#     ('Product 3', 11)
# ]

# # items.sort(key=lambda item:item[1])
# # print(items)

# # prices = list(map(lambda item:item[1], items))
# prices = [item[1] for item in items]
# print(prices)

# filtered = list(filter(lambda item: item[1] >= 10, items))

# print(filtered)

# list1 = [1, 2, 3,]
# list2 = [10, 20, 30]

# allList = list(zip(list1, list2))
# print(allList)

# from collections import deque

# queue = deque([])
# queue.append(1)
# queue.append(2)
# queue.append(3)
# queue.popleft()
# print(queue)

# print('\n')

# # ARRAYS
# print('Arrays')
# from array import array

# numbers2 = array('i', [1, 2, 3])
# print(numbers2)
# print('\n')

# # SETS
# print("Sets")
# numbers3 = [1, 1, 2, 3, 4]
# first = set(numbers3)
# second = {1, 5}

# print(first | second)
# print(first & second)
# print(first - second)
# print(second ^ first)
# print('\n')

# # DICTIONARIES
# print('Dictionaries')
# point = dict(x=1, y=2)
# point['x'] = 10
# point["z"] = 20
# print(point)
# del point['z']
# print(point)

# values = (x * 2 for x in range(5))
# print(values)

# values1 = list(range(5))
# print(*values1)
# print('\n')

# # Exercise
# print('Exercise')
# from pprint import pprint

# sentence = 'This is a common interview question'

# char_frequency = {}

# for char in sentence:
#     if char in char_frequency:
#         char_frequency[char] += 1
#     else:
#         char_frequency[char] = 1

# char_frequency_sorted = sorted(char_frequency.items(), key=lambda kv:kv[1], reverse=True)
# print(char_frequency_sorted[0])


# from importlib.resources import path
# from pathlib import Path
# from zipfile import ZipFile

# with ZipFile('files.zip', 'w') as zip:
#     for path in Path('ecom').rglob('*.*'):
#         zip.write(path)

# with ZipFile('files.zip') as zip:
#     print(zip.namelist())
#     zip.extractall('extract')

# path.exists()
# path.mkdir()
# path.rmdir()
# path.rename()

# METHODS FOR PATH FILES
# path.exists() # checks if the file exists
# path.rename('init.txt') # renames the file
# path.unlink() # delete the file
# path.stat() # gives us the details of the file such as size, creation time, last modified time, etc.
# path.read_bytes() # reads the file as bytes or binary data
# path.read_text() # reads the file as text or string
# path.write_text('This is a test') # writes text to the file
# path.write_bytes() writes bytes to the file

# import csv

# with open('data.csv',) as file:
#     reader = csv.reader(file)
#     list = list(reader)
#     print(list)


# import json
# from pathlib import Path

# data = Path('movies.json').read_text()
# movies = json.loads(data)
# print(movies[1]['title'])


# import sqlite3
# import json
# from pathlib import Path


# with sqlite3.connect('db.sqlite3') as conn:    
#     command = 'SELECT * FROM Movies'
#     cursor = conn.execute(command)
#     for row in cursor:
#         print(row)


# import time

# def send_email():
#     for i in range(10000):
#         pass
    
# start = time.time()
# send_email()
# end = time.time()
# duration  = end - start
# print(duration)


from datetime import datetime

dt = datetime(2018, 1, 1)
print(dt)
print(dt.year)
print(dt.month)
print(datetime.now())