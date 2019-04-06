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