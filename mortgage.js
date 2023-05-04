
//var principal = Number(document.getElementById("mortgage").value);

//var interest = Number(document.getElementById("interest").value);

//var years = document.querySelector('#ammortization');
//var years = 12;

//var frequency1 = document.querySelector('#Frequency');

//var frequency1 = document.querySelector('#Term');

//Prepayment code
//var downPayment = Number(document.getElementById("prepayment").value);

//var frequency1 = document.querySelector('#Prfrequency');
/* function calculateMortgage(principal, interest, years, downPayment) {
  let loanAmount = principal - downPayment;
  let monthlyRate = interest / 12;
  let months = years * 12;
  let mortgage =
    (loanAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));
  return mortgage.toFixed(2);
} */


//var mortgage1 = document.getElementById("start");
const form1 = document.getElementById('form4');
form1.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting
  calculate();

  /*var downPayment = Number(document.getElementById("prepayment").value);
  var interest = Number(document.getElementById("interest").value);
  var principal = Number(document.getElementById("mortgage").value);
  const years = Number(document.querySelector('#ammortization').value);


  const mortgage = calculateMortgage(principal, interest / 100, years, downPayment);
  
  const result = document.querySelector('#result');
  result.innerHTML = `The monthly mortgage payment is $${mortgage}`;*/

  });


  function calculate() {
    const housePrice = document.getElementById("mortgage").value;
    const downPayment = document.getElementById("prepayment").value || 0;
    const principal = housePrice - downPayment;
    const interestRate = document.getElementById("interest").value / 100 / 12;
    const years = document.getElementById("ammortization").value;
    const frequency = document.querySelector('input[name="frequency"]:checked').value;
    const numberOfPayments = years * frequency;
    const mortgage = (principal * (interestRate * Math.pow(1 + interestRate, numberOfPayments))) / (Math.pow(1 + interestRate, numberOfPayments) - 1);
    const formattedMortgage = mortgage.toFixed(2);
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p>Your mortgage payment is $${formattedMortgage} per ${getPaymentFrequency(frequency)} for ${numberOfPayments} payments.</p>
    `;
    resultElement.style.display = "block";
  }


  function getPaymentFrequency(frequency) {
    switch (frequency) {
      case "52":
        return "week";
      case "26":
        return "bi-week";
      case "12":
        return "month";
    }
  }
