var markMass, johnMass, markHeight, johnHeight;

markMass = 23;
johnMass = 30;

markHeight = 6;
johnHeight = 8;

var markBMI = markMass / (markHeight * markHeight);

var johnBMI = johnMass / (johnHeight * johnHeight);

var isHeigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log("is mark's BMI higher than john's BMI? " + isHeigherBMI);
