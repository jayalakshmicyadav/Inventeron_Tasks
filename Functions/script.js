function showMessage(type) {

    document.getElementById("homePage").style.display = "none";
    document.getElementById("messagePage").style.display = "block";

    const output = document.getElementById("output");

    if (type === "arrow") {
        output.innerText = "This is an Arrow Function. It uses => syntax.";
    } 
    else if (type === "parameter") {
        output.innerText = "This function demonstrates Parameters and Arguments.";
    } 
    else if (type === "return") {
        output.innerText = "This function uses the Return keyword to send back a value.";
    } 
    else if (type === "anonymous") {
        output.innerText = "This is an Anonymous Function (function without a name).";
    } 
    else if (type === "callback") {
        output.innerText = "This is a Callback Function (a function passed as an argument).";
    }
}

function goBack() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("messagePage").style.display = "none";
}