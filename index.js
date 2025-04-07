function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Add your pseudocode here
*/// Step 1: Take the input word
// Step 2: Reverse the word
// Step 3: Compare the original word with the reversed one
// Step 4: If they match, return true (it's a palindrome)
//         If not, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
