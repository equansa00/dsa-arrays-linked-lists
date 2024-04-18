class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals) this.push(val);
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) throw new Error("List is empty");
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head) throw new Error("List is empty");
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead.val;
  }

  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
    let counter = 0;
    let node = this.head;
    while (counter !== idx) {
      node = node.next;
      counter++;
    }
    return node.val;
  }

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
    let node = this.head;
    let counter = 0;
    while (counter !== idx) {
      node = node.next;
      counter++;
    }
    node.val = val;
  }

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Index is invalid");
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    let previous = this.head;
    let counter = 0;

    while (counter !== idx - 1) {
      previous = previous.next;
      counter++;
    }
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
  }

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let previous = this.head;
    let counter = 0;
    while (counter !== idx - 1) {
      previous = previous.next;
      counter++;
    }
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed.val;
  }

  average() {
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    return this.length > 0 ? total / this.length : 0;
  }
}

module.exports = LinkedList;
