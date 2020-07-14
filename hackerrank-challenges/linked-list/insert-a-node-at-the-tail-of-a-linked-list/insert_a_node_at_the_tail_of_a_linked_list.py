# https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem



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

def print_singly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

# Complete the insertNodeAtTail function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#


def insertNodeAtTail(head, data):
    new_node = SinglyLinkedListNode(data)
    if head is None:
        head = new_node
        return head

    current_node = head
    while current_node.next:
        current_node = current_node.next
    current_node.next = new_node
    return head


if __name__ == '__main__':