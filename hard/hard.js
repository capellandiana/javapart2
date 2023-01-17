const Tom = {weight: 8, height: 9};
const Jerry = {weight: 45, height: 10};

function CalculateBMI({weight, height}) {
    var weightInLbs = weight * .0022
    var BMI = weightInLbs/height**2
    return BMI
}
const TomsBMI = CalculateBMI (Tom)
console.log(TomsBMI)

const JerrysBMI = CalculateBMI (Jerry)
console.log(JerrysBMI)

var comparisonBMI = TomsBMI > JerrysBMI

console.log(`Is Tom's BMI higher than Jerry's? ${comparisonBMI}`)
