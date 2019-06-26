/*
Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].reduce((biggest, current) => {
        if (current > biggest) {
          return current;
        } else {
          return biggest;
        }
      });
    }
    // You can do this!
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  /*
    Basic Algorithm Scripting: Finders Keepers

    Create a function that looks through an array (first argument) and returns the first element in the array
    that passes a truth test (second argument). If no element passes the test, return undefined.
  */

 function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  /*
    Basic Algorithm Scripting: Title Case a Sentence

    Return the provided string with the first letter of each word capitalized. 
    Make sure the rest of the word is in lower case.
    For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".      
  */

  function titleCase(str) {
    let arrOfWords = str.toLowerCase().split(' ');
    for (let i = 0; i < arrOfWords.length; i++) {
      arrOfWords[i] = arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1);
    }
    return arrOfWords.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));


  /*
    Basic Algorithm Scripting: Slice and Splice

    You are given two arrays and an index.

    Use the array methods slice and splice to copy each element of the first array into the second array, in order.

    Begin inserting elements at index n of the second array.

    Return the resulting array. The input arrays should remain the same after the function runs.
  */

  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let combinedArr = [...arr2];
    for (let i = 0; i < arr1.length; i++) {
      combinedArr.splice(n+i,0,arr1[i]);
    }
    return combinedArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);


  /*
    Basic Algorithm Scripting: Where do I Belong

  Return the lowest index at which a value (second argument) should be inserted into an array 
  (first argument) once it has been sorted. The returned value should be a number.

  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
  but less than 2 (index 1).

  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted 
  it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

  */

 function getIndexToIns(paramArr, num) {
    // Find my place in this sorted array.
    let arr = [...paramArr];
    arr.push(num);
    // simple bubble sort
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    }
  
    return arr.findIndex(el => el == num);
  }
  
  getIndexToIns([40, 60], 50);