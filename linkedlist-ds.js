export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  toString() {
    let stringList = "";
    let currentNode = this.head;

    while (currentNode) {
      stringList += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    stringList += null;
    return stringList;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  get size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  get first() {
    // let firstNode;
    // if (this.head !== null) {
    //   firstNode = this.head;
    // }
    // return  firstNode.value;
    return this.head.value;
  }

  tail(value) {
    const length = value;
    let last = this.head;
    if (last.next === null) {
      return last;
    } else {
      let currentNode = last.next;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
        last = currentNode;
      }
      return last.value;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
