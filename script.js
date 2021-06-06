let name = prompt("What is your name please?");
let age = prompt(`${name}, enter your age please`);
alert("Next, I will need your to enter your weight and height to calculate the BMI for your body and see if you need exercising");
let weight = Number(prompt("Enter your weight in kg please\nExample: 70"));
let height = Number(prompt("Enter your height in meters please\nExample: 1.85"));

let h1 = document.querySelector("main h1");
h1.innerHTML = `${name}, your BMI is:`;

let h2 = document.querySelector("main h2");
let p = document.querySelector("main p");

let bmi = (weight / height ** 2).toFixed(1);
console.log(bmi);
if (bmi < 18.5 ){
    h2.innerHTML = "Being underweight could be a sign you're not eating enough or may indicate an underlying medical condition. If you're underweight, contact your doctor for further evaluation.";
    p.innerHTML = bmi;
    p.style.color = "cyan";

} else if (bmi >= 18.5 && bmi <= 24.9) {
    h2.innerHTML = "The medical community recommends keeping your weight within this range.";
    p.innerHTML = bmi;
    p.style.color = "green";

} else {
    h2.innerHTML = "You may be at risk of developing obesity, so we recommend that you do more exercising."
    p.innerHTML = bmi;
    p.style.color = "red";

}