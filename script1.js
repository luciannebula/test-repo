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
