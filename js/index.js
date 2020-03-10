// Numbers and arithmetic operators
console.log(123 + 45)
console.log(123 - 456)
console.log(123 * 456)
console.log(123 / 456)
console.log(123 ** 4)
console.log(123%4)

// strings
console.log('Hello world!')
console.log("Hello world!")
console.log(`<p class="hello"> Hello's world!</p>`)

// create a variable
let myCredits = 123  
myCredits = 123 // assign a value, this value is stored in myCredits

console.log(myCredits)

/* Naming variables
- can not start with a number
- should start with a small letter
- can not use '-'
- Camel case multiple words
.my-credits myCredits
- No special characters other than: _ and $
- No reserved keyworkds */


// BEDMAS (or PEDMAS), Order of operations
myCredits = 5 + 2 * 3;
console.log(myCredits)

myCredits =  myCredits + 5; // 21 + 5 = 26
console.log (myCredits)

myCredits += 5; // 26 + 5 = 31
console.log (myCredits)


myCredits++;
console.log(myCredits)

console.log("You have: " + myCredits + " credits")
console.log(`You have: ${myCredits} credits`);
console.log(`You have: ${myCredits} credits`);

console.log('-------------------')
//In class lab 1 - week 9

// Exercise 1: The Fortune Teller  
let jobTitle = "Web Developer"
let geopraphicLocation = "Berlin"
let annualSalary = 108.000
let companyName = "IBM"
console.log(`Your will be a ${jobTitle} in ${geopraphicLocation}, making $${annualSalary} for ${companyName}`)
console.log("You will be a" + jobTitle + "in" + geopraphicLocation + ", making $" + annualSalary + "for" +companyName);



console.log (`---------Java Class 2----Review-----Rocco`)

// Exercise 1: The Fortune Teller  - by Rocco
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, 
//geographic location, annual salary, company name. Output your fortune to the screen 
//ike so: "You will be a X in Y, making $N for Z."


let jobTitleRocco = "Teacher"
let geolocation ="Toronto"
let annSalary = 100000000
let companyNameRocco = "Humber"



document.querySelector(`li`) 


// output to console
window.console.log (`You will be a ${jobTitleRocco} in ${geolocation}, making $${annSalary} for ${companyNameRocco}`)


//output to the document
//Find the element
let ex1output = document.querySelector(`#ex1`)
ex1output.textContent = `You will be a ${jobTitleRocco} in ${geolocation}, making $${annSalary} for ${companyNameRocco}`





//Find the elemebnt
// next 2 lines doing same thing as line 3
// Fine the element and store the location
// We dont store the element, we store the reference, the locations

let ex1output2 = document.querySelector(`#ex1`)
ex1output.textContent = "hi"
ex1output.style.color = "red"

document.querySelector(`#ex1`).textContent = "hi"
document.querySelector(`#ex1`).style.color = "red"

// Age calculator Exercise 2

// Lifetime Supply The Exercise 3 




//The Geometrizer  Exercise 4




// The Temprature Converter Exercise 5


console.log(`++++++++++++++++++++++++++++++++++++++`)
//Class 2
//Global Scope
let name = `Humber`
let numTimesExecuted = 0

function sayHello () {
    let greeting = `Hello`
    let name = `Classroom`

    let numTimesExecuted = 0 // declare variable as global to increase the number
    numTimesExecuted = numTimesExecuted +1 
    console.log (`Hello, ${name}!`)
    console.log (`${numTimesExecuted}: ${greeting}, ${name}!`)
}

sayHello ()
sayHello ()
sayHello ()
sayHello ()

console.log(`++++++++++++++++++++++++++++++++++++++`)

function multiplyTwoNumber (num1, num2) {
    console.log (`The result of ${num1} * ${num2} is ${num1 * num2}`)
    
    return num1 * num2

}

window.multiplyTwoNumber (4, 2)

console.log(`++++++++++++++++++++++++++++++++++++++`)

let myFavouriteNumber = 5

function multiplyTwoNumber (num1, num2) {
    return num1 * num2
}

console.log (`My favourite number is ${myFavouriteNumber}`)
console.log (`The result of 4 * 5 is ${multiplyTwoNumber(4,5)}`)

console.log(`++++++++++++++++++++++++++++++++++++++`)