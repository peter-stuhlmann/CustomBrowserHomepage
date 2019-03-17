const currentTime = new Date()
const hours = currentTime.getHours()
const minutes = currentTime.getMinutes()

const browserLanguage = navigator.language

let greeting

let userName = 'Peter'

switch (hours) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if (browserLanguage.includes('de')) {
            greeting = `<div class='night'>Gute Nacht, ${userName}!</div>`
        } else if (browserLanguage.includes('en')) {
            greeting = `<div class='night'>Good night, ${userName}!</div>`
        } else if (browserLanguage.includes('es')) {
            greeting = `<div class='night'>¡Buenas noches, ${userName}!</div>`
        };
        break;

    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        if (browserLanguage.includes('de')) {
            greeting = `<div class='morning'>Guten Morgen, ${userName}!</div>`
        } else if (browserLanguage.includes('en')) {
            greeting = `<div class='morning'>Good morning, ${userName}!</div>`
        } else if (browserLanguage.includes('es')) {
            greeting = `<div class='morning'>¡Buenos días, ${userName}!</div>`
        };
        break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        if (browserLanguage.includes('de')) {
            greeting = `<div class='afternoon'>Guten Tag, ${userName}!</div>`
        } else if (browserLanguage.includes('en')) {
            greeting = `<div class='afternoon'>Good afternoon, ${userName}!</div>`
        } else if (browserLanguage.includes('es')) {
            greeting = `<div class='afternoon'>¡Buenas tardes, ${userName}!</div>`
        };
        break;
        
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        if (browserLanguage.includes('de')) {
            greeting = `<div class='evening'>Guten Abend, ${userName}!</div>`
        } else if (browserLanguage.includes('en')) {
            greeting = `<div class='evening'>Good evening, ${userName}!</div>`
        } else if (browserLanguage.includes('es')) {
            greeting = `<div class='evening'>¡Buenas noches, ${userName}!</div>`
        };
        break;
}

document.querySelector('#greeting').innerHTML = greeting



let interval = 1000;

setInterval(function () {
    let currentTime = moment().format('HH:mm:ss')
    document.querySelector("#currentTime").innerHTML = currentTime
}, interval);


document.body.style.backgroundImage = localStorage.getItem("background-image");

function backgroundImage() {
    let backgroundSelection = document.querySelector('input[type=radio]:checked').value
    localStorage.setItem("background-image", `url('assets/img/background-${backgroundSelection}.jpg')`);
    document.body.style.backgroundImage = localStorage.getItem("background-image");
}
document.querySelectorAll('.wallpapers label').forEach(element => element.addEventListener("change", backgroundImage))
