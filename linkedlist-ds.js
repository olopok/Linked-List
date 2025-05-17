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

  at(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode.value;
      } else currentNode = currentNode.next;
      count++;
    }
  }

  pop() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.next === null) {
        currentNode.next = null;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode !== value && currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }
  }

  find(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      } else if (currentNode.value !== value && currentNode.next === null)
        return null;
      currentNode = currentNode.next;
      count++;
    }
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count == index - 1) {
        newNode.next = currentNode.next.next;
        currentNode.next = newNode;
      } else {
        currentNode = currentNode.next;
      }
      count++;
    }
  }

  removeAt(index) {

    
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode && count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }

    if (currentNode && currentNode.next) {
      currentNode.next = currentNode.next.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
