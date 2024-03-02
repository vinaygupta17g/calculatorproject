let hid=document.querySelectorAll(".hide");
let back=document.querySelector("#container");
let mod=document.querySelector("#mod");
let mode='dark';
let r='normal';
function calculation( )
{
        let display=document.getElementById('display').value;
        var result=eval(display);
        document.getElementById('display').value=result;
}

document.addEventListener('keydown' ,()=>
{
    var key=event.key;
    if( key>='0' && key <='9')
    {
        document.getElementById('display') .value+=key
    }
    else if(key=='+'||key=='-'|| key=='*'|| key=='/'|| key=='%')
    {
        document.getElementById('display') .value+=key
    }
    else if(key=='=' || key=='Enter')
    {
        calculation();
    }
    else if(key=='Backspace')
    {
        clean()
    }
    else if(key=='Delete')
    {
        display.value=" "
    }
    else if (key=='r'|| key=='R')
    {
        scientific();
    }
});
function clean()
{
    document.getElementById('display').value=display.value.slice(0, -1);
}

 function scientific()
 {
    if( r=="normal")
    {
        for(let i=0;i<hid.length;i++)
        {
            hid[i].classList.remove("hide");
          
        }         
        r="science";
        document.querySelector("#container").style.height='650px';
        
    }
    else
    {
        for(let i=0;i<hid.length;i++)
        {
            hid[i].classList.add("hide");
          
        } 
        r="normal";
        document.querySelector("#container").style.height='550px';
    }

 }
 function sin()
 {
    document.getElementById('display').value=Math.sin(Number(document.getElementById('display').value));
 }

 function cos()
 {
    document.getElementById('display').value=Math.cos(Number(document.getElementById('display').value));
 }
 function tan()
 {
    document.getElementById('display').value=Math.tan(Number(document.getElementById('display').value));
 }
 function  log()
 {
    document.getElementById('display').value=Math.log(Number(document.getElementById('display').value));
 }
 function ln()
 {
    document.getElementById('display').value=Math.ln(Number(document.getElementById('display').value));
 }

 function sqrt()
 {
    document.getElementById('display').value=Math.sqrt(document.getElementById('display').value);
 }
 function pow()
 {
    document.getElementById('display').value=Math.pow(document.getElementById('display').value,2);
 }
 function fact()
 {
    let num=document.getElementById('display').value;
    let fact=1;
    for( let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
        display.value=fact;
 }
 function background()
 {
    form=document.querySelector(".form");
    form.style.backgroundColor="blue"

 }
 mod.addEventListener('click',()=>
    {
        if (mode=="dark")
        {
            document.querySelector(".form").style.backgroundColor="white";
            mode="light";
        }
        
        else{
            document.querySelector(".form").style.backgroundColor="black";
            mode='dark'; 
        }
          
    })