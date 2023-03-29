// 1) Write a javascript function that finds the duplicate items in any given array.

const items = [1, 2, 3, 3, 4, 5, "metrobi", "metrobi", "challange"];

function findDuplicate(items) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j]) {
        result.push(items[i]);
      }
    }
  }
  return result;
}

// This is a easy way to do that, i created the algorithm above with more complexity to exemplify how it is usually done under existing methods in languages.
console.log(items.filter((item, index) => items.indexOf(item) !== index));

console.log(findDuplicate(items));

// Basically, i created a brute force solution where I check all items in the array for duplicate content and insert on new array with the result.
