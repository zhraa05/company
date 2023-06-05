// let numbers = [1, 2, 3, 4];
// numbers.push(5);
// console.log(numbers); // Output: [1, 2, 3, 4, 5]
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum); // Output: 15
function findLargestInteger(arr) {
    let largest = arr[0]; // Assume the first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) { // If we find a larger element
            largest = arr[i]; // Update our largest variable
        }
    }

    return largest;
}
const array = [5, 3, 9, 1, 7, 4];
const largest = findLargestInteger(array);
console.log(largest); // Output: 9
