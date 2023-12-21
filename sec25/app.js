const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("hello handsome");
    console.log("also you");
}  

function scream(){
    console.log("AaAaAa");
    console.log("hurray , it's work");
}
btn.onmouseenter = scream;  

 const btn1 = document.querySelector('#v1')
 btn1.addEventListener('click',()=>{  // here click is type of event and second one is function
    alert("u r not doing great");
 })  

 const tasbtn = document.querySelector('#tas');
 function toust(){
    console.log("Toust!");
 }
function sought(){
    console.log("Sought!");
}  
tasbtn.addEventListener('click',toust,{once:true})  // here only one time toust fun run
tasbtn.addEventListener('click',sought); 