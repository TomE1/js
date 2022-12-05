// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains('subtract')) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else if (count.innerHTML < 0) {
    count.style.color = 'red';
  } else {
    count.style.color = 'black';
  }
}

// random number generator

// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);

const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
  // Generate number btn 1 and 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener('click', generateNumber);
