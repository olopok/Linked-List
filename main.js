import LinkedList from "./linkedlist-ds.js";

const newList = new LinkedList();

newList.append("gatto");
newList.append(40);
newList.append(50);
// console.log(
//   "This are the values of all the node in the list:",
//   newList.toString()
// );
newList.prepend("gatto");
newList.prepend(40);
newList.prepend(50);
console.log(newList.toString());
console.log("This is the size of the linked list:", newList.size);
console.log("This is the value of the Head node on the list:", newList.first);
console.log(
  "This is the value of the Tail Node in the list:",
  newList.tail(newList.size)
);
