const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

// create a function that reverses a string
function reverse(str) {
  if (!str || typeof str !== "string") return new Error("Not a valid input.");
  const splitStr = str.split("");
  const reversedButSplit = splitStr.reverse();
  const reversedStr = reversedButSplit.join("");
  return reversedStr;
}
// you can also do it as a loop and access each character of a string with str[index]

// merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeSortedArrays2(arr1, arr2) {
  let sortedArray = [];
  for (let i =0; i <)
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// building our own array - not very important
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

const newArray = new myArray();
