# https://www.hackerrank.com/challenges/sparse-arrays/problem

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the matchingStrings function below.
def matchingStrings(strings, queries):
    # OPTION 1 - BUILT IN SOLUTION
    my_strings = strings
    result = []


    for i in range(len(queries)):
        result.append(my_strings.count(queries[i]))

    return result

    #  OPTION 2 - MANUAL LOOP 
    # my_strings = strings
    # result = []
    # for i in range(len(queries)):
    #     count = 0
    #     for j in range(len(strings)):
    #         if queries[i] == strings[j]:
    #             count += 1
    #     result.append(count)
    # return result

    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    strings_count = int(input())

    strings = []

    for _ in range(strings_count):
        strings_item = input()
        strings.append(strings_item)

    queries_count = int(input())

    queries = []

    for _ in range(queries_count):
        queries_item = input()
        queries.append(queries_item)

    res = matchingStrings(strings, queries)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()

