const height = document.getElementById("height")
const weight = document.getElementById("weight")
const calculateBtn = document.getElementById("button-cta")
const form = document.getElementById("form")
const result = document.getElementById("result")
const advice = document.getElementById("advice-text")

let bmi

let evaluation

const underWeightTips = "Advices for underweight people: \n" +
"\n" + 
"Eat a variety of foods that give you the nutrition you need \n" + 
"You should make sure you eat enough energy to gain weight \n" +
"Get protein to repair your body and build your muscles \n" +
"Get vitamins and minerals to make you healthy \n"

const normalWeightTips = "Advices for normalweight people: \n" + 
"\n" + 
"Limit portion size to control calorie intake \n" + 
"Exercise Often \n" +
"Try Eating Breakfast Every Day \n" +
"Weigh Yourself Regularly \n"

const overWeightTips = "Advices for overweight people: \n" + 
"\n" + 
"Follow the Basics of Healthy Eating \n" + 
"Join a Gym \n" +
"Fix Your Sleeping and Waking Times \n" +
"Weigh yourself on a Weekly Basis \n"


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    resetState()
    bmi = (weight.value * 10000) / (height.value * height.value)

    if(bmi < 16.9 ){
        evaluation = "Very Underweight"
        document.body.classList.add("very-under")
        advice.innerText = underWeightTips
    }
    if(bmi > 17 && bmi < 18.4 ){
        evaluation = "Under Weight"
        document.body.classList.add("under")
        advice.innerText = underWeightTips
    }
    if(bmi > 18.5 && bmi < 24.9 ){
        evaluation = "Normal Weight"
        document.body.classList.add("normal")
        advice.innerText = normalWeightTips
    }
    if(bmi > 25 && bmi < 29.9 ){
        evaluation = "Overweight"
        document.body.classList.add("overweight")
        advice.innerText = overWeightTips
    }
    if(bmi > 30 && bmi < 34.9 ){
        evaluation = "Overweight Class 1"
        document.body.classList.add("overweight-F")
        advice.innerText = overWeightTips
    }
    if(bmi > 35 && bmi < 40 ){
        evaluation = "Overweight Class 2"
        document.body.classList.add("overweight-S")
        advice.innerText = overWeightTips
    }
    if(bmi > 40){
        evaluation = "Overweight Class 3"
        document.body.classList.add("overweight-T")
        advice.innerText = overWeightTips
    }


    result.innerText = "BMI: " + bmi.toFixed(1) + " --> " + evaluation 
    
})

function resetState(){
    document.body.classList.remove("very-under")
    document.body.classList.remove("under")
    document.body.classList.remove("normal")
    document.body.classList.remove("overweight")
    document.body.classList.remove("overweight-F")
    document.body.classList.remove("overweight-S")
    document.body.classList.remove("overweight-T")
}


