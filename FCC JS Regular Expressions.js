/*
Regular Expressions: Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2) Username letters can be lowercase and uppercase.

3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

Change the regex userCheck to fit the constraints listed above.
*/

let userCheck = /^[a-z]{2,}(?=[0-9]*$)/i; ///^[a-z][a-z]+\d*$/i - a simpler option
console.log(userCheck.test("gg007"));
console.log(userCheck.test("JackOfAll6Trades"));

/*
Regular Expressions: Specify Upper and Lower Number of Matches

Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

    let A4 = "aaaah";
    let A2 = "aah";
    let multipleA = /a{3,5}h/;
    multipleA.test(A4); // Returns true
    multipleA.test(A2); // Returns false

Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}(?=\s)/ // Change this line
let result = ohRegex.test(ohStr);

/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters
 long and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d\d\D*)/; // Change this line
let result = pwRegex.test(sampleWord);

/*
Regular Expressions: Reuse Patterns Using Capture Groups

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:

    let repeatStr = "regex regex";
    let repeatRegex = /(\w+)\s\1/;
    repeatRegex.test(repeatStr); // Returns true
    repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

Using the .match() method on a string will return an array with the string it matches, along with its capture group.

Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

*/

let repeatNum = "42 42 42";
let reRegex = /^(\d{1,})\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

/*
Regular Expressions: Remove Whitespace from Start and End

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note
The .trim() method would work here, but you'll need to complete this challenge using regular expressions.
*/


let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // alternative /^\s+|\s+$/g
let result = hello.replace(wsRegex,'');