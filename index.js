function calcBMI(weight, height) {
    const userBMI = ((weight / (height * height))*10000);
    return userBMI;
}

function categorizeBMI(userBMI) {
    if (userBMI < 18.5) {
    console.log ("You're underweight.");
    } else if (userBMI >= 18.5 && userBMI < 24.9) {
    console.log ("Your weight is healthy.");
    } else if (userBMI >= 25 && userBMI < 29.9) {
    console.log ("Your weight is unhealthy.");
    } else {
    console.log ("You're obese.");
    }
    return(categorizeBMI);
}

const user = {
    name: "Josh Rovensky",
    heightCm: 157,
    weightKg: 57
};

const userBMI = calcBMI(user.weightKg, user.heightCm);
console.log(user.name + ", your BMI is: " + userBMI);
categorizeBMI(userBMI);
