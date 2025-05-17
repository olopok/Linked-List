import LinkedList from "./linkedlist-ds.js";

const newList = new LinkedList();

newList.append("gatto");
newList.append(40);
newList.append(50);
console.log(
  "This are the values of all the node in the list after append method:",
  newList.toString()
);
newList.prepend("gatto");
newList.prepend(40);
newList.prepend(50);
console.log(
  "This are the values of all the node in the list after prepend method:",
  newList.toString()
);
console.log("This is the size of the linked list:", newList.size);
console.log("This is the value of the Head node on the list:", newList.first);
console.log(
  "This is the value of the Tail Node in the list:",
  newList.tail(newList.size)
);
console.log(
  "This is the value at the specified index (index start with 0):",
  newList.at(3)
);
newList.pop();
console.log(
  "All nodes in the list after removing the last:",
  newList.toString()
);
console.log(
  "Return true if the node contains the passed in value, return false if not:",
  newList.contains("gatto")
);
console.log(
  "Return the index of the value passed in, otherwise return null:",
  newList.find(40)
);
newList.insertAt(35, 3)
console.log('This is the list after insertAt() method:', newList.toString())
newList.removeAt(3)
console.log('This is the list after removeAt() method:', newList.toString())