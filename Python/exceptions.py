# How to Handle Exceptions
# try:
#     file = open('index.py')
#     age = int(input('Age: '))
#     xfactor = 10 / age
# except (ValueError, ZeroDivisionError):
#     print('You didn\'t enter a valid age.')
# else:
#     print(f'You are {age} years old.')
# finally:
#     file.close()
    
# Raising Exceptions
from timeit import timeit

code1 = '''
def calculate_xfactor(age):
    if age <= 0:
        raise ValueError('Age cannot be zero or less.')
    return 10 / age

try:
    calculate_xfactor(-1)
except ValueError as error:
    pass
'''

code2 = '''
def calculate_xfactor(age):
    if age <= 0:
        return None
    return 10 / age

xfacttor = calculate_xfactor(-1)
if xfacttor is None:
    pass
'''
print('first code =', timeit(code1, number=10000))
print('second code =', timeit(code2, number=10000))