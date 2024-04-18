# Linked List Exercises

This repository contains exercises related to linked lists. The starter code includes a `Node` class and a `LinkedList` class. You are required to implement several methods for the `LinkedList` class.

## Getting Started

Download the starter code from this repository.

## Tasks

Here are the methods you need to implement for the `LinkedList` class:

- `push(val)`: Appends a new node with value `val` to the tail. Returns undefined.
- `unshift(val)`: Adds a new node with value `val` to the head. Returns undefined.
- `pop()`: Removes and returns the tail value. Throws an error if the list is empty.
- `shift()`: Removes and returns the head value. Throws an error if the list is empty.
- `getAt(idx)`: Retrieves the value at index position `idx`. Throws an error if the index is invalid.
- `setAt(idx, val)`: Sets the value of the node at index position `idx` to `val`. Throws an error if the index is invalid.
- `insertAt(idx, val)`: Inserts a new node at position `idx` with value `val`. Throws an error if the index is invalid. Returns undefined.
- `removeAt(idx)`: Removes and returns the value at position `idx`. Throws an error if the index is invalid.

Make sure to handle edge cases such as items being at the start, middle, or end of the list, as well as handling empty lists.

## Challenges

- **Average of List**: Given a linked list containing numbers, return the average of those numbers.
- **Doubly Linked Lists**: Implement a class for DoublyLinkedList with the same methods as above.
- **Reverse In Place**: Write a function that reverses a linked list in place.
- **Sort Sorted Linked Lists**: Write a function that is passed two linked lists, both of which are already sorted, and returns a new linked list in sorted order.
- **Pivot Around Value**: Rearrange the items in the linked list so that all items with data less than the given value are in the first half, and items with greater than or equal to the given value are in the second half.
- **Circular Arrays**: Create a “circular array” where the end wraps around to the beginning.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)