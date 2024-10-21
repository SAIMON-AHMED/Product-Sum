// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// Time -> O(n) - where n is the total number of elements in the array, including integers and all nested arrays.
// Space -> O(d) - where d is the maximum depth of the nested arrays. The space complexity is due to the call stack in recursion

function productSum(array, depth = 1) {

  let sum = 0;
  
  for (const element of array) {
    if (!Array.isArray(element)) {
      sum += element;
    } else {
      sum += productSum(element, depth + 1);
    }
  }
  return sum * depth;
}
