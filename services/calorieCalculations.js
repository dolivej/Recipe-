
const calculateRMRMifflinEquation = (gender, age, height, weight) => {
    if (gender == 'Male'){
        return ((10*(weight)) + (6.25*(height)) - (5*(age)) + 5)
    }else {
        return ((10*(weight)) + (6.25*(height)) - (5*(age)) - 161)
    }
}

const calculateRMRHarrisBenedictEquation = (gender, age, height, weight) => {
    if (gender == 'Male'){
        return (88.362 + (13.397*(weight)) + (4.799*(height)) - (5.677*(age)))
    }else {
        return (447.593 + (9.247*(weight)) + (3.098*(height)) - (4.330*(age)))
    }
}

const calculateExtraDueToActivity = (activity, baseCalories) => {
    if (activity == 20){
        return (150)
    }else if (activity == 40){
        return (350)
    }else if (activity == 60){
        return (450)
    }else if (activity == 90){
        return (550)
    }
}

const weightLossDefecit = (weight,bodyFatPercent,gender) => {
    let fatLbPerWeek;

    if(gender == 'Male' && bodyFatPercent < 15){
        fatLbPerWeek = 0.003*(weight)
    }else if (gender == 'Male' && bodyFatPercent < 20){
        fatLbPerWeek = 0.005*(weight)
    }else if (gender == 'Male' && bodyFatPercent < 25){
        fatLbPerWeek = 0.007*(weight)
    }else if (gender == 'Male' && bodyFatPercent < 30){
        fatLbPerWeek = 0.0085*(weight)
    }else if (gender == 'Male' && bodyFatPercent < 40){
        fatLbPerWeek = 0.01*(weight)
    }else if (gender == 'Male' && bodyFatPercent > 40){
        fatLbPerWeek = 0.012*(weight)
    }

    if(gender == 'Female' && bodyFatPercent < 20){
        fatLbPerWeek = 0.003*(weight)
    }else if (gender == 'Female' && bodyFatPercent < 25){
        fatLbPerWeek = 0.005*(weight)
    }else if (gender == 'Female' && bodyFatPercent < 30){
        fatLbPerWeek = 0.007*(weight)
    }else if (gender == 'Female' && bodyFatPercent < 35){
        fatLbPerWeek = 0.0085*(weight)
    }else if (gender == 'Female' && bodyFatPercent > 35){
        fatLbPerWeek = 0.01*(weight)
    }

    return [fatLbPerWeek,(fatLbPerWeek*3500) / 7]
}

const calculateMaintenance = (activity, baseCalories) => {
    if (activity == '20m'){
        return baseCalories + 150
    }else if (activity == '40m'){
        return baseCalories + 350
    }else if (activity == '60m'){
        return baseCalories + 450
    }else if (activity == '90m'){
        return baseCalories + 550
    }
}

const isAlreadyLowBodyFat = (bodyFatPercent,gender) => {
    if (gender == "Male" && bodyFatPercent <= 15){
        return true
    }else if (gender == "Female" && bodyFatPercent <= 20){
        return true
    }else{
        return false
    }
}

const returnAllDetails = (gender, age, height, weight, activity, bodyFatPercent,type) => {
    let base = Math.round(calculateRMRHarrisBenedictEquation(gender, age, height, weight))
    let activityExtra = Math.round(calculateExtraDueToActivity(activity,base))
    let loss = weightLossDefecit(weight,bodyFatPercent,gender)
    let poundLoss = (loss[0]).toFixed(2) 
    let deficit = Math.round(loss[1])
    let isLow = isAlreadyLowBodyFat(bodyFatPercent,gender)

    if (type == "maintain"){
        deficit = 0
        poundLoss = 0
    }else if (type == "gainMuscle"){
        deficit = -250
        poundLoss = 0
    }

    return {
        total : base + activityExtra - deficit,
        base,
        activityExtra,
        deficit,
        poundLoss,
        isLow
    }
}


export {returnAllDetails, calculateRMRMifflinEquation,calculateRMRHarrisBenedictEquation,calculateExtraDueToActivity, calculateMaintenance, weightLossDefecit, isAlreadyLowBodyFat}