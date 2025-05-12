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
    newNode.next = this.head
    this.head = newNode
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
