// ## 1.

let day = "monday";

switch (day) {
  case "monday":
    console.log(`${day} its start of the week.`);
    break;
  default:
    console.log("its normal day.");
}

//output will be monday, because in switch condition finds the matching
//the variable day is matching with condition//

// ## 2. an ATM cash widthdrawal system

function createBankAccount(initialAmount) {
  let balance = initialAmount;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`current balance is :${balance}`);
    },

    withdrawal(amount) {
      if (amount % 100 !== 0) {
        console.log("invalid amount");
      } else {
        balance -= amount;
        console.log(`Withdrawal successful, of ${amount}`);
      }
    },

    checkBalance() {
      console.log(`Your balance is ${balance}`);
    },
  };
}

const bankAccount = createBankAccount(150);
bankAccount.deposit(203);
bankAccount.withdrawal(200);
bankAccount.checkBalance();

// ## 3. buliding simple calculator
/* let num = prompt("Enter number to calculate");
let num2 = prompt("Enter second number to calculate");

let operator = prompt("Enter( +, - , / or %) to perform calculation");

let total = `${num} ${operator} ${num2}`;
const result = `${num} ${operator} ${num2} = ${eval(total)}`;
console.log(result); */

// ## 4. program for pay MOVIE TICKET
let age = 23;

if (age < 18) {
  console.log(`Children fee : $3`);
} else if (age >= 18 && age <= 60) {
  console.log(`Adult fee: $10`);
} else if (age > 60) {
  console.log(`Senors fee: $8`);
}

// ## 5. horoscope sign checker

let month = "june";

switch (month) {
  case "january":
  case "febuary":
  case "march":
  case "April":
    console.log("Borns are Aries.");
    break;
  case "may":
  case "june":
  case "july":
  case "August":
    console.log("Borns are Taurus.");
    break;
  case "septober":
  case "october":
  case "November":
  case "December":
    console.log("Borns are Gemini");
    break;
  default:
    console.log("None were born.");
}

// ## 6. Triangle
let side_A = prompt("Enter length of side_A");
let side_B = prompt("Enter length of side_B");
let side_C = prompt("Enter length of side_C");

if (side_A === side_B && side_A === side_C && side_B === side_C) {
  console.log("Equailateral triangle");
} else if (side_B === side_C || side_A === side_C || side_B === side) {
  console.log("Isosceles Triangle");
} else if (side_A !== side_B && side_A !== side_C && side_B !== side_C) {
  console.log("Scalene Triangle");
}
