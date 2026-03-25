
# AND, OR and NOT operators 
high_income = False
good_credit = True
student = True

if (high_income or good_credit) and not student:
    print('Eligible')
else:
    print('Not eligible')
    

# age should be between 18 and 65

age = 22
if 18 <= age < 65:
    print('eligible')

for x in range(5):
    for y in range(3):
        print(x , y)
    
count = 0
for x in range(1, 10):
    if x % 2 == 0:
        count += 1
        print(x)
print(f'We have {count} even numbers')

def greet(firstName, lastName):
    print(f'Hi {firstName} {lastName}')
    print('Welcome aboard')
    return '...'
    

print(greet('Jeff', 'Quaye'))

def increment(number, by = 1):
    return number + by

print(increment(5, 7))

def multiply(x, y):
    return x * y

print(multiply(5, 6))