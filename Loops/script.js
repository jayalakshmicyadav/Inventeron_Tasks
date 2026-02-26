function forLoop(){
    let result = "";
    for(let i=1; i<=5; i++){
        result += "For Loop: " + i + "\n";
    }
    document.getElementById("output").innerText = result;
}

function whileLoop(){
    let i=1;
    let result = "";
    while(i<=5){
        result += "While Loop: " + i + "\n";
        i++;
    }
    document.getElementById("output").innerText = result;
}

function doWhileLoop(){
    let i=1;
    let result = "";
    do{
        result += "Do While Loop: " + i + "\n";
        i++;
    }while(i<=5);
    document.getElementById("output").innerText = result;
}

function forInLoop(){
    let student = {name:"abc", age:20, course:"BE"};
    let result = "";
    for(let key in student){
        result += key + " : " + student[key] + "\n";
    }
    document.getElementById("output").innerText = result;
}

function forOfLoop(){
    let numbers = [10,20,30,40,50];
    let result = "";
    for(let value of numbers){
        result += "Value: " + value + "\n";
    }
    document.getElementById("output").innerText = result;
}

function breakContinue(){
    let result = "";
    for(let i=1; i<=10; i++){
        if(i==3){
            continue;   
        }
        if(i==7){
            break;      
        }
        result += i + "\n";
    }
    document.getElementById("output").innerText = result;
}

function nestedLoop(){
    let result = "";
    for(let i=1; i<=3; i++){
        for(let j=1; j<=3; j++){
            result += i + " x " + j + " = " + (i*j) + "\n";
        }
        result += "\n";
    }
    document.getElementById("output").innerText = result;
}