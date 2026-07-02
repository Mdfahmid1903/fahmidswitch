const button = document.querySelector('.switch');
const button2 = document.querySelector('.switch2');
const button3 = document.querySelector('.switch3');
const button4 = document.querySelector('.switch4');
const button5 = document.querySelector('.reset-button');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const heart = document.querySelector('.heart');
const heartCount = document.querySelector('.like-count');
const count = document.querySelector('.count');
const form = document.querySelector('form');
const name = document.querySelector('#name');
const submit = document.querySelector('.submit');
const switch5 = document.querySelector('.switch5');
const color = document.querySelector('.rgb');
const character = document.querySelector('.char');
const text = document.querySelector('#text');
const form2 = document.querySelector('.form2');
const height = document.querySelector('#height');
const heightText = document.querySelector('.height-count');
const form3 = document.querySelector('.form3');
const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const total = document.querySelector('.total');
const tipAmount = document.querySelector('.tip-amount');
const totalBill = document.querySelector('.total');

button.addEventListener('click', () => {
  body.classList.toggle('darkmode');

  if (body.classList.contains('darkmode')) {
    button.innerText = '☀️';
  } else {
    button.innerText = '🌙';
  }
});

button2.addEventListener('click', () => {
  container.classList.toggle('fan');
});

button3.addEventListener('click', () => {
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
});

// heart.addEventListener('click', ()=>{
//     heartCount.innerText = parseInt(heartCount.innerText) + 1;
//     heart.classList.toggle('active');
// })

heart.addEventListener('click', () => {
  if (heart.classList.contains('active')) {
    heartCount.innerText = parseInt(heartCount.innerText) - 1;
  } else {
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
  }
  heart.classList.toggle('active');
});

button4.addEventListener('click', () => {
  count.innerText = Number(count.innerText) + 1;
});

button5.addEventListener('click', () => {
  count.innerText = 0;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.scrollTo(top);

  alert(`hello! ${name.value}. How are you?`);
});

switch5.addEventListener('click', () => {
  body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
color.textContent = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
});

text.addEventListener('input', () => {
  let characterCount = text.value.length ;
  character.textContent = `${100 - characterCount} left`;

  if(characterCount > 100){
    character.textContent = 'max limit reached';
  } 
  else if(characterCount > 90){
    character.style.color = 'red';
  }
  else if (characterCount > 70) {
    character.style.color = 'orange';
  }
  else if (characterCount > 50) {
    character.style.color = 'yellow';
  } 
  else {
    character.style.color = 'green';
  }
  
  }
);

form2.addEventListener('submit', (e) => {
  e.preventDefault();
  if (height.value < 140) {
    heightText.innerText = 'You are not tall enough to enter this website. Please grow up!Minimum height is 140cm.';
    heightText.style.color = 'red';
  }
  else {
    heightText.innerText = 'You are tall enough to enter this website';
    heightText.style.color = 'green';
  }
});

form3.addEventListener('submit', (e) => {
  e.preventDefault();
  tipAmount.innerText = "TIP:"+(bill.value * (tip.value / 100)).toFixed(2);
  totalBill.innerText = "TOTAL:"+(bill.value * (1 + tip.value / 100)).toFixed(2);
});