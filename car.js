const form1 = document.getElementById('form1');

//years of driving experience
//let yearofdriving = document.getElementById("YOE").value;
var yearofdriving1 = document.getElementById("YOE");

//annual salary
var salary = document.getElementById("salary");


//number of driving violations
var numberofviolations = document.getElementById("NOV");

//did you have insurance before (radio)
//version1 below
//var insurancehistory = document.querySelector('input[name="InsuranceHistoryOption"]:checked').value;

//version2
//var insurancehistory = document.querySelector("input[name='InsuranceHistoryOption']: checked").value;
//var insurancehistory = document.getElementsByName("InsuranceHistoryOption");
//var insurancehistory = document.getElementsByName("InsuranceHistoryOption");

//brand of car (drop down menu)

//var car = document.querySelector('#car').value;
var car = document.querySelector('#car'); //correct version


//let car = document.getElementById("car");
//var carvalue = car.value;

//body style (drop down menu)

var body = document.querySelector('#carbody');

//model year (textbox)
var modelyear = document.getElementById("Myear").value;
//kilometers diriven (textboxn)
var kmdriven = document.getElementById("Kdriven").value;
//purchase date (date)

var purchasedate = document.getElementById("pdate").value;

//when did you get your license (date)

var licenseedate = document.getElementById("license").value;


const out1 = document.getElementById('output1');

const basicvehicles = ["Toyota", "Honda", "Hyundai", "Kia", "Chevrolet", "Ford", "Dodge" , "Volvo"];
const luxuryvehicles = ["Acura", "Lexus", "Lincoln", "Buick", "Cadillac", "Mercedes-Benz", "BMW", "Audi"]



const Sportycarbodies = ["SUV", "Coupe"];
const Economicalcarbodies = ["CompactSedan", "Hatchback", "MidSizeSedan"];

function basecost() {
    
    

}



function fun1() {
    
    let basecost1 = (0.10*(parseInt(salary.value))/12);

    /* year of experience calculations */
    if (yearofdriving1.value >= 10) {
        basecost1 = basecost1 * 0.5
    } else if (yearofdriving1 >=  5) {

        basecost1 = basecost1 * 0.7
    } else if (yearofdriving1.value >=  3) {
        basecost1 = basecost1 * 0.85
        } else (basecost1 = basecost1 * 1)


/* number of violation calculation */
 
        if (numberofviolations.value >=  10) {
            basecost1 = basecost1 * 1.5
        } else if (numberofviolations.value >= 5) {
    
            basecost1 = basecost1 * 1.25
        } else if (numberofviolations.value >= 3) {
            basecost1 = basecost1 * 1.15
            } else {basecost1 = basecost1 * 1}

            
            //InsuranceHistoryOption
    /* did you have insruance before */
    //InsuranceHistoryOption
    //insurancehistory
    
   /* var i;
    for(i = 0; i <= insurancehistory.legnth; i++) {
        if(insurancehistory[i].checked) {
            if (insurancehistory[i].value == "yes") {   
        basecost1 = basecost1 * 0.90 }
    else if (insurancehistory[i].value == "no") {basecost1 = basecost1 * 1};
    } else {basecost1 = basecost1 * 1}} */



/*if (insurancehistory = "yes"){
    basecost1 = basecost1 * 0.90;
} else if (insurancehistory= "no") 
{basecost1 = basecost1 * 1}
else {basecost1 = basecost1 * 1}
;  
*/

if (basicvehicles.includes(car.value)) {
    basecost1 = basecost1 + 10
}
else if (luxuryvehicles.includes(car.value))

{ basecost1 = basecost1 + 30
} else {  basecost1 = basecost1 * 1}


if (Sportycarbodies.includes(body.value)) {
    basecost1 = basecost1 + 30
}
else if (Economicalcarbodies.includes(body.value))

{ basecost1 = basecost1 * 1
} else {  basecost1 = basecost1 * 1}
  
    

 

    let totalcost = /*parseInt(yearofdriving1.value)+*/parseInt(basecost1);
        
    out1.innerHTML = totalcost;
    document.getElementById('result').style.display = "block";


   


    };
   

submitbtnd.addEventListener('submit', fun1)

