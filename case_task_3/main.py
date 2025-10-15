import random

numbers = []

while True:
    num = random.randint(1, 100)
    print(f'Сгенерировано число: {num}')
    numbers.append(num)

    while True:
        user_input = input('Введите 0 для остановки или любое другое число для продолжения: ')
        try:
            user_input_int = int(user_input)
            break
        except ValueError:
            print('Ошибка: введите корректное число.')

    if user_input_int == 0:
        break

print('Сгенерированные числа (кроме последнего):')
for number in numbers[:-1]:
    print(number)
