# Product Sum Function

**Overview**

This repository contains a solution for calculating the Product Sum of a special array. A special array is an array that contains integers and other nested arrays. The Product Sum is defined as the sum of all elements in the array, where the sum of the elements in a nested array is multiplied by its depth in the main array.

The depth of an array is determined by how many levels deep it is within the outermost array. The outermost array has a depth of 1, and each level of nested arrays increases the depth by 1.


**Problem Definition**

Given an array that can contain integers and other arrays, calculate the Product Sum of the array. For every nested array, the sum of its elements is multiplied by its depth in the parent array.


**How the Function Works**

1. The function iterates over each element of the array.
2. If an element is an integer, it is added to the sum.
3. If an element is a nested array, the function calls itself recursively with the nested array and increases the depth by 1.
4. After processing all elements, the total sum is multiplied by the depth of the array to calculate the Product Sum.

**Example:**

	Input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
	Output: 12
 
**Explanation**:


Depth 1: 5 + 2 + 3 = 10

Depth 2: [7, -1] = (7 + (-1)) * 2 = 12

Depth 2: [6, [-13, 8], 4] = (6 + ([-13, 8] * 3) + 4) = (6 + (-5 * 3) + 4) * 2 = -10 * 2 = -10

Thus, the total sum is: 10 + 12 - 10 = 12.


**Function Signature**

function productSum(array, depth = 1) { ... }

**Parameters**:

array: An array that may contain integers and other nested arrays.

depth: The current depth of the array (defaults to 1).

**Returns**: The product sum of the input array, accounting for depth.



**Time and Space Complexity**

**Time Complexity**: O(n) where n is the total number of elements in the array, including integers and all nested arrays.

**Space Complexity**: O(d), where d is the maximum depth of the nested arrays. The space complexity is due to the call stack in recursion.



**License**

This project is licensed under the MIT License. Feel free to use it in your own projects!
