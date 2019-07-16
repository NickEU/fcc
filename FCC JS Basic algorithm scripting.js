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

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

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
  let arrOfWords = str.toLowerCase().split(" ");
  for (let i = 0; i < arrOfWords.length; i++) {
    arrOfWords[i] = arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1);
  }
  return arrOfWords.join(" ");
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
    combinedArr.splice(n + i, 0, arr1[i]);
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

/*
    Basic Algorithm Scripting: Mutations

    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
    For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
    Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
  */

function mutation(arr) {
  let source = arr[0].toLowerCase();
  let condition = arr[1].toLowerCase().split("");

  for (let i = 0; i < condition.length; i++) {
    if (source.indexOf(condition[i]) == -1) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["helLo", "he"]));

/*
Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let resultArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let tempArr = [];
    for (let j = 0; j < size && i + j < arr.length; j++) {
      tempArr.push(arr[i + j]);
    }
    resultArr.push(tempArr);
  }
  return resultArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*
Functional Programming: Use the reduce Method to Analyze Data

Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript.
You can solve almost any array processing problem using the reduce method.

This is not the case with the filter and map methods since they do not allow interaction between
two different elements of the array. For example, if you want to compare elements of the array,
or add them together, filter or map could not process that.

The reduce method allows for more general forms of array processing, and it's possible to show that both
filter and map can be derived as a special application of reduce.

However, before we get there, let's practice using reduce first.

The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

*/

// the global variable
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True"
  }
];

// Add your code below this line
let filteredArr = watchList.filter(
  item => item.Director == "Christopher Nolan"
);
let ratingsArr = filteredArr.map(movie => parseFloat(movie.imdbRating));
let averageRating =
  ratingsArr.reduce((acc, cur) => (acc += cur)) / ratingsArr.length;

// Add your code above this line

console.log(averageRating);

/*



// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
// The function should return a new array, and not mutate the globalArray variable.


*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return arr.concat([]).sort((a, b) => a - b);

  // Add your code above this line
}
nonMutatingSort(globalArray);

/*

Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces


*/

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .split(/\s+/)
    .filter(item => item != "")
    .join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
