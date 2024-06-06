const letters = document.querySelectorAll("input");
const loadingDiv = document.querySelector(".loading-div")

async function init(){
    
document.addEventListener("keypress" , function handleKeyPress(event){
const action = event.key;

if(action === "Enter"){
    commit();
}else if(action === "Backspace"){
    backSpace();
}else if(isLetter(action)){
    addLetter(action.toUpperCase)
}
});
}

function commit(){

}

function backSpace(){

}

function isLetter(){

}


init();
