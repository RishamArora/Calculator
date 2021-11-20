var buttons = document.getElementsByClassName("btn");
var display=document.getElementById("answer");
for(var i =0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){
       
        switch(e.target.innerText){
           
        case 'AC':
            display.innerText="";
            break;
            case '=':
                try{
                display.innerText=eval(display.innerText)
                }catch{
                    display.innerText="ERROR"
                }
                break;
                default:
            display.innerText +=e.target.innerText;
        }
        
        
    });
}