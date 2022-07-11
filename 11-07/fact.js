const fact = n => {
  let number = parseInt(n);
  if (number > 0) {
    let f = 1;
    for(let i = 1; i <= number; i++) {
      f = f * i; // f *= i;
    }
    console.log(`Factorial of ${n} is ${f}`);
  } else {
    console.log("Number is not valid");
  }
}

fact(10);

// //recursive approach 
function factorial(n) {
    //base case for 0!
    if (n == 0 || n == 1) {
        return 1;
        //recursion case
    } else {
        return n * factorial(n - 1);
    }
}
let n = 5;
console.log(factorial(n))
