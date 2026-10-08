function meterToFeet(num){
    return `${Number.parseFloat(num * 3.281).toFixed(3)} feet`
}

function feetToMeter(num){
    return `${Number.parseFloat(num / 3.281).toFixed(3)} meter`
}

function litersToGallons(num){
    return `${Number.parseFloat(num * 0.264).toFixed(3)} gallons`
}

function gallonsToLiters(num){
    return `${Number.parseFloat(num / 0.264).toFixed(3)} liters` 
}


function kilogramsToPounds(num){
    return  `${Number.parseFloat(num * 2.204).toFixed(3)} pounds` 
}

function poundsToKilograms(num){
    return  `${Number.parseFloat(num / 2.204).toFixed(3)} kilograms` 
}

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("unitInput")
const lengthEl = document.getElementById("lengthOut")
const volumeEl = document.getElementById("volumeOut")
const massEl = document.getElementById("massOut")




convertBtn.addEventListener("click", function(){
    const inputValue  = Number(inputEl.value)
    console.log((inputValue));
    
    lengthEl.textContent = `${inputValue} meters = ${meterToFeet(inputValue)} | ${inputValue} feet = ${feetToMeter(inputValue)}`
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons(inputValue)} | ${inputValue} gallons = ${gallonsToLiters(inputValue)}`
    massEl.textContent = `${inputValue} kilograms = ${kilogramsToPounds(inputValue)} | ${inputValue} pounds = ${poundsToKilograms(inputValue)}`
})
