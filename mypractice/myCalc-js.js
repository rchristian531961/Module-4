var myPB="";

//Adds value of button to string
function addValue(value){
    myPB+=value;
}

//Displays the myPB string in html file
function displayPb(){
    document.getElementById("myProblem").innerHTML=myPB;
}

//General Function when buttons are pressed:
//Will store value in (myPB) and Display
function myFunction(myValue){
    addValue(myValue);
    displayPb();
}

//Clears (myPB) and displays to html
function AC(){
    myPB="";
    displayPb();
}

//Deletes the last entry in string and displays in html
function CE(){
    myPB=myPB.substring(0,x.length-1);
    displayPb();
}

//returns the operation in string
function findOp(){
    if (myPB.includes("+")){
        return "+";
    }
    else if(myPB.includes("-")){
        return "-";
    }
    else if(myPB.includes("*")){
        return "*";
    }
    else{
        return "/";
    }
}

function mySolution(first,operation,second){
    var num1=Number(first);
    var num2=Number(second);
    switch (operation){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        default:
            if(num2===0){
                return undefined;
            }
            return num1/num2;
    }
}

function equals(){
    var myOperation=findOp();
    var myArray=myPB.split(myOperation);
    var solution=mySolution(myArray[0],myOperation,myArray[1]);
    myPB=solution;
    displayPb();
}

