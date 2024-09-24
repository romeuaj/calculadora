function clkButton(data){
    const display = document.querySelector(".display").value
   
    document.querySelector('.display').value = display + data;
    
}
function limpa(){
    document.querySelector('.display').value = '';
}

function calcular(){
    const display = document.querySelector(".display").value
    try{
    document.querySelector('.display').value = eval( display )
    }catch(e){
        document.querySelector('.display').value = "SYNTAX ERROR!"
    }
}
    

function inverte(){
    const display = document.querySelector(".display").value
    document.querySelector('.display').value = display * -1;
}