const currentTime = new Date()
const hours = currentTime.getHours()
const minutes = currentTime.getMinutes()

const browserLanguage = navigator.language

let greeting

switch (hours) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if (browserLanguage.includes('de')) {
            greeting = "<div class='night'>Gute Nacht!</div>"
        } else if (browserLanguage.includes('en')) {
            greeting = "<div class='night'>Good night!</div>"
        } else if (browserLanguage.includes('es')) {
            greeting = "<div class='night'>¡Buenas noches!</div>"
        };
        break;

    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        if (browserLanguage.includes('de')) {
            greeting = "<div class='morning'>Guten Morgen!</div>"
        } else if (browserLanguage.includes('en')) {
            greeting = "<div class='morning'>Good morning!</div>"
        } else if (browserLanguage.includes('es')) {
            greeting = "<div class='morning'>¡Buenos días!</div>"
        };
        break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        if (browserLanguage.includes('de')) {
            greeting = "<div class='afternoon'>Guten Tag!</div>"
        } else if (browserLanguage.includes('en')) {
            greeting = "<div class='afternoon'>Good afternoon!</div>"
        } else if (browserLanguage.includes('es')) {
            greeting = "<div class='afternoon'>¡Buenas tardes!</div>"
        };
        break;
        
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        if (browserLanguage.includes('de')) {
            greeting = "<div class='evening'>Guten Abend!</div>"
        } else if (browserLanguage.includes('en')) {
            greeting = "<div class='evening'>Good evening!</div>"
        } else if (browserLanguage.includes('es')) {
            greeting = "<div class='evening'>¡Buenas noches!</div>"
        };
        break;
}

document.querySelector('#greeting').innerHTML = greeting
