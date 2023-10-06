
const user = {
    name: prompt("Enter your name."),
    weight: prompt('Enter your weight, in kilograms.'),
    height: prompt('Enter your height, in centimeters.'),
}
function getBMI(user){;
    const BMI = calcBMI(weight, height);
    console.log('Your BMI is: ' + BMI);
    categorizeBMI(BMI)
}

function calcBMI(weight, height) {
    const BMI = ((user.weight / (user.height * user.height))*10000);
    return BMI;
}

function categorizeBMI(BMI){

    if (BMI < 18.5) {
    console.log ("You're underweight.");
    } else if (BMI >= 18.5 && BMI < 24.9) {
    console.log ("Your weight is healthy.");
    } else if (BMI >= 25 && BMI < 29.9) {
    console.log ("Your weight is unhealthy.");
    } else {
    console.log ("You're obese.");
    } 
    return(categorizeBMI); 
}
getBMI();