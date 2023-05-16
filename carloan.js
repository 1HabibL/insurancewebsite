var form = document.getElementById('form4');

//MP=(P(r/n)/[1-(1+(r/n)^(-nt))]
//p = price of car
//r = interest 
//n = 12 months 
//t = 10 years

form.addEventListener('submit', function(event){
    event.preventDefault()
    var carprice = document.getElementById('carprice').value;
    var interest = document.getElementById('interest').value / 100 / 12;
    var ammortization = Number(document.getElementById('ammortization').value);
    var frequency = document.querySelector('input[name="frequency"]:checked').value;
    var prepayment = document.getElementById('prepayment').value;
    var tradein = document.getElementById('tradein').value;
    
    
    //
    carloancalc(carprice, interest, ammortization, frequency, prepayment, tradein);


})

function carloancalc(carprice, interest, ammortization, frequency, prepayment, tradein) {
let loanamount = carprice - (prepayment+tradein);
const numberOfPayments = frequency * ammortization;
let carloan = (loanamount * (interest/frequency) / (1 - Math.pow(1 + interest, -ammortization)));
const formattedcarloan = carloan.toFixed(2)


const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p>Your car loan payment is $${formattedcarloan} per ${getPaymentFrequency(frequency)} for ${numberOfPayments} payments.</p>
    `;
    resultElement.style.display = "block";

};



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

