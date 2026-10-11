function meterToFeet(num){
    // return `${Number.parseFloat(num * 3.281).toFixed(3)} feet`
    return num * 3.281
}

function feetToMeter(num){
    // return `${Number.parseFloat(num / 3.281).toFixed(3)} meter`
     return (num / 3.281)
}

function litersToGallons(num){
    // return `${Number.parseFloat(num * 0.264).toFixed(3)} gallons`
     return num * 0.264
}

function gallonsToLiters(num){
     return num / 0.264
}


function kilogramsToPounds(num){
    // return  `${Number.parseFloat(num * 2.204).toFixed(3)} pounds`
    return num * 2.204 
}

function poundsToKilograms(num){
    // return  `${Number.parseFloat(num / 2.204).toFixed(3)} kilograms` 
    return num / 2.204
}

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("unitInput")
const lengthEl = document.getElementById("lengthOut")
const volumeEl = document.getElementById("volumeOut")
const massEl = document.getElementById("massOut")




convertBtn.addEventListener("click", function(){
    const inputValue  = Number(inputEl.value)
    console.log((inputValue));
    
    
    lengthEl.textContent = `${inputValue} meters = ${meterToFeet(inputValue).toFixed(3)} feet | ${inputValue} feet = ${feetToMeter(inputValue).toFixed(3)} meters`;

    volumeEl.textContent = `${inputValue} liters = ${litersToGallons(inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters(inputValue).toFixed(3)} liters`;

    massEl.textContent = `${inputValue} kilograms = ${kilogramsToPounds(inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilograms(inputValue).toFixed(3)} kilograms`;

})
