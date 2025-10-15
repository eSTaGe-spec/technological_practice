import random

numbers = []

while True:
    num = random.randint(1, 100)
    print(f'Сгенерировано число: {num}')
    numbers.append(num)
    user_input = int(input('Введите 0 для остановки или любое другое число для продолжения: '))
    if user_input == 0:
        break

print('Сгенерированные числа (кроме последнего):')
for number in numbers[:-1]:
    print(number)
