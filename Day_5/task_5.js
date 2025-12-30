// ## 1. Pyramid Pattern

let i;
let j;
let n = 5;
let stars;

for (i = 1; i <= n; i++) {
  stars = "";
  for (j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

//## 2. multiplication table
let multiple;

for (let i = 1; i <= 10; i++) {
  let num = 3;
  multiple = "";
  for (k = 1; k <= 5; k++) {
    if (k === 1) {
      multiple += num;
    } else if (k === 2) {
      multiple += " x ";
    } else if (k === 3) {
      multiple += i;
    } else if (k === 4) {
      multiple += " = ";
    } else if (k === 5) {
      multiple += num * i;
    }
  }

  console.log(multiple);
}

// ## 3. ODD NUMBER BETWEEN 1-500

for (let nums = 1; nums <= 500; nums++) {
  if (nums % 2 === 1) {
    console.log(nums);
  }
}

// ## 4. skipping multiples of 3 between 1-20
for (let multiple = 1; multiple <= 20; multiple++) {
  if (multiple % 3 !== 0) {
    console.log(multiple);
  }
}

// ## 5. Reverse digits

let m = 0;

const num = 3456;

let num2 = num.toString().split(""); //split() convert to an array

while (m <= num2.length) {
  let reverseNum = num2.reverse().join(); //reverse() reverses the order of an array and join() it converts array to string;
  console.log(reverseNum);

  num2++;
}

// ## 6. differences between for,while and do-while

// FOR loop => used when you know how many loops you want to loop.
// WHILE loop => used in instutition where you dont konw how many loops you want to loop.
// DO-WHILE loop => used if you want atleast one iteration to be execute.
