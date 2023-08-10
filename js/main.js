var inpute= document.getElementById("input");
var btnl=document.getElementById("btn");
var parv=document.getElementById("par");
btnl.onclick=function(){
    var inputvalue= inpute.value;
    parv.innerHTML=inputvalue;
    inpute.value="";
}