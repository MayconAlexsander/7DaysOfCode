const number_0 = document.getElementById("botao-0")
const number_1 = document.getElementById("botao-1")
const number_2 = document.getElementById("botao-2")
const number_3 = document.getElementById("botao-3")
const number_4 = document.getElementById("botao-4")
const number_5 = document.getElementById("botao-5")
const number_6 = document.getElementById("botao-6")
const number_7 = document.getElementById("botao-7")
const number_8 = document.getElementById("botao-8")
const number_9 = document.getElementById("botao-9")
const visor = document.querySelector(".visor span")

number_0.addEventListener("click", function () {
    
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "0"
    } else {
        visor.innerText += "0"
    }
    
})

number_1.addEventListener("click", function () {
    
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "1"
    } else {
        visor.innerText += "1"
    }
    
})

number_2.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "2"
    } else {
        visor.innerText += "2"
    }
    
})

number_3.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "3"
    } else {
        visor.innerText += "3"
    }
    
})

number_4.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "4"
    } else {
        visor.innerText += "4"
    }
    
})

number_5.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "5"
    } else {
        visor.innerText += "5"
    }
    
})

number_6.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "6"
    } else {
        visor.innerText += "6"
    }
    
})

number_7.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "7"
    } else {
        visor.innerText += "7"
    }
    
})

number_8.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "8"
    } else {
        visor.innerText += "8"
    }
    
})

number_9.addEventListener("click", function () {
        
    if (visor.innerHTML == "000000000") {
        visor.innerText = ""
        visor.innerText += "9"
    } else {
        visor.innerText += "9"
    }
    
})

// Botão -> =
function calcular() {

}

// Botão -> CE
function apagarTudo() {
    
    visor.innerText = "000000000"

}