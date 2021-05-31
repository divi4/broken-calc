let total = 0;
let score = 0;
const memory = [];

let sectionSelector = document.querySelectorAll("section")
let ulSelector = document.querySelectorAll("ul")
let liSelector = document.querySelectorAll("li")

document.querySelector("#clear").addEventListener("click", clearFunc);
document.querySelector("#add3").addEventListener("click", add3);
document.querySelector("#add9").addEventListener("click", add9);
document.querySelector("#sub2").addEventListener("click", sub2);
document.querySelector("#sub5").addEventListener("click", sub5);
document.querySelector("#times3").addEventListener("click", times3);

function clearFunc() {
    total = 0;
    document.querySelector("#placeToPutResult").innerText = total;
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("html").style.color = "#000";
    for(let i = 0; i < sectionSelector.length; i++) {
        sectionSelector[i].style.color = "#000";
        sectionSelector[i].style.borderColor = "#000";
    }
    for(let i = 0; i < ulSelector.length; i++) {
        ulSelector[i].style.borderColor = "#000";
    }
    for(let i = 0; i < liSelector.length; i++) {
        liSelector[i].style.borderColor = "#000";
    }
}

function add3() {
    total = total + 3;
    document.querySelector("#placeToPutResult").innerText = total;
    isPrime(102);
}

function add9() {
    total = total + 9;
    document.querySelector("#placeToPutResult").innerHTML = total;
    isPrime(102);
}

function sub2() {
    total = total - 2;
    document.querySelector("#placeToPutResult").innerHTML = total;
    isPrime(102);
}

function sub5() {
    total = total - 5;
    document.querySelector("#placeToPutResult").innerHTML = total;
    isPrime(102);
}

function times3() {
    total = total * 3;
    document.querySelector("#placeToPutResult").innerHTML = total;
    isPrime(102);
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    let rgbValue = hexToRgb(color);
    checkLuminence(rgbValue["r"], rgbValue["g"], rgbValue["b"])
    return color;
}

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function checkLuminence(r, g, b) {
    if((r * 0.299 + g * 0.587 + b * 0.114) > 150) {
        document.querySelector("html").style.color = "#000";
        for(let i = 0; i < sectionSelector.length; i++) {
            sectionSelector[i].style.color = "#000";
            sectionSelector[i].style.borderColor = "#000";
        }
        for(let i = 0; i < ulSelector.length; i++) {
            ulSelector[i].style.borderColor = "#000";
        }
        for(let i = 0; i < liSelector.length; i++) {
            liSelector[i].style.borderColor = "#000";
        }
    } else if((r * 0.299 + g * 0.587 + b * 0.114) <= 150) {
        document.querySelector("html").style.color = "#fff";
        for(let i = 0; i < sectionSelector.length; i++) {
            sectionSelector[i].style.color = "#fff";
            sectionSelector[i].style.borderColor = "#fff";
        }
        for(let i = 0; i < ulSelector.length; i++) {
            ulSelector[i].style.borderColor = "#fff";
        }
        for(let i = 0; i < liSelector.length; i++) {
            liSelector[i].style.borderColor = "#fff";
        }
    }
}

function isPrime(num) {
    const sieve = [];

    for (let i = 0; i < num; i++) {
        sieve[i] = 1; // true
    }

    sieve[0] = 0; // false
    sieve[1] = 0;

    for(let i = 2; i < Math.sqrt(num); i++) {
        if(sieve[i] === 1) {
            for(let j = (i * i); j < num; j = j + i) {
                sieve[j] = 0;
            }
        }
    }

    //Output
    for(let i = 2; i < num; i++) {
        if(sieve[i] === 1 && i === total) {
            document.querySelector("body").style.backgroundColor = getRandomColor();
            if(!memory.includes(total)) {
                score = score + 1;
                memory.push(total);;
                if(score === 26) {
                    alert("Congratulations!!!")
                }
            }
            document.querySelector("#primeTotal").innerHTML = score;
        // Resets to white background when go from prime to non-prime number
        // } else if(sieve[i] == 0 && i == total) {
        //     document.querySelector("body").style.backgroundColor = "#fff";
        }
    }
}
