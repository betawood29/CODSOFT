let total=0;
let disp="0";

let operator=null;
const input=document.querySelector(".input");
const btn=document.querySelector(".buttons");

btn.addEventListener("click",()=>{
    btnclick(event.target.innerHTML);
});

function btnclick(value){
    if(isNaN(parseInt(value))){
        symbol(value);
    }else{
        operand(value);
    }
    display();

}
function symbol(symb){
    switch(symb){
        case "C":
            disp="0";
            total=0;
            operator=null;
            break;
        
        case "=":
            if(operator===null){
                return;
            }

            calculate(parseInt(disp));
            disp=""+total;
            operator=null;
            total=0;
            break;

        default:
            handleOperator(symb);
            break;
    }
}

function operand(value){
    if(disp==="0"){
        disp=""+value;
    }else{
        disp+=value;
    }
}

function handleOperator(value){
    const buffer=parseInt(disp);
    operator=value;
    if(total===0){
        total=buffer;
    }else{
        calculate(buffer);
    }
    
    disp="0";

}
function calculate(value){
    if(operator === "+"){
        total+=value;
    }
    else if(operator==="-"){
        total-=value;
    }
    else if(operator==="*"){
        total*=value;
    }
    else{
        total/=value;
    }
}

function display(){
    input.value=disp;
}