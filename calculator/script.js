let display = document.querySelector(".display");
let nums=document.querySelectorAll(".num");
let clear=document.querySelector("#clear");
let eq=document.querySelector("#eq");
let sign=document.querySelector("#sign");

nums.forEach((val)=>
{
    val.addEventListener("click",()=>
    {
        display.innerText+=val.innerText;
    });
});

clear.addEventListener("click",()=>
{
    display.innerText="";
});

eq.addEventListener("click",()=>
{
    display.innerText=eval(display.innerText).toFixed(3).toString();
});

sign.addEventListener("click",()=>
{
    if(display.innerText[0]=="-")
        display.innerText=display.innerText.slice(1);
    else
        display.innerText="-".concat(display.innerText);
})