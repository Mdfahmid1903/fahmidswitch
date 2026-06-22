const button = document.querySelector(".switch");
const button2 = document.querySelector(".switch2");
const button3 = document.querySelector(".switch3");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const heart = document.querySelector(".heart");
const heartCount = document.querySelector(".count");


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

button3.addEventListener('click', ()=>{
    setTimeout(() => {
        red.classList.add('light');
    }, 1000);
    
    setTimeout(() => {
        red.classList.remove('light');
        yellow.classList.add('light');
    }, 2000);
    
    setTimeout(() => {
        yellow.classList.remove('light');
        green.classList.add('light');
    }, 3000);
    
    setTimeout(() => {
        green.classList.remove('light');
        red.classList.add('light');
    }, 4000);
    red.classList.remove('light');
    
})

// heart.addEventListener('click', ()=>{
//     heartCount.innerText = parseInt(heartCount.innerText) + 1;
//     heart.classList.toggle('active');
// })

heart.addEventListener('click', ()=>{
    if(heart.classList.contains('active')){
        heartCount.innerText = parseInt(heartCount.innerText) - 1;
    }else{
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    }
    heart.classList.toggle('active');
})

