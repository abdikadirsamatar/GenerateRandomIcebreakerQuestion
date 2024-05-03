function SayeName(mysecretcode) {
    let myname = document.getElementById("myName").value;
    console.log(myname);
    alert(`Hi ${myname} - ${mysecretcode}`);
  }
  ////////////////////////////////////////////////
  /*my code*/

  function add(number1, number2) {
    return number1 + number2;
  }
  function sub(number1, number2) {
    return number1 - number2;
  }
  function mult(number1, number2) {
    return number1 * number2;
  }
  function div(number1, number2) {
    return number1 / number2;
  }

  function calculate() {
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
   // let result = number1 + number2;
    document.getElementById('displayName').innerHTML = add(number1,number2);
  }
  function calculatesub() {
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
   // let result = number1 + number2;
    document.getElementById('displayName').innerHTML = sub(number1,number2);
  }
  function calculatemult() {
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
   // let result = number1 + number2;
    document.getElementById('displayName').innerHTML = mult(number1,number2);
  }
  function calculatediv() {
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
   // let result = number1 + number2;
    document.getElementById('displayName').innerHTML = div(number1,number2);
  }

  /////////////////////////////////////////////////////////////
  /*reamsey code*/
  function calculate(operation) {
    let result;
      try {
        // Perform calculation based on selected operation
        switch (operation) {
          case 'add':
            result = add(number1, number2);
            break;
          case 'subtract':
            result = subtract(number1, number2);
            break;
          case 'multiply':
            result = multiply(number1, number2);
            break;
          case 'divide':
            result = divide(number1, number2);
            break;
          default:
            throw new Error("Invalid operation");
        }
        
        // Display result
        document.getElementById('displayName').innerHTML = operation;
      } catch (error) {
        alert(error.message);
      }
    }