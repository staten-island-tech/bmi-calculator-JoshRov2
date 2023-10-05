getBMI();

function getBMI(){
    const weight = prompt('Enter your weight, in kilograms.');
    const height = prompt('Enter your height, in centimeters.');
    calcBMI(weight, height);
    console.log(calcBMI(weight, height));
}

function calcBMI(weight, height) {
    return ((weight / (height * height))*10000);
}

if (calcBMI(weight,height) < 18.5) {
console.log("You're underweight.")
}

if (calcBMI(weight,height) > 24.9) {
console.log("Your weight is normal.")
}

if (calcBMI(weight,height) > 29.9) {
console.log("You're overweight.")
}
