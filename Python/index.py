
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