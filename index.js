'use strict';
let numberOfPizzasInCart = 0;
let totalNumberOfPizzas = numberOfPizzasInCart;

document.querySelector('#cart-number').textContent = numberOfPizzasInCart;

document.querySelector('#total').textContent = numberOfPizzasInCart;

const mainCartButton = document.querySelectorAll('.main-cart-button');
let totalPriceAmount = document.querySelectorAll('.price-amount');
let totalPriceInCart = document.querySelector('#total');

for (let i = 0; i < mainCartButton.length; i++) {
  mainCartButton[i].addEventListener('click', function () {
    let totalNumber = Number(totalPriceAmount[i].textContent);
    totalPriceInCart.textContent = +totalPriceInCart.textContent + totalNumber;
    numberOfPizzasInCart++;
    document.querySelector('#cart-number').textContent = numberOfPizzasInCart;
  });
}

document.querySelector('#cart-link').addEventListener('click', function () {
  document.querySelector('.dropdown-content').classList.remove('hidden');
});

document.querySelector('#close-button').addEventListener('click', function () {
  document.querySelector('.dropdown-content').classList.add('hidden');
});

document.querySelector('#cancel').addEventListener('click', function () {
  document.querySelector('#total').textContent = 0;
  document.querySelector('#cart-number').textContent = 0;
});

let modal = document.getElementById('myModal');

let btn = document.getElementById('myBtn');

let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
  document.getElementById('final-cost').textContent =
    totalPriceInCart.textContent;
  let dateToday = new Date();
  let currentDateAndTime =
    dateToday.getDay() +
    '.' +
    dateToday.getMonth() +
    '.' +
    dateToday.getFullYear() +
    ' ' +
    dateToday.getHours() +
    ':' +
    dateToday.getMinutes() +
    ':' +
    dateToday.getSeconds();
  document.getElementById('date').textContent = currentDateAndTime;
};

span.onclick = function () {
  modal.style.display = 'none';
};

let submit = document.getElementsByClassName('submit-button')[0];

submit.onclick = function () {
  modal.style.display = 'none';
  document.querySelector('.dropdown-content').classList.add('hidden');
  document.querySelector('.made-order-line').classList.remove('hidden');
  totalPriceAmount.textContent = 0;
  totalNumberOfPizzas.textContent = 0;
};
