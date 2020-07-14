# https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

#!/bin/python3

import math
import os
import random
import re
import sys

class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

def print_singly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

# Complete the insertNodeAtHead function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def insertNodeAtHead(llist, data):

    new_node = SinglyLinkedListNode(data)
    if llist is None:
        # llist = new_node
        return new_node
    # else:
    new_node.next = llist
    llist = new_node
    return llist

if __name__ == '__main__':