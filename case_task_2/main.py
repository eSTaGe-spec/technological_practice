N = int(input('Введите размер массива N: '))
B = int(input('Введите число B: '))

A = []
count_greater = 0
product_greater = 1

for i in range(N):
    element = int(input(f'Введите элемент A[{i}]: '))
    A.append(element)
    if element > B:
        count_greater += 1
        product_greater *= element

if count_greater == 0:
    product_greater = 0

print('Количество элементов больше B:', count_greater)
print('Произведение элементов больше B:', product_greater)
