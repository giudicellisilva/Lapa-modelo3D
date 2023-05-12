const model = document.querySelector(".model");
const input = document.querySelector(".inputcolor");

input.addEventListener( "change", ()=>{
    colocaStyle(input.value)
});

function colocaStyle(value){
    model.style.backgroundColor = value;
}