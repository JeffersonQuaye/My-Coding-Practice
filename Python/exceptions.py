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
def calculate_xfactor(age):
    if age <= 0:
        raise ValueError('Age cannot be zero or less.')
    return 10 / age

calculate_xfactor(-1)