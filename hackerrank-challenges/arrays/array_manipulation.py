n = 5
# # queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]
queries = [[1, 2, 100]]
# # [0,0,0,0,0]
arr = [0 for i in range(n+1)]
# t = 0
for i in queries:

    for j in range(i[0], i[1]+1):
        arr[j] = arr[j] + i[2]

# print(max(arr))

print(arr)

