// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1) -- some consider declaration in big o calc and some don't
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1) - some don't count this either
}
// BIG O(3 + 4n) -- simplied to O(n)
// O(n) - linear time - runs loop for each item inside input

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }

  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }

  let whoAmI = "I don't know";
}

// BIG O(4 + 7n) or BIG O(n)
