const originalArray = [10, 20, 30, 40, 50];
const doubledArray = [];

for (let i = 0; i < originalArray.length; i++) {
  doubledArray.push(originalArray[i] * 2);
}

console.log("Original:", originalArray);
console.log("Doubled:", doubledArray);