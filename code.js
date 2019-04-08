// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}



function sayHello(input) {
    if (!isNaN(parseFloat(input))) {
        return "Hello, World!"
    } else if (typeof input === 'string') {
        return 'Hello, ' + input + "!"
    } else {
        return 'Hello, World!'
    }

}


function isFive(input) {
    if (typeof input === 'number') {
        return true;
    } else if (!isNaN(parseFloat(input))) {
        return false;
    } else if (input) {
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else {
        return false
    }
}

function isVowel (input) {
    switch (input) {
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case 'o':
            return true;
        case "u":
            return true;
        case "A":
            return true;
        case "E":
            return true;
        case "I":
            return true;
        case 'O':
            return true;
        case "U":
            return true;
        default:
            return false;
    }
}

function add(a, b) {
   var parseInput = parseInt(a) + parseInt(b)
    if (isNaN(parseInput)) {
        return 'NaN';
    } else {
        return parseInput;
    }
}

