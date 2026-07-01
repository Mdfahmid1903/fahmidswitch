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
  alert(`hello! ${name.value}. How are you?`);
});

switch5.addEventListener('click', () => {
  body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
color.textContent = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
});

text.addEventListener('input', () => {
  let characterCount = text.value.length ;
  character.textContent = `${280 - characterCount} left`;
  if (characterCount > 160) {
    character.style.color = 'red';
  } else{
    character.style.color = 'green';
  }
  }
);a