function Calculator() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    var heightM = Number(height) / 100;

    let BMICalculator = Number(weight) / (Number(heightM) * Number(heightM));


    document.getElementById("BMI").innerHTML = BMICalculator.toFixed(2);

    if (heightM === 0) {
        document.getElementById("BMI").innerHTML = "Error";
        return false;
    }

    let BMIresult = 0;

    if (BMICalculator < 18.5) {
        BMIresult = "You are Underweight ";
        
    }
    else if (BMICalculator >= 18.5 && BMICalculator <= 24.9) {
        BMIresult = "You are Normal weight";

    }
    else if (BMICalculator >= 25 && BMICalculator <= 29.9) {
        BMIresult = "You are Overweight";
    
    }
    else if (BMICalculator >= 30) {
        BMIresult = "You are Obesity";
        
    }
    document.getElementById("BMIresult1").innerHTML = BMIresult;
        return true;

}