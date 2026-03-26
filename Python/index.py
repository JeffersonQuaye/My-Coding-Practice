
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

def fizz_buzz(input):
    if input % 3 == 0 and input % 5 == 0:
        return 'FizzBuzz'
    elif input % 3 == 0:
        return 'Fizz'
    elif input % 5 == 0:
        return 'Buzz'
    return input
        
        
print(fizz_buzz(8))