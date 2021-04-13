function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
  }
const allInputs = document.querySelectorAll("input[type='button']"); 
console.log(allInputs);

function addListeners(nodeList, func){
    for(let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("click", func);
    }
}

function getValues(e){
    console.log(e.target.defaultValue, "<-- test");
}

addListeners(allInputs, getValues);

function solve(){
   
//split 0 = A split1 is the operator split2 is B
    var [A, operator, B] = form.displayResult.value.split(/([-\+*\/])/);
    if (operator== "+"){
        form.displayResult.value= +A + +B;  
    }
    if (operator=="-"){
        form.displayResult.value= A-B;
    }
    if (operator=="*"){
        form.displayResult.value= A*B;
    }
    if (operator=="/"){
        form.displayResult.value= A/B; 
    }
}

var clearButton= document.querySelector("#clearButton");
console.log(clearButton)

clearButton.addEventListener("click", function(e){
    form.displayResult.value="";
});
