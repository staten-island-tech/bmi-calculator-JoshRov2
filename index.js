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
