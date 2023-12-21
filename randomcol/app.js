const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click',()=>{
  const newColor = makerandcolor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
}) 
 
    function makerandcolor(){
        const r = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        return `rgb(${r},${b},${g})`
    }  
    const buttons = document.querySelectorAll('button');
    for(let button of buttons){
         button.addEventListener('click',colorize)
    }
    function colorize(){
            this.style.backgroundColor = makerandcolor();
            this.style.color = makerandcolor();
    }  
    
    const h2s = document.querySelectorAll('h2')
    for(let h2 of h2s){
        h2.addEventListener('click',colorize)
    }