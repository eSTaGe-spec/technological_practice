N = int(input('Введите размер массива N: '))

A = []
summ = 0
count = 0

for i in range(N):
    element = int(input(f'Введите элемент A[{i}]: '))
    A.append(element)
    if element > 0:
        summ += element
        count += 1

print('Сумма положительных элементов:', summ)
print('Количество положительных элементов:', count)
