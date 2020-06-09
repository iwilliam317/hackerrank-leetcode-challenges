strings = ['aba','baba', 'aba','xzxb']
result = []
queries = ['aba','xzxb','ab']


hashd = {}
for i in queries:
    hashd[str(i)] = 0
print(hashd)
for q in strings:
    if q in hashd:
        hashd[q] = hashd[q]+1
for k in queries:
    print(hashd[k])
