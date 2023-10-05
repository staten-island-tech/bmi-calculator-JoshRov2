function getBMI(){
    const weight = prompt('Enter your weight, in kilograms.');
    const height = prompt('Enter the square of your height, in centimeters.');
    calcBMI(weight,height);
    console.log(calcBMI(weight,height));
}
getBMI();