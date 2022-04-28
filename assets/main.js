'use strict'
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

let  btn = document.querySelector("#generate")

btn.addEventListener("click", () => {

    let passwordArr = []
    let password = ''
    let result = document.querySelector("#result")
    let numLetters = document.querySelector("#letters").value
    let numSymbols = document.querySelector("#symbols").value
    let numNumbers = document.querySelector("#numbers").value
    

    if(numLetters >= 0 && numSymbols >= 0 && numNumbers >= 0) {
        passwordArr = appendRandomCharacters(passwordArr, letters, numLetters, 51)
        passwordArr = appendRandomCharacters(passwordArr, symbols, numSymbols, 8)
        passwordArr = appendRandomCharacters(passwordArr, numbers, numNumbers, 9)
       
        console.log(passwordArr)
        passwordArr = shuffleArray(passwordArr)
        console.log(passwordArr)
    
        passwordArr.forEach(element => {
            password += element
            
        })
    
        result.innerHTML = password   
    } else {
        window.alert("You need to input numbers greater than or equal to zero.")
    }
})



function appendRandomCharacters(passwordArr, arr, numCharacter, lengthArr) {
    for(let i = 0; i < numCharacter; i++) {
        let randNum = Math.round(Math.random()*lengthArr)
        passwordArr.push(arr[randNum])
        
    }
    return passwordArr
}

function shuffleArray(passwordArr) {

    for(let i = 0; i < passwordArr.length; i++) {
        let randNum = Math.floor(Math.random() * passwordArr.length)
        console.log(randNum)
        let tempEl = ""
        let currentEl = passwordArr[i]
        let randomEl = passwordArr[randNum]

        tempEl = currentEl
        passwordArr[i] = randomEl 
        passwordArr[randNum] = tempEl
    }
    return passwordArr
}
