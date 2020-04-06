// ==================================================
// DEFINE FUNCTION(S)
// ==================================================

function quotient(num1,num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  if (num2 === 0) return 'ERROR';
  return num1 / num2;
  
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(4,0);
  if (result !== 'ERROR') throw new Error('Expected quotient(4,0) to be "ERROR". Received: ' +result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(12,3,4,2);
  if (result !== 4) throw new Error('Expected quotient(12,3,4,2) to be 4. Received: ' +result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(5);
  if (result !== 5) throw new Error('Expected quotient(5) to be 5. Received: ' +result);
  /* I tried different ways to solve this test case, but I was not able to fix it. If I do not pass the second value, 
  my function it will automatically pass 0, once I pass 0, 
  my function it will return 'ERROR'. 
  */
  
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient();
  if (result !== 0) throw new Error('Expected quotient() to be 0. Received: ' +result);
/* Encountered the same difficulty as mentioned above. I am solving the ERROR conditional, but I was not able to go further with the IF. */

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
