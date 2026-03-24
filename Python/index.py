
# AND, OR and NOT operators 
high_income = False
good_credit = True
student = True

if (high_income or good_credit) and not student:
    print('Eligible')
else:
    print('Not eligible')