let screen1=document.getElementById('screen1');
let screen2=document.getElementById('screen2');
buttons=document.querySelectorAll('button');
let screen1Value='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='c'){
            screen1Value="";
            screen1.value=screen1Value;
            screen2.value="";
        }
        else if(buttonText=='='){
            screen2.value=eval(screen1Value);
            screen1Value="";
        }
        else{
            screen1Value+=buttonText;
            screen1.value=screen1Value;
        }
    })
}