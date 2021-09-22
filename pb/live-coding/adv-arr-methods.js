// example: log each element of an array
let arr = ['Walter', 'Jesse', 'Gus'];

// we could use a for-loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// or a for ... of loop
for (elem of arr) {
    console.log(elem);
}
// or forEach
arr.forEach(function(elem) {
    console.log(elem);
});

// with an arrow function
arr.forEach(elem => console.log(elem));

// map
let oldArr = [1, 2, 3];
let newArr = oldArr.map(item, index, arr) {
    // do something
};

// example:
let nums = [1, 2, 3, 4];
let doubles = nums.map(function(num) {
    return num * 2;
});

// let doubles = nums.map(num => num * 2);

// reduce
let arr1 = [1, 2, 3, 4];
let sum = arr1.reduce(function(prev, curr) {
    return prev + curr;
});
console.log(sum);

// with arrow function
// let sum = arr1.reduce((prev, curr) => prev + curr);

// filter
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evensArr = numsArr.filter(function(num) {
    return num % 2 === 0;
});
// let evensArr = numsArr.filter(num => num % 2 === 0);

// sort (destructive! sorts "in place")
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

