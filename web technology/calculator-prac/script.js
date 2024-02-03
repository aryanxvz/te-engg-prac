function addition(a, b) {
    var a = parseInt(document.getElementById("inputElementOne").value);
    var b = parseInt(document.getElementById("inputElementTwo").value);
    
    const ans = a + b;
    alert ("The Sum is " +ans);
}

function subtraction(a, b) {
    var a = parseInt(document.getElementById("inputElementOne").value);
    var b = parseInt(document.getElementById("inputElementTwo").value);
    
    const ans = a - b;
    alert ("The Difference is " + ans);
}

function multiplication(a, b) {
    var a = parseInt(document.getElementById("inputElementOne").value);
    var b = parseInt(document.getElementById("inputElementTwo").value);
    
    const ans = a * b;
    alert ("The Multiplication is " + ans);
}

function division(a, b) {
    var a = parseInt(document.getElementById("inputElementOne").value);
    var b = parseInt(document.getElementById("inputElementTwo").value);
    
    const ans = a / b;
    alert ("The Division is " + ans);
}