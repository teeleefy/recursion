/** product: calculate the product of an array of numbers. */
//product([2,3,4,5])
    // 2 * product([3,4,5])
    //   3* product([4,5])
    //     4* product([4,5])
    //       5* product([])
    //         0

function product(nums, i = 0) {
  //BASE CASE
  if(i === nums.length ) return 1;
  //NORMAL CASE
  return nums[i] * (product(nums, i + 1));
}

/** longest: return the length of the longest word in an array of words. */

// function longestWord(words, i = 0) {
//   //BASE CASE
//   if(i === words.length ) return words[i-1];
//   //NORMAL CASE
//   let longestWord;
//   let firstWord =words[i];
//   let secondWord= longest(words, i + 1);
//   // console.log(`First Word: ${firstWord}. Second Word: ${secondWord}`);
//   if (firstWord.length > secondWord.length){
//     longestWord = firstWord;
//   }
//   else{
//       longestWord = secondWord;
//     }
//     console.log(longestWord)
//   return longestWord;
// }
// longestWord(['cat','frog', 'dog', 'house', 'mice', 'alphabet', 'hi', 'how', 'have','you','been'])

function longest(words, i = 0) {
  //BASE CASE
  if(i === words.length) return words[i-1].length;
  //NORMAL CASE
  let firstWord = words[i].length;
  let secondWord= longest(words, i + 1);
  return Math.max(firstWord, secondWord)
}
// longest(['cat','frog', 'dog', 'house', 'mice', 'alphabet', 'hi', 'how', 'have','you','been'])


/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
//BASE CASE
if(i >= str.length) return "";
//NORMAL CASE
return str[i] + everyOther(str, i + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = (str.length-1)) {
//BASE CASE
if (i >= j) return true;
// console.log(`At index ${i}, is the letter ${str[i]} the same as the letter ${str[j]}, at index ${j}`)
//NORMAL CASE
if(str[i] !== str[j]) return false;
return isPalindrome(str, i+1, j-1);
}

isPalindrome('tacocat')
isPalindrome('taco')


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  //BASE CASE
  if(i > arr.length) return -1;
  //NORMAL CASE
  if(arr[i] === val) return i;
  return findIndex(arr, val, i + 1)
}

let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length-1 ) {
  let newWord;
  let newStr = str[i];
  //BASE CASE
  if (i === 0) return str[i];
  //NORMAL CASE
  newWord = newStr + revString(str, i - 1);
  return newWord
}

revString("porcupine") // 'enipucrop'


function gatherStrings(obj) {
  let strArray = [];
  let values = Object.values(obj);
  //BASE CASE

  // NORMAL CASE
  for(let i in values){
    if (typeof values[i] === 'string'){
      strArray.push(values[i]);
    } else if (typeof values[i] === 'object'){
        let nestedArray = gatherStrings(values[i]);
        console.log(`Nested array: ${nestedArray}`)
        for(let i in nestedArray){
          strArray.push(nestedArray[i]);
        }
    } else {
      console.log('found a number')
    }
  }
  return strArray;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0) {
  //BASE CASE
  if(i > arr.length) return -1;
  //NORMAL CASE
  if(arr[i] === val) return i;
  return binarySearch(arr, val, i + 1)
}

binarySearch([1,2,3,4],1) // 0
binarySearch([1,2,3,4],3) // 2
binarySearch([1,2,3,4],5) // -1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
