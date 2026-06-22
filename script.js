const button = document.querySelector(".switch");
const body = document.querySelector("body");
const button2 = document.querySelector(".switch2");
const container = document.querySelector(".container");

button.addEventListener('click', ()=>{
body.classList.toggle('darkmode');

if(body.classList.contains('darkmode')){
    button.innerText = '☀️';
}else{
    button.innerText= '🌙';
}
})

button2.addEventListener('click', ()=>{
    container.classList.toggle('fan');
})

