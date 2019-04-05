// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    var parseInput = parseFloat(input);
    if (typeof input === 'string') {
        return 'Hello, ' + input + "!"
    } else if (typeof parseInput === "number") {
        return "Hello, World!";
    }
    return "Hello, World!";
}

