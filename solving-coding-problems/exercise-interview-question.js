// given 2 arrays
// if common item between arrays return true
// else return false

// for each O(a*b) - also no shortcircuit from loops
function compareArraysForEach(arrayOne, arrayTwo) {
  let isCommon = false;
  arrayOne.forEach(valOne => {
    arrayTwo.forEach(valTwo => {
      if (valOne === valTwo) isCommon = true;
    });
  });
  return isCommon;
}

// still O(a*b) - but shortcircuits
function compareArraysForOf(arrayOne, arrayTwo) {
  for (let valOne of arrayOne) {
    for (let valTwo of arrayTwo) {
      if (valOne === valTwo) return true;
    }
  }
  return false;
}

// using for...of & array.some

function compareArraysSome(arrayOne, arrayTwo) {
  for (let val of arrayOne) {
    if (
      arrayTwo.some(someVal => {
        if (someVal === val) return true;
      })
    )
      return true;
  }
  return false;
}


// simplified js version - O(a*b) time complexity
// space complexity - O(1)

compareArraysSomeIncludes(arrayOne, arrayTwo) {
  return arrayOne.some(item => arrayTwo.includes(item));
}



// hash table from first array - check with 2nd
// O(a+b) - time complexity
// O(a) - space complesxity - because making an object from array
// others are O(1) space complexity

function compareArraysHashTable(arrayOne, arrayTwo) {
  // turn first array into an hash table object
  const hashed = arrayOne.reduce((acc, val) => {
    return { ...acc, [val]: true };
  }, {});

  // check second array items if contained in hash table
  for (let val of arrayTwo) {
    if (hashed.hasOwnProperty(val)) return true;
  }
  return false;
}
