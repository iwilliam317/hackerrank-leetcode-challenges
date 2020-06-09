#!/bin/python3
# https://www.hackerrank.com/challenges/2d-array/problem
import math
import os
import random
import re
import sys

# Complete the hourglassSum function below.
def hourglassSum(m):
    result = []
    for i in range(1, 5):
        for j in range(1, 5):
            current = (
                m[i-1][j-1] + 
                m[i-1][j] + 
                m[i-1][j+1] +
                m[i][j] + 
                m[i+1][j-1] +
                m[i+1][j] +
                m[i+1][j+1]
            )
            result.append(current)
    return max(result)
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
