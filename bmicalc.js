//this is the javascript for the bmi calc project

/* 

BMI math
BMI = weight (kg) / height(m) ^2
kg = lb * 0.45
m = (ft * 0.3048) + (in * 0.0254)

*/

//get inputs
let weightInput = document.getElementById("weightfield");
let heightInput = document.getElementById("heightfield");
let inchesInput = document.getElementById("inchesfield");
let clickEnter = document.getElementById("Enter");
let outputArea = document.getElementById("Output")

outputArea.display = "none";
//outputArea.style.display = 'none';


//clear previous output
weightInput.addEventListener("click", function() {
  eraseText();
})

//functions on enter
clickEnter.addEventListener("click", function () {
  lbToKg();
  inchToMeters();
  clearFields();
  calculateBMI();
  
});

//clear the fields
function clearFields() {
  weightfield.value = "";
  heightfield.value = "";
  inchesfield.value = "";
  
}

var kgWeight;
//lb to kg function
function lbToKg() {
  weightInput = document.getElementById("weightfield").value;
  kgWeight = weightInput * 0.45;
  console.log("Kilograms: " + kgWeight);
  
  outputArea.append("You weigh " + weightInput + " pounds and are ");
  //valueArray.push(kgWeight);
}



var meterValue;
//Height inputs feet and inches to Meters
function inchToMeters() {
  heightInput = document.getElementById("heightfield").value;
  ftValue = heightInput * 0.3048;
  inchesInput = document.getElementById("inchesfield").value;
  inchValue = inchesInput * 0.0254;

  meterValue = ftValue + inchValue;
  
  console.log("Meters: " + meterValue);
  outputArea.append(heightInput + " feet " + inchesInput + " inches tall." );
  //valueArray.push(meterValue);
}


//BMI calculation
//bmi output
var paragraph;



function calculateBMI() {
  //bmi
  bmiValue = kgWeight / (meterValue * meterValue);
  console.log("BMI value is \n" + bmiValue);
  
  outputArea.style.display = 'block';
  
  var paragraph = document.createElement('p') 
  paragraph.innerText = "Your BMI is: " + Math.round(bmiValue);
  outputArea.append(paragraph);
    
  if (bmiValue < 18.5) {
      outputArea.append("You are in the Underweight category");
    } else if (bmiValue > 18.5 && bmiValue < 24.9) {
      outputArea.append("You are in the Normal weight category");     }
      else if (bmiValue > 24.9 && bmiValue < 30) {
        outputArea.append("You are in the Overweight category");
      } else if (bmiValue > 30 && bmiValue < 40) {
        outputArea.append("You are in the Obese category");
      } else if (bmiValue > 40) {
        outputArea.append("You are in the Morbidly Obese category");
      }
}



function eraseText() {
  outputArea.innerText=""; 
  outputArea.style.display = 'none';
}


