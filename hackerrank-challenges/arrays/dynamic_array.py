# https://www.hackerrank.com/challenges/dynamic-array/problem

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'dynamicArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries


def dynamicArray(n, queries):
    seqList = [[] for i in range(n)] 
    lastAnswer = 0
    response = []
    for query in queries:
        seq = (query[1] ^ lastAnswer) % n
        if query[0] == 1:
            seqList[seq].append(query[2])
        else:
            lastAnswer = seqList[seq][query[2] % len(seqList[seq])]
            response.append(lastAnswer)
    return response

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    q = int(first_multiple_input[1])

    queries = []

    for _ in range(q):
        queries.append(list(map(int, input().rstrip().split())))

    result = dynamicArray(n, queries)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
