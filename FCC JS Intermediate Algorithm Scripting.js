// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  let min,
    max,
    sum = 0;

  arr[0] > arr[1]
    ? ((min = arr[1]), (max = arr[0]))
    : ((min = arr[0]), (max = arr[1]));

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

//   Intermediate Algorithm Scripting: Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(el => arr1.indexOf(el) == -1 || arr2.indexOf(el) == -1);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 4, 5]));

// Intermediate Algorithm Scripting: Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(...args) {
  // Remove all the values
  let array = args[0].slice();
  for (let i = 1; i < args.length; i++) {
    let elIndex = array.indexOf(args[i]);
    while (elIndex !== -1) {
      array.splice(elIndex, 1);
      elIndex = array.indexOf(args[i]);
    }
  }
  return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Intermediate Algorithm Scripting: Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
//  because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  let propArr = Object.getOwnPropertyNames(source);
  let resultArr = [];
  for (let i = 0; i < collection.length; i++) {
    let hasAllMatchingProps = true;
    for (let j = 0; j < propArr.length; j++) {
      if (
        !collection[i].hasOwnProperty(propArr[j]) ||
        collection[i][propArr[j]] != source[propArr[j]]
      ) {
        hasAllMatchingProps = false;
        break;
      }
    }
    if (hasAllMatchingProps) {
      resultArr.push(collection[i]);
    }
  }
  return resultArr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
