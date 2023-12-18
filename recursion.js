product = ([2,3,4])
/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case: if the array is empty, return 1 (multiplicative identity)
  if (nums.length === 0){
    return 1
  } else {
    // Multiply the first element by the product of the rest of the array
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */
longest(["hello", "hi", "hola"])

function longest(words) {
  // Base case: If there are no more words, return 0
  if (words.length === 0){
    return 0;
  } else {
    // Calculate the length of the current word
    const currentLength = words[0].length;

    // Recursively find the length of the longest word in the rest of the array
    const maxLengthRest = longest(words.slice(1));

    // Compare the current word's length with the longest length found
    return Math.max(currentLength, maxLengthRest);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case: if the string has one character or less, return the string itself
  if(str.length === 0) {
    return str;
  } else {
    // Recursively skip every other character starting from index 0 and concatenate it
    // withthe result of everyOther for the rest of the string.
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string length is 0 or 1, it's a palindrome
  if (str.length <= 1) {
    return true;
  } else {
    // Check if the first and last characters are equal
    if (str[0] === str[str.length - 1]) {
      // Recursively check the remaining substring by excluding the first and last characters
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (index >= arr.length) {
    return -1;
  }

  // Check if the current element matches the value
  if (arr[index] === val) {
    return index; // Return the index where the value is found
  }

  // Recursively search in the rest of the array
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    // Base case: if the string is empty or has one character, return the string itself
    if (str.length <= 1) {
      return str;
    } else {
      // Recursively reverse the substring starting from the second character till the end
      return revString(str.slice(1)) + str[0];
    }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(gatherStrings(obj[key]));
    }
  }

  return stringsArr;
}

// Test the function
const obj = {
  a: 'hello',
  b: {
    c: 'world',
    d: 123,
    e: {
      f: 'foo',
      g: 'bar'
    }
  },
  h: 456
};

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // Base case: value not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid; // Base case: value found at mid index
  } else if (val < arr[mid]) {
    return binarySearch(arr, val, start, mid - 1); // Search the left half
  } else {
    return binarySearch(arr, val, mid + 1, end); // Search the right half
  }
}

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
