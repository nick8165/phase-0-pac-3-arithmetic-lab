function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(n){
    n++
    return n;
}

function decrement(n){
    n--
    return n;
}

increment(117);
decrement(478);

function makeInt(string) {
    string = parseInt(string, 10);
    return string;
}
function preserveDecimal(string) {
    string = parseFloat(string);
    return string;
}

makeInt("0x2328", 10);
preserveDecimal("2.222");
preserveDecimal('sldkjflksjf');